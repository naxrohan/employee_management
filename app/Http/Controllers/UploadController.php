<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessEmployees;
use App\Models\JobBatch;
use Exception;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Request;
use function public_path;
use function redirect;
use function response;
use function session;
use function view;

class UploadController extends Controller
{
    private $batchSize = 200;
    private $batch = null;
    /**
     * Index, file upload form
     */
    public function index(){

        return view('upload');
    }

    /**
     * processing function
     */
    public function processFile(Request $request) {
        try {
            if($request->has('file_upload'))
            {
                $fileName = $request->file_upload->getClientOriginalName();
                $filePath = public_path('uploads') ."/{$fileName}";
                
                if(!file_exists($filePath)){
                    $request->file_upload->move(public_path('uploads'), $fileName);
                }
              
                $finalJobData = [];
                $records = array_map('str_getcsv', file($filePath));
                $header = array_shift($records);
                $header = array_map(function($item){ return trim($item,"'"); }, $header);
                $dataFromCsv = array_chunk($records, $this->batchSize);
              
                $this->batch = Bus::batch([])->name($fileName)->dispatch();
                
                foreach ($dataFromCsv as $index => $dataCsv)
                {
                    foreach ($dataCsv as $data)
                    {
                        $data = array_map(function($item){ return trim($item,"'"); }, $data);
                        $finalJobData[$index][] = array_combine($header, $data);
                    }
                    
                    $this->batch->add(new ProcessEmployees($finalJobData[$index]));
                    //ProcessEmployees::dispatch($finalJobData[$index]);
                }
                session()->put( 'lastBatchId' , $this->batch->id);
                
                return redirect( '/progress?id='. $this->batch->id );
                
            }
        } catch (Exception $e) {
            Log::error($e);
            dd($e);
        }
    }

    /**
     * File upload progress bar
     */
    public function progress(){

        return view('progress');
    }
    
    public function progress_data(Request $request) {
        try {
            $batchId = $request->id ?? session()->get('lastBatchId');
            
            if(JobBatch::where('id', $batchId)->count()){
                $responseBatch = JobBatch::where('id', $batchId)->first();
                return response()->json($responseBatch);
            }
            
        } catch (Exception $ex) {
            Log::error($ex);
        }
    }

    public function progress_cancel(Request $request){
        // try{
            $batchId = $request->id ?? session()->get('lastBatchId');

            if(trim($batchId ) != ""){

                if ($this->batch()->cancelled()) {
                    return response()->json(["already_calcelled", $batchId]);
                }else{
                    $cancel = $this->batch()->cancel();
                    return response()->json($cancel);
                }
            }else {
                return response()->json(["error_occured 1", $batchId]);
            }
        // }catch (Exception $ex) {
        //     Log::error($ex);
        //     return response()->json(["error_occured 2", $ex]);
        // }
    }
}

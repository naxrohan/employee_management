<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UploadController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/user_manage', [HomeController::class, 'user'])->name('user_manage');
Route::get('/department_manage', [HomeController::class, 'department'])->name('department_manage');
Route::get('/country_state_city', [HomeController::class, 'country_state_city'])->name('country_state_city');


Route::get('/upload', [UploadController::class, 'index'])->name('uploadPage');
Route::get('/progress', [UploadController::class, 'progress'])->name('progressPage');

Route::post('/upload/file', [UploadController::class, 'processFile'])->name('processFile');
Route::get('/upload/progress', [UploadController::class,'progress_data'])->name('uploadProgress');
Route::get('/upload/cancel', [UploadController::class,'progress_cancel'])->name('uploadCancel');
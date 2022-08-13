@extends('layouts.app')

@section('content')
<div class="container" id="uploadMng">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Upload') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="container mt-8">
                        <div class="form">
                            <form class="form row"
                                action="{{ route('processFile') }}"
                                method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <div class="form-group col-md-6">
                                  <input type="file" class="form-control" id="file_upload" name="file_upload">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="submit" class="btn btn-info submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

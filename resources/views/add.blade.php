@extends('layouts.app')



@section('content')
    <form method="post" action="{{url('store')}}" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="form-group col-sm-6">
                <label for="fist_name">Fisrt Name</label>
                <input class="form-control" type="text" name="fist_name">
            </div>

            <div class="form-group col-sm-6">
                <label for="last_name">Last Name</label>
                <input class="form-control" type="text" name="last_name">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-7">
                <label for="description">description</label>
                <textarea class="form-control" name="description"></textarea>
            </div>

            <div class="form-group custom-file col-md-5" style="margin-top: 30px">
                <input class="custom-file-input" type="file"
                       name="image" >
                <label class="custom-file-label" for="customFile">Choose
                    image</label>
            </div>
        </div>
            <div style="width:100%;margin-top:60px;text-align: center;">
                <button type="submit" class="btn btn-success">Add new profile</button>
            </div>
    </form>
@endsection

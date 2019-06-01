@extends('layouts.app')



@section('content')
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div><br />
    @endif
    <form method="post" action="{{route('store')}}" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="form-group col-sm-6">
                <label for="first_name">Fisrt Name</label>
                <input class="form-control" type="text" name="first_name" id="first_name">
            </div>

            <div class="form-group col-sm-6">
                <label for="last_name">Last Name</label>
                <input class="form-control" type="text" name="last_name" id="last_name">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-7">
                <label for="description">description</label>
                <textarea class="form-control" name="description"></textarea>
            </div>

            <div class="form-group  col-md-5">
                <label for="image">Image link</label>
                <input class="form-control" type="text"
                       name="image" >

            </div>
        </div>
            <div style="width:100%;margin-top:60px;text-align: center;">
                <button type="submit" class="btn btn-success">Add new profile</button>
            </div>
    </form>
@endsection

@extends('layouts.app')



@section('content')
    <div class="row-crud">
        @foreach ($profiles as $profile)
            <div class="crud-col d-flex">
                <div class="col" data-profile="{{$profile->id}}">
                    <h1>{{ $profile->first_name .' '. $profile->last_name  }}</h1>
                    <div class="wrapper-img"><img src="{{ $profile->image }}"/>
                    </div>
                </div>
                <p class="desc">
                    {{ $profile->description }}
                </p>

            </div>
            <div class="buttons">
                <button class="btn btn-light edit">Edit</button>
                <button class="btn btn-danger del">Delete</button>
            </div>
            <form class="d-none" method="post" action="{{url('edit')}}"
                  enctype="multipart/form-data">

                <div class="row" data-profile="{{$profile->id}}">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" name="fist_name"
                               placeholder="Fisrt Name"
                               value="{{$profile->first_name}}">
                    </div>

                    <div class="form-group col-md-6">
                        <input type="text" class="form-control"
                               placeholder="Last Name"
                               name="last_name"
                               value="{{ $profile->last_name }}">
                    </div>
                </div>

                <div class="crud-col row">
                    {{--@csrf--}}
                    <div class="wrapper-img col-md-4">
                        <div class="form-group custom-file">
                            <input class="custom-file-input" type="file"
                                   name="image">
                            <label class="custom-file-label" for="customFile">Choose
                                image</label>
                        </div>
                    </div>
                    <div class="desc form-group col-md-8">
                        <textarea class="form-control" class="custom-text-input"
                                  name="description"
                                  class="desc">{{ $profile->description }}
                        </textarea>
                    </div>

                </div>
                <div style="width:100%;margin-bottom:60px;text-align: center;">
                    <button type="submit" class="btn btn-success">Valid
                        edit
                    </button>
                </div>
            </form>


        @endforeach
    </div>
@endsection

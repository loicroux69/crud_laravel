@extends('layouts.app')

@section('content')
    <div class="row-crud">
        @foreach ($profiles as $profile)
            <div class="row">
                <div class="col-md-3" data-profile="{{$profile->id}}">
                    <h1>{{ $profile->first_name .' '. $profile->last_name  }}</h1>
                    <div class="wrapper-img"><img src="{{ $profile->image }}"/>
                    </div>
                </div>
                <p class="desc col-md">
                    {{ $profile->description }}
                </p>

            </div>
            <div class="buttons d-flex">
                <button class="btn btn-light edit">Edit</button>
                <form action="{{ route('destroy', $profile->id)}}" methods="post">
                    @method('DELETE')
                    @csrf

                    <button class="btn btn-danger del" type="submit">Delete</button>
                </form>
            </div>
            <form class="d-none" method="post" action="{{route('edit', $profile->id)}}"
                  enctype="multipart/form-data">
                @method('PATCH')
                @csrf

                <div class="row" >
                    <div class="form-group col-md-6">
                        <input type="text" name="first_name" class="form-control"
                               placeholder="Fisrt Name"
                               value="{{$profile->first_name}}">
                    </div>

                    <div class="form-group col-md-6">
                        <input type="text" name="last_name" class="form-control"
                               placeholder="Last Name"

                               value="{{ $profile->last_name }}">
                    </div>
                </div>

                <div class="crud-col row">
                    <div class="wrapper-img col-md-4">
                        <div class="form-group">
                            <input type="text" class="form-control"
                                   placeholder="Last Name"
                                   name="image"
                                   value="{{ $profile->image }}">
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

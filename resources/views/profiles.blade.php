@extends('layouts.app')


@section('content')

    <div class="row-grid">
        @foreach ($profiles as $profile)
            <div class="box" data-profile="{{$profile->id}}">
                <h1>{{ $profile->first_name .' '. $profile->last_name  }}</h1>
                <div class="wrapper-img"><img src="{{ $profile->image }}"/>
                </div>
            </div>
            <div class="articles d-none">


                <article class="art-profile d-none profile{{$profile->id}}">
                    <p>{{ $profile->description }}</p>
                </article>
            </div>
        @endforeach
    </div>
    <span class="arrow-return"></span>
    <article class="content-clicked container d-none">
        <p></p>
    </article>


@endsection

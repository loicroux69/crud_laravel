
@extends('layouts.app')


@section('content')

    <div class="row">
    @foreach ($profiles as $profile)
        <div class="col" data-profile="{{$profile->id}}">
            <h1>{{ $profile->first_name .' '. $profile->last_name  }}</h1>
            <div class="wrapper-img"><img src="{{ $profile->image }}"/></div>
        </div>
    @endforeach
    </div>

    <div class="articles">
        @foreach ($profiles as $profile)
            <article class="art-profile d-none profile{{$profile->id}}" >
                <h1>This is {{ $profile->first_name .' '. $profile->last_name  }}</h1>
                <div class="wrapper-img"><img src="{{ $profile->image }}"/></div>
                <p>This is user {{ $profile->description }}</p>
            </article>
        @endforeach
    </div>
@endsection

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>





<!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito"
          rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @if(!$js)
        <link href="{{ asset('css/crud.css') }}" rel="stylesheet">
    @endif
</head>
<body>
<div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name') }}
            </a>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">


                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <!--next route for crud app-->
                        <a class="nav-link {{Request::is('home') ? 'active' : ''}}"
                           href="{{ url('/')  }}">{{ __('Home') }}</a>
                    </li>
                    <li class="nav-item">
                        <!--next route for crud app-->
                        <a class="nav-link {{Request::is('crud') ? 'active' : ''}}"
                           href="{{ route('crud') }}">{{ __('Manage') }}</a>
                    </li>
                    <li class="nav-item">
                        <!--next route for crud app-->
                        <a class="nav-link {{Request::is('add') ? 'active' : ''}}"
                           href="{{ route('add') }}">{{ __('Add') }}</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <main class="py-4">
        <section class="container">
            @yield('content')
        </section>
    </main>


</div>

<!-- Scripts -->
@if($js)
    <script src="{{ asset('js/app.js') }}" defer></script>

@else
    <script src="{{ asset('js/crud.js') }}" defer></script>

@endif
</body>
</html>

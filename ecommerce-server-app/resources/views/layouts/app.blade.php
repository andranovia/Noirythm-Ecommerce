<!DOCTYPE html>
<html>
<head>
    <title>Laravel Server</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @vite('resources/css/app.css')
</head>
<body>
    <x-navbar />
    @yield('content')
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
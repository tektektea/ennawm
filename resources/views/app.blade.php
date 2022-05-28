<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Ennawm Mizo tan:Mizoram tan</title>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <script src="https://player.vdocipher.com/playerAssets/1.6.10/vdo.js"></script>
        @routes
		@vite
	</head>
	<body  class="antialiased bg-dark">
		@inertia
	</body>
</html>

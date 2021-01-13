const Leaflet = `
<!DOCTYPE html>
<html>
	<head>
		<title>Mobile tutorial - Leaflet</title>

		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
		<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>

		<style>
			html, body {
				height: 100%;
				margin: 0;
			}
			#map {
				width: 600px;
				height: 400px;
			}
		</style>

		<style>body { padding: 0; margin: 0; } #map { height: 100%; width: 100vw; }</style>
	</head>
	<body>
		<div id="map"></div>

		<script>
			var mymap = L.map('map').setView([23.237728, -106.426342], 15);

			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXNhYWNzYTUxIiwiYSI6ImNraWllc29pOTBiZ2ozMHFtMm56NnNldGkifQ.re7gbO7dvDgDLI-Zw94YtQ', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: 'pk.eyJ1IjoiaXNhYWNzYTUxIiwiYSI6ImNraWllc29pOTBiZ2ozMHFtMm56NnNldGkifQ.re7gbO7dvDgDLI-Zw94YtQ'
			}).addTo(mymap);

			var marker = L.marker([23.237728, -106.426342]).addTo(mymap);
			marker.bindPopup("<b>Titulo del reporte</b><br>@autorUsuario").openPopup();
			
			var marker = L.marker([23.229121, -106.427693]).addTo(mymap);
			marker.bindPopup("<b>Titulo del reporte</b><br>@autorUsuario2").openPopup();
		</script>
	</body>
</html>
`;

export default Leaflet;

//CREACION DE SVG PARA DATAVIZ CON D3JS
/*let wb = parseInt(d3.select("#vis1").style("width"));
let hb = width * 0.654;

let marginb = {top: 0, bottom: 0, right: wb*0, left:wb*0};
let widthb = wb - marginb.left - marginb.right;
let heightb = hb - marginb.top - marginb.bottom;

let svg = d3.select("#vis1")
	.append("svg")
	.attr("width", widthb + marginb.left + marginb.right)
	.attr("height", heightb + marginb.top + marginb.bottom)
	.append("g")
	.attr("id","svgb")
	.attr("transform","translate(" + marginb.left + "," + marginb.top + ")");*/


//FORMATOS BASICOS DE NUMEROS
/*var formatop = d3.format(".2f");
var formatot = d3.format(",d");*/


//CARGA DE ARCHIVO ZIPPEADO
/*d3.buffer("./data/archivo.json.gz").then(function(zipped_json) {

	var topo_json = JSON.parse(pako.ungzip(new Uint8Array(zipped_json), {"to":"string"}));
	var geo_json = topojson.feature(topo_json,topo_json.objects.UNIDADES);

})*/


//CARGA DE JSON
/*d3.json("./data/archivo.json").then(function(json){
})*/


//GENERACION DE MAPA CON LEAFLET + D3JS
/*d3.select("#mapa").style("width",wm + "px").style("height",hm + "px");

var mymap1 = L.map('mapa',{
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 40
}).setView([cx, cy], 7);

var layer = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'

L.tileLayer(layer, {
    //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(mymap1);

(function(){
    var originalInitTile = L.GridLayer.prototype._initTile
    L.GridLayer.include({
        _initTile: function (tile) {
            originalInitTile.call(this, tile);

            var tileSize = this.getTileSize();

            tile.style.width = tileSize.x + 1 + 'px';
            tile.style.height = tileSize.y + 1 + 'px';
        }
    });
})()

var transform1 = d3.geoTransform({point: projectPoint1}),
    path1 = d3.geoPath().projection(transform1);

function projectPoint1(x, y) {
  var point = mymap1.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
}

d3.selectAll(".leaflet-control-attribution").select("a").html("")
d3.selectAll(".leaflet-control-zoom").remove()

var svgm = d3.select(mymap1.getPanes().overlayPane).append("svg");
var g1 = svgm.append("g").attr("class","leaflet-zoom-hide");

var secciones1 = g1.selectAll(".seccion")
	.data(POLIGONOS)
	.enter().append("path")
  	.attr("class","seccion")
	.style("fill-opacity",0.75)
	.style("stroke","white")
	.style("stroke-width","0.3px");

mymap1.on("zoom", reset);
reset();

function reset(){

  	var bounds = path1.bounds(secciones_f),
  	    topLeft = bounds[0],
  	    bottomRight = bounds[1];

  	svgm.attr("width", bottomRight[0] - topLeft[0])
  	    .attr("height", bottomRight[1] - topLeft[1])
  	    .style("left", topLeft[0] + "px")
  	    .style("top", topLeft[1] + "px");

  	g1.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

  	secciones1.attr("d",path1);

}*/
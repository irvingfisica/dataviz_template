# dataviz_template
El repo es un template para armar dataviz en html, usando D3js

## Maquetado
El maquetado de la web se realiza con [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

## Recetas
El repositorio contiene algunas recetas que se usan de forma regular en la creación de dataviz y mapas. Por ahora todo está en el archivo ejemplos.js, eventualmente se puede hacer un archivo para cada receta. Las recetas hasta ahora son:
* Creación de un svg en un div semiresponsivo, con bordes.
* Formatos de números vía [D3js](https://d3js.org/)
* Carga de archivos vía [D3js](https://d3js.org/), tanto de JSON como de JSON zippeados a traves de [PakoJS](https://github.com/nodeca/pako).
* Código básico para montar un mapa usando Leaflet y montarle polígonos vía [D3js](https://d3js.org/).

## D3js
Las visualizaciones y gráficas se arman con [D3js](https://d3js.org/).

## Carga de archivos
El repo perimte cargar datos vía D3js y archivos de datos zippeados vía [PakoJS](https://github.com/nodeca/pako) + [D3js](https://d3js.org/). La técnica de mandar datos zippeados y descomprimirlos en el cliente permite cargar bases de datos bastante grandes en las visualizaciones de datos. Es especialmente útil para cargar Topojsons con muchos polígonos, por ejemplo los municipios.

## Mapas
La creación de mapas va vía [Leaflet](https://leafletjs.com/), la creación de mapas vía leaflet con capas vectoriales manejadas con [D3js](https://d3js.org/) es el combo que permite mayor versatilidad. Si no se va a realizar nada extravagante con las capas vectoriales se puede usar Leaflet para manejarlas, si se buscan efectos avanzados se recomienda usar [D3js](https://d3js.org/) para manejarlos.

## Polígonos 
Es preferible que las capas de polígonos estén en formato Topojson, el repo usa [TopojsonJS](https://github.com/topojson/topojson/wiki) para poder manejarlas sin problemas.

- El repositorio tiene la siguiente estructura:

```.
├── LICENSE
├── README.md
├── index.html
├── css
├── data               
├── imagenes           
├── js 
│	├── ejemplos.js           
│   └── scripta.js           
└── librerias                 
    ├── bootstrap           
    ├── d3        
    ├── jquery    
    ├── leaflet         
    ├── pako 
    └── topojson 
```
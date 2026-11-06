Calculadora de IMC
Aplicación web sencilla para calcular el Índice de Masa Corporal.

Descripción
Esta herramienta permite a cualquier persona conocer de forma rápida su IMC ingresando peso y altura. Es 100% del lado del cliente, no requiere servidor de datos ni base de datos.

Estructura del proyecto
reto2_app/
├── index.html
├── css/
│   └── styles.min.css
├── js/
│   └── app.min.js
└── img/
    └── logo.svg
Cómo usar
Abre el archivo index.html en cualquier navegador moderno.
Ingresa tu peso en kilogramos y tu altura en centímetros.
Presiona el botón Calcular IMC.
Observa el resultado junto con la categoría y una recomendación general.
Optimizaciones realizadas
Archivos CSS y JS minificados para reducir el peso de descarga.
Imágenes en formato SVG (vectoriales y de peso mínimo).
Estructura de carpetas clara y organizada.
Sin dependencias externas (no usa librerías de terceros).
Despliegue local (simulación)
La aplicación se puede servir con cualquier servidor web estático (Apache, Nginx, o incluso el servidor simple de Python).

Ejemplo con Python:

cd reto2_app
python3 -m http.server 8080
Luego visita: http://localhost:8080

Autor
Proyecto desarrollado como parte del Reto 2 del módulo de Desarrollo de Aplicaciones Web.

// jshint ignore: start
/* eslint-disable */
const mix = require('laravel-mix');

mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
   });

mix.js([
    'src/js/jquery-1.11.0.min.js',
    'src/js/application.js',
    'src/js/jquery.history.js',
    ], 'public/assets/js/app.js')
   .sass('src/scss/index.scss', 'public/assets/css/index.css');



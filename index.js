//Importo react y react-dom
import React from 'react';
//React sirve para crear los componentes
import ReactDom from 'react-dom';
//Reactdom para renderizar o colocar los componentes en el dom
import Media from './src/playlist/components/media.js';
//importo media 
//console.log("Hola mundo");

//Referencio el elemento en donde estara vivo react
const app = document.getElementById('app')
//ReactDom.render(que voy a renderizar(elemento, o componente), donde lo haré(en que parte del dom));
//Creando un componente para renderizar
//const holaMundo = <h1>Hola Mundo :) </h1>;
ReactDom.render(<Media />, app);
//En este punto ejecuto en cli el comando npm run build:prod
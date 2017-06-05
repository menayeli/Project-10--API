$(document).ready(function() {
var pokeAPI = [];
pokeAPI[0] = "http://pokeapi.co/api/v2/pokemon/17/";
pokeAPI[1] = "http://pokeapi.co/api/v2/pokemon/25/";
pokeAPI[2] = "http://pokeapi.co/api/v2/pokemon/52/";
pokeAPI[3] = "http://pokeapi.co/api/v2/pokemon/4/";
pokeAPI[4] = "http://pokeapi.co/api/v2/pokemon/5/";
pokeAPI[5] = "http://pokeapi.co/api/v2/pokemon/12/";
pokeAPI[6] = "http://pokeapi.co/api/v2/pokemon/7/";


var pokeOptions = {};


function pokemon1(pokeData) {
  var pokeHTML = '<li>';
  pokeHTML += '<a href="img/pidegeotto.png" data-lightbox="pokemon" data-title="Name: ' + pokeData.name + ' <br>Height: ' + pokeData.height + ' <br>Weight: ' + pokeData.weight  +  ' <br>Experience: ' + pokeData.base_experience  + ' ">';
  pokeHTML +='<img src="img/pidegeotto.png" />';
  pokeHTML +='</a>';
  pokeHTML += '</li>';
  $('.pokemon').append(pokeHTML);
}
function pokemon2(pokeData) {
  var pokeHTML = '<li>';
  pokeHTML += '<a href="img/pikachu.png" data-lightbox="pokemon" data-title="Name: ' + pokeData.name + ' <br>Height: ' + pokeData.height + ' <br>Weight: ' + pokeData.weight +  ' <br>Experience: ' + pokeData.base_experience  +  ' ">';
  pokeHTML +='<img src="img/pikachu.png" />';
  pokeHTML +='</a>';
  pokeHTML += '</li>';
  $('.pokemon').append(pokeHTML);
}
function pokemon3(pokeData) {
  var pokeHTML = '<li>';
  pokeHTML += '<a href="img/meowth.png" data-lightbox="pokemon" data-title="Name: ' + pokeData.name + ' <br>Height: ' + pokeData.height + ' <br>Weight: ' + pokeData.weight +  ' <br>Experience: ' + pokeData.base_experience  +  '">';
  pokeHTML +='<img src="img/meowth.png" />';
  pokeHTML +='</a>';
  pokeHTML += '</li>';
  $('.pokemon').append(pokeHTML);
}
function pokemon4(pokeData) {
  var pokeHTML = '<li>';
  pokeHTML += '<a href="img/charmander.png" data-lightbox="pokemon" data-title="Name: ' + pokeData.name + ' <br>Height: ' + pokeData.height + ' <br>Weight: ' + pokeData.weight +  ' <br>Experience: ' + pokeData.base_experience  +  ' ">';
  pokeHTML +='<img src="img/charmander.png" />';
  pokeHTML +='</a>';
  pokeHTML += '</li>';
  $('.pokemon').append(pokeHTML);
}
function pokemon5(pokeData) {
  var pokeHTML = '<li>';
  pokeHTML += '<a href="img/butterfree.png" data-lightbox="pokemon" data-title="Name: ' + pokeData.name + ' <br>Height: ' + pokeData.height + ' <br>Weight: ' + pokeData.weight +  ' <br>Experience: ' + pokeData.base_experience  +  ' ">';
  pokeHTML +='<img src="img/butterfree.png" />';
  pokeHTML +='</a>';
  pokeHTML += '</li>';
  $('.pokemon').append(pokeHTML);
}
function pokemon6(pokeData) {
  var pokeHTML = '<li>';
  pokeHTML += '<a href="img/charizard.png" data-lightbox="pokemon" data-title="<br>Name: ' + pokeData.name + ' <br>Height: ' + pokeData.height + ' <br>Weight: ' + pokeData.weight +  ' <br>Experience: ' + pokeData.base_experience  +  ' ">';
  pokeHTML +='<img src="img/charizard.png" />';
  pokeHTML +='</a>';
  pokeHTML += '</li>';
  $('.pokemon').append(pokeHTML);
}

//* Get JSON
$.getJSON(pokeAPI[0], pokeOptions, pokemon1);
$.getJSON(pokeAPI[1], pokeOptions, pokemon2);
$.getJSON(pokeAPI[2], pokeOptions, pokemon3);
$.getJSON(pokeAPI[3], pokeOptions, pokemon4);
$.getJSON(pokeAPI[4], pokeOptions, pokemon5);
$.getJSON(pokeAPI[5], pokeOptions, pokemon6);
}); // end ready





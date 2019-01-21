/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

// Wanneer je scrollt wordt de functie uitgevoerd. 
window.onscroll = function() {myFunction();};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


var filterbutton = document.querySelector('section >  button:nth-of-type(1)');

var filtersection = document.querySelector('div > form');


filterbutton.addEventListener('click', function(){
   
    filtersection.classList.toggle('show');
    
});

var sorteerbutton = document.querySelector('section >  button:nth-of-type(2)');

var sorteersection = document.querySelector('form > select');


sorteerbutton.addEventListener('click', function(){
   
    sorteersection.classList.toggle('show');
    
});

var zoekbutton = document.querySelector('header >  button');

var zoekveld = document.querySelector('header');


zoekbutton.addEventListener('click', function(){
   
    zoekveld.classList.toggle('iets');   
});



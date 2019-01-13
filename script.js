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

function showHideDiv(ele) {
				var srcElement = document.getElementById(ele);
				if (srcElement != null) {
					if (srcElement.style.display == "block") {
						srcElement.style.display = 'none';
					}
					else {
						srcElement.style.display = 'block';
					}
					return false;
				}
			}

function toggle (t) {
if (t.childNodes[0].innerHTML == "Toevoegen aan Favorieten?") {
    t.childNodes[0].innerHTML = "Toegevoegd aan Favorieten";
} else {
    t.childNodes[0].innerHTML = "Toevoegen aan Favorieten?";
}
}



// When the user scrolls down 20px from the top of the document, show the button
var cosObj = document.getElementById("cosmoObj");
var dos = document.getElementById("Dostijenija");
var Hystory = document.getElementById("Hystory");
var Mify = document.getElementById("Mify");

var Moon = document.getElementById("Moon");
var Mercury = document.getElementById("Mercury");
var Youpither = document.getElementById("Youpither");
var Saturn = document.getElementById("Saturn");
var SaturnK = document.getElementById("SaturnK");
var Uran = document.getElementById("Uran");
var Neptun = document.getElementById("Neptun");
var Pluton = document.getElementById("Pluton");
var Sun = document.getElementById("Sun");
var Venus = document.getElementById("Venus");
var Earth = document.getElementById("Earth");
var Mars = document.getElementById("Mars");

var star = document.getElementById("star");
var blackHole = document.getElementById("blackHole");
var Planet = document.getElementById("Planet");

// Get the button:
let mybutton = document.getElementById("myBtn");

mybutton.style.display = "block";

function topFunction() {
  window.scrollTo(0, 0);

  cosObj.scrollTo(0, 0);
  star.scrollTo(0, 0);
  blackHole.scrollTo(0, 0);
  Planet.scrollTo(0, 0);

  dos.scrollTo(0, 0);
  Hystory.scrollTo(0, 0);
  Mify.scrollTo(0, 0);

  Moon.scrollTo(0, 0);
  Earth.scrollTo(0, 0);
  Sun.scrollTo(0, 0);
  Mercury.scrollTo(0, 0);
  Venus.scrollTo(0, 0);
  Mars.scrollTo(0, 0);
  Youpither.scrollTo(0, 0);
  Saturn.scrollTo(0, 0);
  SaturnK.scrollTo(0, 0);
  Uran.scrollTo(0, 0);
  Neptun.scrollTo(0, 0);
  Pluton.scrollTo(0, 0);
}

var body = document.getElementsByTagName("body")[0];

var cosObj = document.getElementById("cosmoObj");
var dos = document.getElementById("Dostijenija");
var Tainy = document.getElementById("Tainy");
var Hystory = document.getElementById("Hystory");
var Fakty = document.getElementById("Fakty");
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
var Meteor = document.getElementById("Meteor");

var ssP = document.getElementById("ssP");

var backSp = document.getElementById("backSp"); //back
var SSPBack = document.getElementById("SSPBack"); //backP

function back() {
  cosObj.style.display = "none";
  dos.style.display = "none";
  Tainy.style.display = "none";
  Hystory.style.display = "none";
  Fakty.style.display = "none";
  Mify.style.display = "none";
  ssP.style.display = "none";
  Moon.style.display = "none";
  Earth.style.display = "none";
  Mars.style.display = "none";
  Youpither.style.display = "none";
  Venus.style.display = "none";
  Mercury.style.display = "none";
  Sun.style.display = "none";
  Saturn.style.display = "none";
  SaturnK.style.display = "none";
  Uran.style.display = "none";
  Neptun.style.display = "none";
  Pluton.style.display = "none";

  body.style.overflowY = "scroll";
}

function backSSP() {
  Moon.style.display = "none";
  Earth.style.display = "none";
  Mars.style.display = "none";
  Youpither.style.display = "none";
  Venus.style.display = "none";
  Mercury.style.display = "none";
  Sun.style.display = "none";
  Saturn.style.display = "none";
  SaturnK.style.display = "none";
  Uran.style.display = "none";
  Neptun.style.display = "none";
  Pluton.style.display = "none";

  ssP.style.overflowY = "scroll";
  body.style.overflowY = "scroll";
}

function backCosObj() {
  star.style.display = "none";
  blackHole.style.display = "none";
  Planet.style.display = "none";

  cosObj.style.overflowY = "scroll";
}

function SolSystemPanel() {
  ssP.style.display = "block";
  body.style.overflowY = "hidden";
}

function cosmObjPanel() {
  cosObj.style.display = "block";
  body.style.overflowY = "hidden";
}

function DostijenijaPanel() {
  dos.style.display = "block";
  body.style.overflowY = "hidden";
}

function TainyPanel() {
  Tainy.style.display = "block";
  body.style.overflowY = "hidden";
}

function HystoryPanel() {
  Hystory.style.display = "block";
  body.style.overflowY = "hidden";
}

function FaktyPanel() {
  Fakty.style.display = "block";
  body.style.overflowY = "hidden";
}

function MifyPanel() {
  Mify.style.display = "block";
  body.style.overflowY = "hidden";
}

function MoonPanel() {
  Moon.style.display = "block";
  body.style.overflowY = "hidden";
}

function EarthPanel() {
  Earth.style.display = "block";
  body.style.overflowY = "hidden";
}

function SunPanel() {
  Sun.style.display = "block";
  body.style.overflowY = "hidden";
}

function MercuryPanel() {
  Mercury.style.display = "block";
  body.style.overflowY = "hidden";
}

function VenusPanel() {
  Venus.style.display = "block";
  body.style.overflowY = "hidden";
}

function MarsPanel() {
  Mars.style.display = "block";
  body.style.overflowY = "hidden";
}

function YoupitherPanel() {
  Youpither.style.display = "block";
  body.style.overflowY = "hidden";
}

function SaturnPanel() {
  Saturn.style.display = "block";
  body.style.overflowY = "hidden";
}

function SaturnKPanel() {
  SaturnK.style.display = "block";
  body.style.overflowY = "hidden";
}

function UranPanel() {
  Uran.style.display = "block";
  body.style.overflowY = "hidden";
}

function NeptunPanel() {
  Neptun.style.display = "block";
  body.style.overflowY = "hidden";
}

function PlutonPanel() {
  Pluton.style.display = "block";
  body.style.overflowY = "hidden";
}

function starP() {
  star.style.display = "block";
  cosObj.style.overflowY = "hidden";
}

function blackHoleP() {
  blackHole.style.display = "block";
  cosObj.style.overflowY = "hidden";
}

function PlanetP() {
  Planet.style.display = "block";
  cosObj.style.overflowY = "hidden";
}

function MeteorP() {
  Meteor.style.display = "block";
  cosObj.style.overflowY = "hidden";
}

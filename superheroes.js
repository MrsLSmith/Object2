var message = '';
var showOrHide = 0;
var nameDisplay = document.getElementById('buttonNames');
var countTable = 0;
var HeroesTable1 = "";
var HeroesTable2 = "";
var HeroesTable3 = "";
var Heroes = "";
var HeroStuff = "";
var superheroes = [{
  Name: "Flash",
  Color: "red",
  Superpower: "Super-Speed"
}, {
  Name: "Superman",
  Color: "red, white and Blue",
  Superpower: "Everything"
}, {
  Name: "Batman",
  Color: "Batman",
  Superpower: "Batman"
}, {
  Name: "Shazam",
  Color: "red",
  Superpower: "SHAZAM!"
}];

function list() {
	var namelist = '';
	var prop;
	for(prop in superheroes[0]){
		namelist += " " + prop;
	
		}
	document.write(namelist);
	}	

/**********
NAMES
**********/

/* VARS AND FINDS NAMES*/

/*message += "<h2>Names: </h2>"*/
  
for (var name in superheroes){
  message += '<p>' + superheroes[name].Name + '</p>';
}

/*PRINTS THE LIST*/

nameDisplay.onclick = function () {
  showOrHide++;
  var outputDiv = document.getElementById('outputNames');
  outputDiv.innerHTML = message;
  
  /*EVERY OTHER CLICK DISPLAYS THE LIST*/
  if (showOrHide % 2 != 0){  
    outputDiv.style.display = "block";
  }
  else {
    outputDiv.style.display = "none";
=======
for (var i = 0; i < superheroes.length; i += 1) {
  Heroes = superheroes[i];
  HeroesTable1 += "<p class='rows'>" + Heroes.Name + "</p>";
  HeroesTable2 += "<p class='rows'>" + Heroes.Color + "</p>";
  HeroesTable3 += "<p class='rows'>" + Heroes.Superpower + "</p>";
  document.getElementById("TableCollumOne").innerHTML = HeroesTable1;
  document.getElementById("TableCollumTwo").innerHTML = HeroesTable2;
  document.getElementById("TableCollumThree").innerHTML = HeroesTable3;
}

var clickThing =
  document.getElementById('HeroTable');
clickThing.style.cursor = 'pointer';
clickThing.onclick = function() {
  countTable += 1;
  if (countTable % 2 === 0) {
    document.getElementById("Table").style.display = 'none';
  } else {
    document.getElementById("Table").style.display = 'block';
  }
}

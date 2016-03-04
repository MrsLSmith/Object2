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



/**********
NAMES
**********/

/* VARS AND FINDS NAMES*/
var message = '';
var showOrHide = 0;

/*message += "<h2>Names: </h2>"*/
  
for (var name in superheroes){
  message += '<p>' + superheroes[name].Name + '</p>';
}

/*PRINTS THE LIST*/
var nameDisplay = document.getElementById('buttonNames');

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
  }
}

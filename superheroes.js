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

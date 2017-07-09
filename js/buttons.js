function addSouths()
{
    poleTypeCreation.south = true;
    poleTypeCreation.north = false;
    document.getElementById("southButton").innerHTML = "Placing south poles.";
    document.getElementById("northButton").innerHTML = "Place north poles.";
}

function addNorths()
{
    poleTypeCreation.north = true;
    poleTypeCreation.south = false;
    document.getElementById("northButton").innerHTML = "Placing north poles.";
    document.getElementById("southButton").innerHTML = "Place south poles.";
}
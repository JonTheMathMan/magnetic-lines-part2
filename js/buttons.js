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

addEventListener("click",placeAPoleAtMousePoint);
function placeAPoleAtMousePoint(e)
{
    var southProperties = {
        src:"./images/south.png",
        pX:e.pageX,
        pY:e.pageY,
        poleType:"south"
    };
    var northProperties = {
        src:"./images/north.png",
        pX:e.pageX,
        pY:e.pageY,
        poleType:"north"
    };
    
    var isButton = false;
    if(e.target.tagName == "BUTTON")
        {
            isButton = true;
        }
    
    if(poleTypeCreation.south && !isButton)
        {
            souths.push(newMainPole(southProperties));
        }
    if(poleTypeCreation.north && !isButton)
        {
            norths.push(newMainPole(northProperties));
        }
}
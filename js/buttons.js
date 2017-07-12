function addSouths()
{
    if(!poleTypeCreation.south){
        poleTypeCreation.south = true;
        poleTypeCreation.north = false;
        document.getElementById("southButton").innerHTML = "Stop placing south poles.";
        document.getElementById("northButton").innerHTML = "Place north poles.";
    }else{
        poleTypeCreation.south = false;
        document.getElementById("southButton").innerHTML = "Place south poles.";
    }
}

function addNorths()
{
    if(!poleTypeCreation.north){
        poleTypeCreation.north = true;
        poleTypeCreation.south = false;
        document.getElementById("northButton").innerHTML = "Stop placing north poles.";
        document.getElementById("southButton").innerHTML = "Place south poles.";
    }else{
        poleTypeCreation.north = false;
        document.getElementById("northButton").innerHTML = "Place north poles.";
    }
}

function addExactSouth()
{
    var postionX = parseInt(document.getElementById("exactX").value);
    var postionY = parseInt(document.getElementById("exactY").value);
    
    if(!isNaN(postionX) && !isNaN(postionY))
        {
            var southProperties = {
                src:"./images/south.png",
                pX:postionX,
                pY:postionY,
                poleType:"south"
            }
            souths.push(newMainPole(southProperties));
        }else{
            document.getElementById("exactX").value = "must be an integer";
            document.getElementById("exactY").value = "must be an integer";
        }
    
}

function addExactNorth()
{
    var postionX = parseInt(document.getElementById("exactX").value);
    var postionY = parseInt(document.getElementById("exactY").value);
    
    if(!isNaN(postionX) && !isNaN(postionY))
        {
            var northProperties = {
                src:"./images/north.png",
                pX:postionX,
                pY:postionY,
                poleType:"north"
            }
            norths.push(newMainPole(northProperties));
        }else{
            document.getElementById("exactX").value = "must be an integer";
            document.getElementById("exactY").value = "must be an integer";
        }
    
}
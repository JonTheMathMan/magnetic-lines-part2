function newMainPole(properties={pX:0,pY:0})
{
    var pole = Object.assign(document.createElement("img"),properties);
    pole.style.position = "absolute";
    pole.style.left = pole.pX-5;
    pole.style.top = pole.pY-5;
    
    if(pole.poleType === "north")
        {
            pole.growthPoints = [
                {pX:pole.pX,pY:pole.pY-10},
                {pX:pole.pX+7,pY:pole.pY-7},
                {pX:pole.pX+10,pY:pole.pY},
                {pX:pole.pX+7,pY:pole.pY+7},
                {pX:pole.pX,pY:pole.pY+10},
                {pX:pole.pX-7,pY:pole.pY+7},
                {pX:pole.pX-10,pY:pole.pY},
                {pX:pole.pX-7,pY:pole.pY-7},
            ];
        }
    
    document.body.appendChild(pole);
    
    return pole;
}
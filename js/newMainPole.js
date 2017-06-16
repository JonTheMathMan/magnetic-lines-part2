function newMainPole(properties={pX:0,pY:0})
{
    var pole = Object.assign(document.createElement("img"),properties);
    pole.style.position = "absolute";
    pole.style.left = pole.pX-5;
    pole.style.top = pole.pY-5;
    
    if(pole.poleType === "north")
        {
            var deg45Value = 10*Math.sqrt(2)/2;
            pole.growthPoints = [
                {pX:pole.pX,pY:pole.pY-10},
                {pX:pole.pX+deg45Value,pY:pole.pY-deg45Value},
                {pX:pole.pX+10,pY:pole.pY},
                {pX:pole.pX+deg45Value,pY:pole.pY+deg45Value},
                {pX:pole.pX,pY:pole.pY+10},
                {pX:pole.pX-deg45Value,pY:pole.pY+deg45Value},
                {pX:pole.pX-10,pY:pole.pY},
                {pX:pole.pX-deg45Value,pY:pole.pY-deg45Value},
            ];
        }
    
    document.body.appendChild(pole);
    return pole;
}
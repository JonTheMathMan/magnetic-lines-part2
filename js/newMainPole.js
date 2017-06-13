function newMainPole(properties={pX:0,pY:0})
{
    var pole = Object.assign(document.createElement("img"),properties);
    pole.style.position = "absolute";
    pole.style.left = pole.pX-5;
    pole.style.top = pole.pY-5;
    document.body.appendChild(pole);
    
    return pole;
}
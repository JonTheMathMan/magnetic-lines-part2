function buildALine(pointObject={pX:0,pY:0})
{
    var iShouldStop = false;
    var recurrences = 0;
    var offset = 10;
    var recurringPx = pointObject.pX;
    var recurringPy = pointObject.pY;
    var aPath = document.getElementById("apath");
    
    //pathStartPoint
    var pathString = aPath.attributes.d.value + "M" + recurringPx + "," + recurringPy;
    
    function continueGrowing()
    {
        //find growth direction
        let growthDirection = rotateToEquilibrium({pX:recurringPx,pY:recurringPy});
        
        //grow in growth direction
        recurringPx = recurringPx + offset*Math.sin(growthDirection*Math.PI/180);
        recurringPy = recurringPy - offset*Math.cos(growthDirection*Math.PI/180);
        
        //path line
        pathString = pathString+"L"+recurringPx+","+recurringPy;
        aPath.attributes.d.value = pathString;
        
        //stop if 12 pixels away from any south or running too long.
        recurrences++;
        if(recurrences>310)
            {
                iShouldStop = true;
            }
        souths.forEach(function(aSouth){if(12>getDistance({pX:recurringPx,pY:recurringPy},aSouth)){iShouldStop=true;}});
        if(!iShouldStop)
            {
                continueGrowing();
            }
    }
    continueGrowing();
}
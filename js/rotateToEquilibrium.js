function rotateToEquilibrium(aPoint = {pX:0,pY:0})
{
    var offset = 10;
    
    var newRotation = -1;
    
    var balanceScore = 0;
    
    var attractionYValues = souths.map(function(aSouth){return getAxisVectorDifference(aSouth.pY,aPoint.pY)/Math.pow(getDistance({pX:aPoint.pX,pY:aPoint.pY},aSouth),3);});
    var attractionXValues = souths.map(function(aSouth){return getAxisVectorDifference(aSouth.pX,aPoint.pX)/Math.pow(getDistance({pX:aPoint.pX,pY:aPoint.pY},aSouth),3);});
    
    var attractionY = getArraySum(attractionYValues);
    var attractionX = getArraySum(attractionXValues);

    var repulsionYValues = norths.map(function(aNorth){return -getAxisVectorDifference(aNorth.pY,aPoint.pY)/Math.pow(getDistance({pX:aPoint.pX,pY:aPoint.pY},aNorth),3);});
    var repulsionXValues = norths.map(function(aNorth){return -getAxisVectorDifference(aNorth.pX,aPoint.pX)/Math.pow(getDistance({pX:aPoint.pX,pY:aPoint.pY},aNorth),3);});
    
    var repulsionY = getArraySum(repulsionYValues);
    var repulsionX = getArraySum(repulsionXValues);
    
    var matrixY = aPoint.pY+repulsionY+attractionY;
    var matrixX = aPoint.pX+repulsionX+attractionX;
    
    newRotation = getLineAngle({pX:aPoint.pX,pY:aPoint.pY},{pX:matrixX,pY:matrixY});
    
    if(newRotation==-1)
        {
            console.error("lineGrowthError. As line grew a point with no balance was found.");
        }else{
            return newRotation;
        }
}
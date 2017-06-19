function rotateToEquilibrium(aPoint = {pX:0,pY:0})
{
    var offset = 10;
    var upperPoint = {pX:aPoint.pX,pY:aPoint.pY-offset};
    var lowerPoint = {pX:aPoint.pX,pY:aPoint.pY+offset};
    var newRotation = -1;
    
    var balanceScore = 0;
    
    for(var deg=0;deg<360;deg++)
        {
            //rotate the upper and lower points around the center
            upperPoint.pX = aPoint.pX + Math.round(100000*offset*Math.sin(deg*Math.PI/180))/100000;
            upperPoint.pY = aPoint.pY - Math.round(100000*offset*Math.cos(deg*Math.PI/180))/100000;
            lowerPoint.pX = aPoint.pX - Math.round(100000*offset*Math.sin(deg*Math.PI/180))/100000;
            lowerPoint.pY = aPoint.pY + Math.round(100000*offset*Math.cos(deg*Math.PI/180))/100000;
            
            //get the attraction distances
            let attractions = souths.map(function(aSouth){return getDistance(aSouth,upperPoint);}).concat(norths.map(function(aNorth){return getDistance(aNorth,lowerPoint);}));
            
            //get the repulsion distances
            let repulsions = souths.map(function(aSouth){return getDistance(aSouth,lowerPoint);}).concat(norths.map(function(aNorth){return getDistance(aNorth,upperPoint);}));
            
            //find a competing balance score.
            let repulsionsProduct = getArrayProduct(repulsions);
            let attractionsProduct = getArrayProduct(attractions);
            let competingBalanceScore = (repulsionsProduct/attractionsProduct);
            
            //check balance score against competing balance score.
            if(balanceScore<competingBalanceScore)
                {
                    balanceScore = competingBalanceScore;
                    newRotation = deg;
                }
        }
    
    if(newRotation==-1)
        {
            console.error("lineGrowthError. As line grew a point with no balance was found.");
        }else{
            return newRotation;
        }
}
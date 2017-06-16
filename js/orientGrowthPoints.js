function orientGrowthPoints()
{
    norths.forEach(recursiveOrient);
    function recursiveOrient(aNorth)
    {
        var changesMade = 0;
        
        function getCurrentEquilbrium(aGrowthPoint,index)
        {
            // basic variables needed.
            var currentAngle = Math.round(getLineAngle(aNorth,aGrowthPoint));
            var newAngle=0;
            var balanceScore=-1;
            var earlierGrowthPoint = aNorth.growthPoints[index-1];
            var nextGrowthPoint = aNorth.growthPoints[index+1];
            
            //make the prevPoint and nextPoint work as a loop.
            if(index==0)
                {
                    earlierGrowthPoint = aNorth.growthPoints[aNorth.growthPoints.length-1];
                }
            if(index==aNorth.growthPoints.length-1)
                {
                    nextGrowthPoint = aNorth.growthPoints[0];
                }
            
            // setup angle range so the for-loop can check for balance.
            var beginningAngle = Math.round(getLineAngle(aNorth,earlierGrowthPoint))+1;
            var endingAngle = Math.round(getLineAngle(aNorth,nextGrowthPoint))-1;
            
            //make sure beginning and ending angle are right for for loop.
            if(beginningAngle>endingAngle)
                {
                    beginningAngle = beginningAngle-360;
                }
            
            //for-loop through the angle range to find balance.
            for(var i=beginningAngle;i<endingAngle;i++)
                {
                    aGrowthPoint.pX = aNorth.pX + 10*Math.sin(i*Math.PI/180);
                    aGrowthPoint.pY = aNorth.pY - 10*Math.cos(i*Math.PI/180);
                    
                    let repulsionDistances = norths.map(function(thisNorth){return getDistance(aGrowthPoint,thisNorth);}).concat(getDistance(aGrowthPoint,earlierGrowthPoint),getDistance(aGrowthPoint,nextGrowthPoint));
                    let attractionDistances = souths.map(function(thisSouth){return getDistance(aGrowthPoint,thisSouth);});
                    
                    let repulsionScore = getArrayProduct(repulsionDistances);
                    let attractionScore = getArrayProduct(attractionDistances);
                    let overallScore = repulsionScore/attractionScore;
                    
                    if(balanceScore<overallScore)
                        {
                            balanceScore = overallScore;
                            if(i<0)
                                {
                                    newAngle = i+360;
                                }else{
                                    newAngle = i;
                                }
                        }
                    
                }
            
            //set point to be at balance.
            aGrowthPoint.pX = aNorth.pX + 10*Math.sin(newAngle*Math.PI/180);
            aGrowthPoint.pY = aNorth.pY - 10*Math.cos(newAngle*Math.PI/180);
            
            //if no balance is found throw an error.
            if(newAngle==-1)
                {
                    console.error('foundNoGrowthPointBalanceScore!');
                    console.log(aNorth,",","growthPointErrorNoBalance",",",index);
                }
            
            //keep track of changes
            if(currentAngle != newAngle)
                {
                    changesMade++;
                }
        }
        
        aNorth.growthPoints.forEach(getCurrentEquilbrium);
        
        //update graphics
        removeGrowthPointsGrahics();
        viewGrowthPoints();
        
        //terminate recursivity of function when no changes are happening.
        if(changesMade>0)
            {
                recursiveOrient(aNorth);
            }
    }
}
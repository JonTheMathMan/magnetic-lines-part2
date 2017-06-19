function generateLines()
{
    orientGrowthPoints();
    
    // for each north go along growth points and for each growth point build a line.
    norths.forEach(function(aNorth){aNorth.growthPoints.forEach(function(aGrowthPoint){buildALine({pX:aGrowthPoint.pX,pY:aGrowthPoint.pY});});});
}
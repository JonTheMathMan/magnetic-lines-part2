var growthPointsGraphics=[];

function viewGrowthPoints()
{
    norths.forEach(makeImagesForGrowthPoints);

    function makeImagesForGrowthPoints(aNorth)
    {
        aNorth.growthPoints.forEach(addImage);
        function addImage(aGrowthPoint)
        {
            var aNewImage = document.createElement('img');
            aNewImage.src = "./images/north.png";
            aNewImage.style = "width:6;height:6;position:absolute;";
            aNewImage.style.left = aGrowthPoint.pX -3;
            aNewImage.style.top = aGrowthPoint.pY -3;
            document.body.appendChild(aNewImage);
            growthPointsGraphics.push(aNewImage);
        }
    }
}

function removeGrowthPointsGrahics()
{
    growthPointsGraphics.forEach(function(aGraphic){document.body.removeChild(aGraphic);});
    growthPointsGraphics=[];
}
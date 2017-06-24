addEventListener("click",placeAPoleAtMousePoint);
function placeAPoleAtMousePoint(e)
{
    var southProperties = {
        src:"./images/south.png",
        pX:e.pageX,
        pY:e.pageY,
        poleType:"south"
    };
    var northProperties = {
        src:"./images/north.png",
        pX:e.pageX,
        pY:e.pageY,
        poleType:"north"
    };
    
    var isButton = false;
    if(e.target.tagName == "BUTTON")
        {
            isButton = true;
        }
    
    if(poleTypeCreation.south && !isButton)
        {
            souths.push(newMainPole(southProperties));
        }
    if(poleTypeCreation.north && !isButton)
        {
            norths.push(newMainPole(northProperties));
            viewGrowthPoints();
        }
}

addEventListener("touchstart",placeAPoleAtTouchPoint);
function placeAPoleAtTouchPoint(e)
{
    var southProperties = {
        src:"./images/south.png",
        pX:e.touches.item(0).pageX,
        pY:e.touches.item(0).pageY,
        poleType:"south"
    };
    var northProperties = {
        src:"./images/north.png",
        pX:e.touches.item(0).pageX,
        pY:e.touches.item(0).pageY,
        poleType:"north"
    };
    
    var isButton = false;
    if(e.target.tagName == "BUTTON")
        {
            isButton = true;
        }
    
    if(poleTypeCreation.south && !isButton)
        {
            souths.push(newMainPole(southProperties));
        }
    if(poleTypeCreation.north && !isButton)
        {
            norths.push(newMainPole(northProperties));
            viewGrowthPoints();
        }
}
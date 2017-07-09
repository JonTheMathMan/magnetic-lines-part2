function getArrayProduct(anArray)
{
    var product = 1;
    anArray.forEach(function(aNumber){product*=aNumber;});
    return product;
}

function getDistance(firstPointObject,secondPointObject)
{
    var distance = Math.sqrt(Math.pow(secondPointObject.pX-firstPointObject.pX,2)+Math.pow(secondPointObject.pY-firstPointObject.pY,2));
    return distance;
}

function getPixelDistance(firstPointObject,secondPointObject)
{
    return Math.round(getDistance(firstPointObject,secondPointObject));
}

function getAxisVectorDifference(goingTo=0,comingFrom=0)
{
    return (goingTo - comingFrom);
}

function getArraySum(anArray)
{
    var sum = 0;
    anArray.forEach(function(aNumber){sum+=aNumber;});
    return sum;
}

function getLineAngle(point1={pX:0,pY:0},point2={pX:1,pY:1})
{
    var angle = 0;
    var delta = {x:point2.pX-point1.pX, y:point2.pY-point1.pY};
    
    if(delta.x>0)
        {
            angle = Math.atan(delta.y/delta.x);
        }else if(delta.x<0){
            angle = Math.atan(delta.y/delta.x) + Math.PI;
        }else if(delta.x==0 && delta.y>0){
            angle = Math.PI/2;
        }else if(delta.x==0 && delta.y<0){
            angle = 0-Math.PI/2;
        }
    return angle*180/Math.PI+90;
}
    
function isInRange(val,min,max)
{
    if(val>min && val<max)
        {
            return true;
        }else{
            return false;
        }
}
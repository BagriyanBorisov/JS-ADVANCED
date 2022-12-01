function testSpeed(speed , area)
{
    
    function areaLimit(area)
    {
        let speedLimit = 0;
        switch(area)
        {
            case 'city' : speedLimit = 50;
            break;
            case 'residential' : speedLimit = 20;
            break;
            case 'interstate' : speedLimit = 90;
            break;
            case 'motorway' : speedLimit = 130;
            break;
        }
        return speedLimit;
    }
    let allowedSpeed = areaLimit(area);
    let stringToLog;
    if(allowedSpeed >= speed)
    {
        stringToLog = `Driving ${speed} km/h in a ${allowedSpeed} zone`;
    }
    else if(allowedSpeed + 20 >= speed)
    {
        stringToLog = `The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - speeding`;
    }
    else if(allowedSpeed + 40 >= speed)
    {
        stringToLog = `The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - excessive speeding`;
    }
    else 
    {
        stringToLog = `The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - reckless driving`;
    }

   console.log(stringToLog);

}

testSpeed(40 , 'city');
testSpeed(21, 'residential');
testSpeed(120, 'interstate');
testSpeed(200, 'motorway');
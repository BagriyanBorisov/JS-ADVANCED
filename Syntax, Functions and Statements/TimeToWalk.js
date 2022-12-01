function Calculate(steps, footMeters, speedH)
{
    let distance = steps * footMeters;
    let rest = Math.floor(distance / 500) * 60;
    let time = speedH / 3.6;
    
    let totaltime =  (distance / time) + rest;
    let timeMin = Math.floor(totaltime / 60);
    let timeSec = Number((totaltime - (timeMin * 60)).toFixed());
    let timeH = Math.floor(totaltime / 3600);
    timeH += Math.floor(timeMin / 60);
    timeMin = timeMin % 60;

    let formatH = timeH < 10 ? `0${timeH}` : `${timeH}`;
    let formatM = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
    let formatS = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;


    console.log(`${formatH}:${formatM}:${formatS}`);
}

Calculate(4000, 0.60, 5);
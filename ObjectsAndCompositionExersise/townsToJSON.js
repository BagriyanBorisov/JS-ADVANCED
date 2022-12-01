function townsToJSON(inputArr)
{
    let res = [];

    for(let i = 1; i < inputArr.length; i++)
    {
        let cityArr = inputArr[i].split('|');
        let townName = cityArr[1].trim();
        let latitude = Number(cityArr[2].trim());
        let longitude = Number(cityArr[3].trim());

       res.push({Town: townName, Latitude: Number(latitude.toFixed(2)), Longitude: Number(longitude.toFixed(2))});
    }
        let output = JSON.stringify(res);

 console.log(output);
}


townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);


//[{"Town":"Sofia",
//   "Latitude":42.7,
//   "Longitude":23.32
// },
// {"Town":"Beijing",
//  "Latitude":39.91,
//  "Longitude":116.36
// }] Expected
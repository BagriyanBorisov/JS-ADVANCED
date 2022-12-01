function solve(inputArray){
    let filteredArray = [];
    let biggestOne = -1
    for(let num of inputArray)
    {
        if (num >= biggestOne)
        {
            filteredArray.push(num);
            biggestOne = num;
        }
    }
    return filteredArray;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
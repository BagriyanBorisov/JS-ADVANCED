function sortNums(arr)
{
    let allNumsFilt = arr.sort((a, b) => b - a);
    let halfLength = Math.ceil((allNumsFilt.length / 2) - 1);
    let bigNums = [];
    let smallNums = [];
    for (let i = 0; i <= halfLength;)
    {
        if (bigNums.length === halfLength)
        {
            break;
        }
        bigNums.push(allNumsFilt[i]);
        allNumsFilt.shift();
    }
    bigNums.sort((a, b) => b - a);
    smallNums = allNumsFilt.sort((a,b) => a-b);

    let resArr = [];
    for(let i = 0; i < smallNums.length; i++)
    {
        resArr.push(smallNums[i]);
        if (bigNums[i] !== undefined)
        {
            resArr.push(bigNums[i]);
        }
    }
    return resArr;
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 16]));
function sortTwoCriteria(arr)
{
   let res = arr.sort((a, b) => a.localeCompare(b)).sort((a,b) => a.length - b.length).join("\n");

    console.log(res);
}

sortTwoCriteria(['alpha',
    'beta',
    'gamma']);
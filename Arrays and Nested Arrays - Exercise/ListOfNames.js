function listOfNames(arr)
{
    let newArr = arr.sort((a,b) => a.localeCompare(b)).map((a , i) => i + 1 + "." + a);
    console.log(newArr.join("\n"));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
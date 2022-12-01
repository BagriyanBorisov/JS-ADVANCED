function solve(inputArray, n){
   let result = inputArray.filter((a, i) => i % n == 0);

   return result;
}

let currResult = solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2);

console.log(currResult);
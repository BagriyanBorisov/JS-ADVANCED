function getFibonator(){
    let sum = 0;
    let firstNum = 0;
    let secNum = 1;

    return ()=> {
        firstNum = secNum;
        secNum = sum;
        sum = firstNum + secNum;
        return sum;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13


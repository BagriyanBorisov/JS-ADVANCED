function result(currNumber) {
    let sum = 0;
    return function add() {
            add.prototype.toString = sum;
            sum += Number(currNumber);
        return add.toString();
    }
}


console.log(result(2).toString());
console.log(result(2));
console.log(result(2));
console.log(result(2));
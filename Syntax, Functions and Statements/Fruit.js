function solve(type, grams, pricePerKilo ){
    let kgs = grams / 1000;
    let priceTotal = kgs * pricePerKilo;

    
    console.log(`I need $${priceTotal.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${type}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);
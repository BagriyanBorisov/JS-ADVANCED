function Calculate(num , el1, el2, el3, el4, el5){
    let numberToCook = Number(num);
    function Operations(el, numberToCook)
    { 
        switch(el)
        {
            case 'chop': numberToCook = numberToCook / 2;
            break;
            case 'dice' : numberToCook = Math.sqrt(numberToCook);
            break;
            case 'spice' : numberToCook =numberToCook + 1;
            break;
            case 'bake' : numberToCook = numberToCook * 3;
            break;
            case 'fillet' :numberToCook = numberToCook * 0.80;
            break;
        }

        console.log(numberToCook);
        return numberToCook;
    }

    numberToCook = Operations(el1, numberToCook);
    numberToCook = Operations(el2, numberToCook);
    numberToCook = Operations(el3, numberToCook);
    numberToCook = Operations(el4, numberToCook);
    numberToCook = Operations(el5, numberToCook);
}

Calculate('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-------------------------')
Calculate('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
function rectangle(widthValue, heightValue, colorValue)
{
    let rect = {
        width: Number(widthValue),
        height: Number(heightValue),
        calcArea: () => rect.width * rect.height
    }

    rect['color'] =  colorValue.toUpperCase()[0] + colorValue.slice(1)
    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
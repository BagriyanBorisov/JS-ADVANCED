class Rectangle{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea()
    {
        return this.width * this.height;
    }
}
module.exports = Rectangle;
let rect = new Rectangle(4,5, 'red')
console.log(rect.calcArea())
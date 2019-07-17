// Mixins as functions instead of objects

var asCircle = function () {
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    this.grow = function () {
        this.radius++
    };
    this.shrink = function () {
        this.radius--;
    };
    return this;
};

var Circle = function (radius) {
    this.radius = radius;
};

asCircle.call(Circle.prototype);
// Usage of functional Mixins.
var myCircle = new Circle(5);
myCircle.area();
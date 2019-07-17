// Adding Options approach creates additional performance overhead because we are redefining the same function on every call.
// By forming a closure around the mixin we can cache the results of the initial definition run improving performance.
var asRectangle = (function () {
    function area() {
        return this.length * this.width;
    }
    function grow() {
        this.length++;
        this.width++;
    }
    function shrink() {
        this.length--;
        this.width--;
    }
    return function () {
        this.area = area;
        this.grow = grow;
        this.shrink = shrink;
        return this;
    };
})();


var asButton = function () {
    this.hover = function (bool) {
        bool ? mylib.appendClass('hover') : mylib.removeClass('hover');
    };
    this.press = function (bool) {
        bool ? mylib.appendClass('pressed') : mylib.removeClass('pressed');
    };
    this.fire = function () {
        return this.action();
    };
    return this;
};

var RectangularButton = function (length, width, label, action) {
    this.length = length;
    this.width = width;
    this.label = label;
    this.action = action;
};

asButton.call(RectangularButton.prototype);
asRectangle.call(RectangularButton.prototype);

var myRectangularButton = new RectangularButton(4,2,"delete", function () {
    return "deleted!!!";
});
console.log(myRectangularButton.area());
myRectangularButton.grow();
console.log(myRectangularButton.area());
console.log(myRectangularButton.fire());



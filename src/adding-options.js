// This functional strategy also allows the borrowed behaviours to be parameterized by means of an options argument.

var asOval = function (options) {
    this.area = function () {
        return Math.PI * this.shortRadius * this.longRadius;
    };
    this.ratio = function () {
        return this.longRadius / this.shortRadius;
    };
    this.grow = function () {
        this.shortRadius += (options.growBy / this.ratio());
        this.longRadius += options.growBy;
    };
    this.shrink = function () {
        this.shortRadius -= (options.shrinkBy / this.ratio());
        this.longRadius -= options.shrinkBy;
    };
    return this;
};

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

var OvalButton = function (longRadius, shortRadius, label, action) {
    this.longRadius = longRadius;
    this.shortRadius = shortRadius;
    this.label = label;
    this.action = action;
};

asButton.call(OvalButton.prototype);
asOval.call(OvalButton.prototype, {growBy: 2, shrinkBy: 2});

var myOvalButton = new OvalButton(3, 2, 'Oval button', function () {
    return "my Oval button rocks!!!";
});

console.log(myOvalButton.area());
myOvalButton.grow();
console.log(myOvalButton.area());
console.log(myOvalButton.fire());
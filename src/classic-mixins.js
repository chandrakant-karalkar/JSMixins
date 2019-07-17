var Circle = function () {
};

// Adding behaviour to Circle objects via prototypes.
Circle.prototype = {
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    grow: function () {
        this.radius++;
    },
    shrink: function () {
        this.radius--;
    }
};
// -OR- Via a simple Object literal and extend Function (aka augment).

var circleFunctions = {
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    grow: function () {
        this.radius++;
    },
    shrink: function () {
        this.radius--;
    }
};

var buttonFunctions = {
    click: function () {
        alert("I am clicked");
    }
};

function extend(destination, source) {
    for (var property in source) {
        if (source.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
    return destination;
}

// usage of the extend function

var RoundButton = function (radius, label) {
    this.radius = radius;
    this.label = label;
};

//  Way to add Circle and buttons functionality to other objects on run time.
extend(RoundButton.prototype, circleFunctions);
extend(RoundButton.prototype, buttonFunctions);
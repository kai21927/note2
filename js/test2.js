"use strict";
var cool = /** @class */ (function () {
    function cool() {
        this.name = 'haha';
    }
    cool.prototype.alert = function () {
        console.log('酷炫的警報器響囉');
    };
    return cool;
}());
var cool_test = new cool();
cool_test.alert();
cool_test.name;
console.log("cool_test.name", cool_test.name);
var nocool = /** @class */ (function () {
    function nocool() {
        this.name = 'yaya';
    }
    nocool.prototype.alert = function () {
        console.log('不太酷炫的警報器響囉');
    };
    return nocool;
}());
var nocool_test = new nocool();
nocool_test.alert();

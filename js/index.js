"use strict";
var cool = /** @class */ (function () {
    function cool() {
    }
    cool.prototype.alert = function () {
        console.log('酷炫的警報器響囉');
    };
    return cool;
}());
var cool_test = new cool();
cool_test.alert();
var nocool = /** @class */ (function () {
    function nocool() {
    }
    nocool.prototype.alert = function () {
        console.log('不太酷炫的警報器響囉');
    };
    return nocool;
}());
var nocool_test = new nocool();
nocool_test.alert();

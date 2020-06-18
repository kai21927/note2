"use strict";
var cool = /** @class */ (function () {
    function cool() {
    }
    cool.prototype.connect = function () {
        console.log('成功酷炫了');
    };
    cool.prototype.close = function () {
        console.log('就說成功了吧');
    };
    return cool;
}());
var test = new cool();
test.connect();
test.close();
var nocool = /** @class */ (function () {
    function nocool() {
    }
    nocool.prototype.connect = function () {
        console.log('成功酷炫2號');
    };
    nocool.prototype.close = function () {
        console.log('就說成功了吧2號');
    };
    return nocool;
}());
var dodoit = new nocool();
dodoit.connect();
dodoit.close();
function add(x, y) {
    return x * y;
}
console.log(add(10, 5));
function sayhello(name) {
    if (name === void 0) { name = '錯誤了'; }
    return "hello " + name + ".";
}
console.log(sayhello('trump'));
console.log(sayhello());
var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.sayhello = function () {
        console.log(this.name + ",\u662F" + this.sex);
    };
    return Person;
}());
var koma = new Person('大傻瓜', '男生');
var kai = /** @class */ (function () {
    function kai() {
    }
    kai.prototype.alert = function () {
        console.log('第一個接口');
    };
    kai.prototype.haha = function () {
        console.log('第二個接口');
    };
    return kai;
}());
var go = new kai();
go.alert();
console.log(go.alert());
go.haha();
123123123;

"use strict";
function asd() {
    alert('阿就可以阿');
}
var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    this.sex
    Person.prototype.sayhello = function () {
        console.log(this.name + ",\u662F" + this.sex);
    };
    return Person;
}());
var koma = new Person('大傻瓜', '男生');
koma.sayhello();

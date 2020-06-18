"use strict";
var car = /** @class */ (function () {
    function car(honda_car) {
        this.honda_car = honda_car; //this.honda_car為第三行的值，honda_car為第五行傳入的值
    }
    car.prototype.add_car = function () {
        console.log("" + this.honda_car);
    };
    return car;
}());
var gogogo = new car('我的紅色HONDA'); //沈毅拿設計圖且預設我要做紅色的車車。
var yoyoyo = new car('我的色色HONDA'); //軍軍拿設計圖且預設我要做色色的車車。
gogogo.add_car(); //沈毅拿設計圖做車車囉!
yoyoyo.add_car(); //軍軍拿設計圖做車車囉!

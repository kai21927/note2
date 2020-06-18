class car { //class就是類別

	honda_car:string;  //指定我的設計圖使用字串完成
	
	constructor(honda_car:string){   //將設計圖建構出來，在此之前的值為腦中所虛構
		this.honda_car = honda_car;  //this.honda_car為第三行的值，honda_car為第五行傳入的值
	}
	
	public add_car(){               //做一台車的方法
	    console.log(`${this.honda_car}`);
	}
}

let gogogo = new car('我的紅色HONDA'); //沈毅拿設計圖且預設我要做紅色的車車。
let yoyoyo = new car('我的色色HONDA'); //軍軍拿設計圖且預設我要做色色的車車。

gogogo.add_car(); //沈毅拿設計圖做車車囉!
yoyoyo.add_car(); //軍軍拿設計圖做車車囉!



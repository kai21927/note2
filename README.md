
TYPESCRIPT 再次強調其優點
1. 目前前端主流框架的底層語言使用TS。
    (像是RxJS、ReactJS、AngularJS、VueJS)。
2. 能編寫程式同時，編譯器主動提示錯誤，更加能快速DEBUG。
   (相較於JS的弱型別，TS的強型別更能讓編譯器找出錯誤。)
3. 適用於多人開發同一專案時使用同一規則，較容易找出問題。
   (不同人開發時，註解過少，或是使用相同變數時，編譯器會主動提示錯誤)
   
TS 類別介紹

什麼是類別呢?
其實類別就像是一張設計圖，能透過它產生一個新的物件，
今天有一張汽車設計圖，可利用此設計圖大量生產車車。

TS類別用法

class Car { //class就是類別

	honda_car:string;  //指定我的設計圖使用字串完成
	
	constructor(){   //將設計圖建構出來，在此之前的值為腦中所虛構
		this.honda_car = '我是車車設計圖';
	}
	
	public add_car( ):string{
		return this.honda_car();
	}

}


let gogogo = new Car();
let yoyoyo = new Car();

console.log(gogogo.add_car);
console.log(yoyoyo.add_car);


 
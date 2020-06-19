
##  再次強調TYPESCRIPT優點
***
1.目前前端主流框架的底層語言使用TS。</br>
  (像是RxJS、ReactJS、AngularJS、VueJS)。

2.能編寫程式同時，編譯器主動提示錯誤，更加能快速DEBUG。</br>
(相較於JS的弱型別，TS的強型別更能讓編譯器找出錯誤。)

3.適用於多人開發同一專案時使用同一規則，較容易找出問題。</br>(不同人開發同一專案，註解過少導致程式不好更動，或是使用相同變數時，編譯器會主動提示錯誤)
   
## TS 類別(CLASS)介紹
***

### 為什麼要使用類別呢?

>專案開發經多人之手時，**命名方式或是註解之處不一**，產生找方法或是變數較耗時，或不理解程式碼某處在寫哪一部分，因此使用類別方式編寫，統一模式後讓開發大型專案程式碼會更加統一、整齊。

### 什麼是類別呢?

>其實類別就像是一張設計圖，能透過它產生一個新的物件，
今天有一張汽車設計圖，可利用此設計圖大量生產車車。

#### TS類別用法
```
class Car //class就是類別
{ 
	honda_car:string;  //指定我的設計圖使用字串形式
	constructor()//將設計圖建構出來，在此行前面的值都為腦中所虛構
	{   
		this.honda_car = '我是車車設計圖';
	}
	
	public add_car( ):string
	{
		return this.honda_car();
	}
}
let gogogo = new Car();
let yoyoyo = new Car();

console.log(gogogo.add_car);
console.log(yoyoyo.add_car);
```
### TS 接口(INTERFACE)介紹
***

#### 為什麼需要用接口呢?

一般來說一個類只能繼承另一個類，有時候不同的類中**擁有共同特性**，這時候就可以使用接口的方式去實現它，此特性大大增加了靈活度。

#### 什麼是接口呢?

接口本身就像是警報器，假設現有兩個類，一個類是門，另一類是車子，兩者都可以裝上警報器，也就是兩個類都可使用接口來實現警報的目的。
```
interface doit 
{
    alert():void;
}
class cool implements doit
{
    alert()
	{
        console.log('酷炫的警報器響囉');
    }
}

let cool_test:doit = new cool();
cool_test.alert();

class nocool implements doit
{
    alert()
	{
        console.log('不太酷炫的警報器響囉');
    }
}
let nocool_test:doit = new nocool();
nocool_test.alert();
```
#### VSCODE小工具
***
>turbo console.log 

能夠選取變數後，使用快捷鍵**Ctrl + Shift + L**快速console.log搭配上次quokka迅速顯示console.log結果，能讓JS、TS開發上更加快速。






 
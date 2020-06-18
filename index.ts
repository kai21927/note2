
interface doit {
    connect():void;
    close():void;
}

class cool implements doit{
    connect(){
        console.log('成功酷炫了');
    }
    close(){
        console.log('就說成功了吧');
    }
}

let test:doit = new cool();

test.connect();
test.close();

class nocool implements doit{
    connect(){
        console.log('成功酷炫2號');
    }
    close(){
        console.log('就說成功了吧2號');
    }
}

let dodoit:doit = new nocool();
dodoit.connect();
dodoit.close();


function add(x:number,y:number) : number{
    return x*y;
}
console.log(add(10,5));

function sayhello(name:string='錯誤了') :string {
    return "hello " + name + ".";
}
console.log(sayhello('trump'));
console.log(sayhello()); 

class Person {
    name:string;
    sex:string;

    constructor(name:string,sex:string){
        this.name = name;
        this.sex = sex;
    }
    
    sayhello(){
        console.log(`${this.name},是${this.sex}`);
    }
}
let koma = new Person('大傻瓜','男生');
// console.log(koma.name);


interface coco{
    alert():void;
    haha():void;
}
class kai implements coco{
    alert(){
        console.log('第一個接口');
    }
    haha(){
        console.log('第二個接口');
    }
}


let go:coco = new kai();


go.alert();
console.log( go.alert());
go.haha();
123123123



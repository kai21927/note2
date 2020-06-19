
interface doit {
    alert():void;
    name:string;
}
class cool implements doit{
    alert(){
        console.log('酷炫的警報器響囉');
    }
    name = 'haha';
}

let cool_test:doit = new cool();
cool_test.alert();
cool_test.name;
console.log("cool_test.name", cool_test.name);


class nocool implements doit{
    alert(){
        console.log('不太酷炫的警報器響囉');
    }
    name = 'yaya';
}
let nocool_test:doit = new nocool();
nocool_test.alert();






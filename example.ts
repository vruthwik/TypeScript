class Student{
    sid:number=123;
    sname:string="vruthwik";
    smarks:number=90;
    constructor(id:number,name:string){
        this.sid=id;
        this.sname=name;
        console.log(this.sid);
        console.log(this.sname)
    }
    total(){
        console.log(this.smarks)
    }
    fullname(){
        console.log(this.sname)
    }
}
var x=new Student(101,"venkat");
console.log(x.sid);
console.log(x.sname);
console.log(x.smarks);
x.total();
x.fullname();
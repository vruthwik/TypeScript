class Vbm{
    sno:number=123;
    sname:string="vruthwik";
    vbmdetails(){
        var phonenumber:number;
        var place:"string";
    }
    constructor(id:number,name:string,){
        this.sno=id;
        this.sname=name;
    }
    phonenumber(){
        console.log(this.sno);
    }
    land(){
        console.log(this.sname);
    }
}
var x=new Vbm(101,"sai",);
console.log(x.sno);
console.log(x.sname);
x.phonenumber();
x.land();

class Son{
    sname:string;
    sage:number;
    sdob:number;
    splace:string;
    
    constructor(name:string,id:number,id1:number,name1:string){
        this.sname=name;
        this.sage=id;
        this.sdob=id1;
        this.splace=name1;
    }
}

class Parent extends Son {
    pname:string;
    page:number;
    constructor(name2:string,id2:number,name:string,id:number,id1:number,name1:string){
        super(name,id,id1,name1);
        this.pname=name2;
        this.page=id2;
        console.log(this.pname)
        console.log(this.page)
        console.log(this.sname)
        console.log(this.sage)
        console.log(this.sdob)
        console.log(this.splace)

    }
}
var p=new Parent("kalyani",43,"vruthwik",26,3081994,"ongole");
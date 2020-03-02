class Bmw{
    motar:number;
    color:string;
    capacity:number;
    mcompany:string;
    
    constructor(id:number,name:string,id1:number,name1:string){
        this.motar=id;
        this.color=name;
        this.capacity=id1;
        this.mcompany=name1;
    }
}
class Audi extends Bmw{
    year:number;
    mplace:string;
    constructor(id2:number,name2:string,id:number,name:string,id1:number,name1:string){
        super(id,name,id1,name1);
        this.year=id2;
        this.mplace=name2;
        console.log(this.year)
        console.log(this.mplace)
        console.log(this.motar)
        console.log(this.color)
        console.log(this.capacity)
        console.log(this.mcompany)
    }
}
var Final=new Audi(1990,"japan",987,"tokyo",12000,"us");
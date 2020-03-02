class vechicle{
    vno:number;
    vname:string;
    vyear:number;
    vmanu:number;
    vprice:number;
    constructor(no:number,name:string,year:number,manu:number,price:number){
        this.vno=no;
        this.vname=name;
        this.vyear=year;
        this.vmanu=manu;
        this.vprice=price;
        console.log(this.vno)
        console.log(this.vname)
        console.log(this.vyear)
        console.log(this.vmanu)
        console.log(this.vprice)
    }
    unknown(){
        console.log("ruthwik")
    }
    kalyan(){
        console.log("sai")
    }
}
 var Vechicledetails=new vechicle(2189,"glamour",2011,2017,88000);
 Vechicledetails.unknown();
 Vechicledetails.kalyan();
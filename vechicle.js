var vechicle = /** @class */ (function () {
    function vechicle(no, name, year, manu, price) {
        this.vno = no;
        this.vname = name;
        this.vyear = year;
        this.vmanu = manu;
        this.vprice = price;
        console.log(this.vno);
        console.log(this.vname);
        console.log(this.vyear);
        console.log(this.vmanu);
        console.log(this.vprice);
    }
    vechicle.prototype.unknown = function () {
        console.log("ruthwik");
    };
    vechicle.prototype.kalyan = function () {
        console.log("sai");
    };
    return vechicle;
}());
var Vechicledetails = new vechicle(2189, "glamour", 2011, 2017, 88000);
Vechicledetails.unknown();
Vechicledetails.kalyan();

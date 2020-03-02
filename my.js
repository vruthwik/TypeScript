var Vbm = /** @class */ (function () {
    function Vbm(id, name) {
        this.sno = 123;
        this.sname = "vruthwik";
        this.sno = id;
        this.sname = name;
    }
    Vbm.prototype.vbmdetails = function () {
        var phonenumber;
        var place;
    };
    Vbm.prototype.phonenumber = function () {
        console.log(this.sno);
    };
    Vbm.prototype.land = function () {
        console.log(this.sname);
    };
    return Vbm;
}());
var x = new Vbm(101, "sai");
console.log(x.sno);
console.log(x.sname);
x.phonenumber();
x.land();

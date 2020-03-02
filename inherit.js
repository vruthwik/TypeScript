var Son = /** @class */ (function () {
    function Son(name, id, id1, name1) {
        this.sname = name;
        this.sage = id;
        this.sdob = id1;
        this.splace = name1;
    }
    return Son;
}());
var Parent = /** @class */ (function () {
    function Parent(name2, id2) {
        this.pname = name2;
        this.page = id2;
        console.log(this.pname);
        console.log(this.page);
    }
    return Parent;
}());
var p = new Parent("kalyani", 43);

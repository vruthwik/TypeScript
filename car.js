var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bmw = /** @class */ (function () {
    function Bmw(id, name, id1, name1) {
        this.motar = id;
        this.color = name;
        this.capacity = id1;
        this.mcompany = name1;
    }
    return Bmw;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(id2, name2, id, name, id1, name1) {
        var _this = _super.call(this, id, name, id1, name1) || this;
        _this.year = id2;
        _this.mplace = name2;
        console.log(_this.year);
        console.log(_this.mplace);
        console.log(_this.motar);
        console.log(_this.color);
        console.log(_this.capacity);
        console.log(_this.mcompany);
        return _this;
    }
    return Audi;
}(Bmw));
var Final = new Audi(1990, "japan", 987, "tokyo", 12000, "us");

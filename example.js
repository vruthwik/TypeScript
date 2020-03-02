var Student = /** @class */ (function () {
    function Student(id, name) {
        this.sid = 123;
        this.sname = "vruthwik";
        this.smarks = 90;
        this.sid = id;
        this.sname = name;
        console.log(this.sid);
        console.log(this.sname);
    }
    Student.prototype.total = function () {
        console.log(this.smarks);
    };
    Student.prototype.fullname = function () {
        console.log(this.sname);
    };
    return Student;
}());
var x = new Student(101, "venkat");
console.log(x.sid);
console.log(x.sname);
console.log(x.smarks);
x.total();
x.fullname();

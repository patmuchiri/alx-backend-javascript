// Define printTeacher function
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + "." + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstname, lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("George", "Washington");
console.log(student.displayName());
console.log(student.workOnHomework());

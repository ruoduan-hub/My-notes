// const  greeter = (person: string) =>{
//     return "Hello, " + person;
// }
// let user = 
// document.body.innerHTML = greeter(user);
// interface Person {
//     firstname: string;
//     lastname: string;
// }
// function greeter (person: Person) {
//     return 'hello' + person.firstname +'---'+ person.lastname
// }
// let user = { firstname: '小明', lastname: '小红' }
// document.body.innerHTML = greeter(user)
//类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);

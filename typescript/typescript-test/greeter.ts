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
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
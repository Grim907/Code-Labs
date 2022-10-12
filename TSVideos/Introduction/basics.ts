let age: number;
age = 12;
let userName: string;
userName = 'max';
let isInstructor: boolean;
isInstructor = true;
let hobbies: string[];
hobbies = ['Sports', 'cooking'];
type Person =  {
    name: string;
    age: number;
};
let person: Person;
person = {
    name: 'max',
    age: 32
}
//person = {
//    isEmployee: true
let people: Person[];
let course: string | number = 'Complete Guide';
course = 123456;
function subtract(a: number, b: number) {
    return a + b;
}
function printOutput(value: any) {
    console.log(value);
}
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value,...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')
//updatedArray[0].split('');
class Student {
    constructor(public firstName: string, public lastName: string, public age: number,  public courses: string[]){
    
    }
    enrol(courseName: string){
        this.courses.push(courseName);
    }
    listCourses(){
        return this.courses.slice();
    }
}
const student = new Student('max', 'kyle', 32, ['Angular']);
student.enrol('React');
interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}
let max: Human;
max = {
    firstName: 'max',
    age: 32,
    greet(){
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName!: string;
    age!: number;
    greet() {
        console.log('Hello!')
    }
}
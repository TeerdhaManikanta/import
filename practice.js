class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayFullName() {
    return this.firstName + " " + this.lastName;
  }
}
let person1 = new Person("Virat", "Kohli");

console.log(person1);

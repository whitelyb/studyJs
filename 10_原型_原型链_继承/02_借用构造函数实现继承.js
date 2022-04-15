function Person(name) {
    this.name = name
}

Person.prototype.eating = function() {
    console.log(this.name + '在吃东西');
}

function Student(name, age, sno) {
    Person.call(this, name) // 第一次调用 Person
    this.age = age
    this.sno = sno
}

Student.prototype = new Person() // 第二次调用 Person

Student.prototype.studying = function() {
    console.log(this.name + '正在学习');
}

const stu1 = new Student('lyb', 18, 112);
console.log(stu1.__proto__.__proto__);
console.log(stu1.age);
console.log(stu1.sno);
stu1.studying()
stu1.eating()
function Person() {
    this.name = 'person'
    this.friends = []
}

Person.prototype.eating = function() {
    console.log(this.name + '在吃东西');
}

function Student() {
    this.age = 18
    this.sno = 111
}

// 可以使用这种方法实现继承，但是会存在几个问题
Student.prototype = new Person

Student.prototype.studying = function() {
    console.log(this.name + '正在学习');
}

const stu1 = new Student();
const stu2 = new Student();
stu1.friends.push('kobe')
console.log(stu1.friends);
console.log(stu2.friends);
console.log(stu1.age);
console.log(stu1.sno);
stu1.studying()
stu1.eating()

// 缺点
// 1.当操作一个引用数据类型的时候,改一个其它的都会改（直接赋值除外）
// 2.无法传递参数
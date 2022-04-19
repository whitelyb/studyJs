function inheritPrototype(subType, superType) {
    // 第一种方法
    subType.prototype = Object.create(superType.prototype)
    Object.defineProperty(subType.prototype, 'constructor', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: subType
    })

    // 第二种方法
    // var prototype = Object(superType.prototype);  //创建对象
    // prototype.constructor = subType;              //增强对象
    // subType.prototype = prototype;                //指定对象
}

function Person(name, age, friends) {
    this.name = name
    this.age = age
    this.friends = friends
}

Person.prototype.running = function () {
    console.log('running');

}

Person.prototype.eating = function () {
    console.log('eating');

}

function Student(name, age, friends, sno, score) {
    Person.call(this, name, age, friends)
    this.sno = sno
    this.score = score
}

inheritPrototype(Student, Person)

Student.prototype.studying = function () {
    console.log('studying');

}

var stu = new Student('LYB', 18, ['kobe'], 111, 100)
console.log(stu);
stu.running()
stu.eating()
stu.studying()

console.log(Student.prototype.constructor.name);

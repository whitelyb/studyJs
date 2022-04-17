var personObj = {
    running: function () {
        console.log('running');

    }
}

// 寄生式继承
function createStudent(name) {
    var stu = Object.create(personObj)
    stu.name = name
    stu.studying = function () {
        console.log('studying');

    }

    return stu
}

var stuObj1 = createStudent('lyb')
console.log(stuObj1)
stuObj1.studying()
stuObj1.running()

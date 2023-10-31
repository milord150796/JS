const Academy={
    students:[],
    addStudet: function(group,name){
        this.students.push({group,name});
    },
    removeStudent:function(group,name){
        this.students=this.students.filter(student=>!(student.group===group && student.name===name))
    },
    getStudents:function(group,name){
        return this.students.filter(student=>student.group===group && student.name===name)
    },
    getStudents:function(group,namber){
        let studentsNamber=this.students.filter(student=>student.group===group)
        if (namber>=0 && namber<studentsNamber.length){
            return studentsNamber[namber];
        }
        return null;
    }
};
//добавити друзів
Academy.addStudet("A","Alex");
Academy.addStudet("A","Lena");
Academy.addStudet("B","Oleg");
Academy.addStudet("B","Ira");
console.log(Academy.students)
//удалити друга
Academy.removeStudent("A","Alex")
console.log(Academy.students)
let studentsNameGroup=Academy.getStudents("B","Ira")
console.log(studentsNameGroup)
const student=Academy.getStudents("B",1);
console.log(student)
Academy["addStudet"]("C","Sveta")
console.log(Academy.students)

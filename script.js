/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

// function logStudent(student){
//   if(student.marks>50){
//     console.log(student);
//    }
// }

function PrintStudentswithMap() {
  arr.map(function (student){
    if(student.marks>50){
     console.log(student);
    }
  });
}

// arr.map(logStudent);

function PrintStudentsbyForEach() {
  arr.forEach(function(student){
    if(student.marks>50)
    console.log(student);
  });
}

// arr.forEach(logStudent);

function addData() {
  var student = {id:4,name:"susan",age:"20",marks:45};
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  for(var i = 0; i<arr.length; i++){
    if(arr[i].marks<50){
      arr.splice(i,1);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  let arr1 = [
    { id: 4, name: "Ankit", age: "28", marks: 91 },
    { id: 5, name: "Rahul", age: "29", marks: 85 },
    { id: 6, name: "Simran", age: "19", marks: 95 },
  ];
  
  // var finalArr = [];
  
//   arr.forEach(function(item){
//     finalArr.push(item)
//   });
//   arr1.forEach(function(item){
//     finalArr.push(item);
// });



        //  OR

        var finalArr = [...arr,...arr1];


console.log(finalArr);

}
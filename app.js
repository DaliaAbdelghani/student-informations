'use strict';

function getAge(){
  return Math.floor(Math.random() * (24 - 18 + 1) + 18);
}

let studentInfo =[];
let studentsData = ['id','Name','Email','Mobile','age','Tuition'];
let inputs = document.getElementById('form');
let total = 0;
let ids = 1 ;

function Student (email, mobile,tuition ) {
  this.email=email;
  this.mobile=mobile;
  this.tuition=parseInt(tuition);
  this.name=email.split('@')[0];
  this.age=getAge();
  this.id=ids++;
};

function load(){
  let users =localStorage.getItem('user');
  if(users){
    studentInfo=JSON.parse(users);
    ids = studentInfo.length + 1;
    studentInfo.forEach(student => {
      createStudentRecord(student);
    });

  }
}

let container = document.getElementById('tableArea');
let myTable = document.createElement('table');
container.appendChild(myTable);
let header = document.createElement('thead');
myTable.appendChild(header);
let headerRow = document.createElement('tr');
header.appendChild(headerRow);
let body = document.createElement('tbody');
myTable.appendChild(body);

let footer = document.createElement('tfoot');
myTable.appendChild(footer);
footer.textContent='Total : '+total;

for (let i=0; i<studentsData.length;i++){
  let headerData = document.createElement('td');
  headerData.textContent= studentsData[i];
  headerRow.appendChild(headerData);
}
load();

inputs.addEventListener ('submit', getStudentInfo);

function getStudentInfo (event) {
  event.preventDefault();
  let email= event.target.email.value;
  let mobile= event.target.mobile.value;
  let tuition= event.target.tuition.value;
 
  let student = new Student(email, mobile,tuition);

  createStudentRecord(student);


  studentInfo.push(student);
  localStorage.setItem('user', JSON.stringify(studentInfo));

}

function createStudentRecord(student) {
  let row = document.createElement('tr');
  body.appendChild(row);

  let rowData1 = document.createElement('td');
  row.appendChild(rowData1);
  rowData1.textContent = student.id;

  let rowData2 = document.createElement('td');
  row.appendChild(rowData2);

  rowData2.textContent = student.name;

  let rowData3 = document.createElement('td');
  rowData3.textContent = student.email;
  row.appendChild(rowData3);

  let rowData4 = document.createElement('td');
  rowData4.textContent = student.mobile;
  row.appendChild(rowData4);

  let rowData5 = document.createElement('td');

  rowData5.textContent = student.age;
  row.appendChild(rowData5);

  let rowData6 = document.createElement('td');
  rowData6.textContent = student.tuition;
  row.appendChild(rowData6);
  total +=student.tuition;

  footer.textContent='Total : '+total;
}


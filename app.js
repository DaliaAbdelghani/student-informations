'use strict';

function Student (email, mobile,tuition ) {
  this.email=email;
  this.mobile=mobile;
  this.tuition=tuition;
  this.name=email.split('@')[0];
  this.age=0;
  this.id=0;
  this.studentInfo = [];
};

Student.prototype.getAge = function (){
  this.age=Math.floor(Math.random() * 24) + 18;
};

let studentsData = ['id','Name','Email','Mobile','age','Tuition'];

let container = document.getElementById('tableArea');
let myTable = document.createElement('table');
container.appendChild(myTable);
let header = document.createElement('thead');
myTable.appendChild(header);
let headerRow = document.createElement('tr');
header.appendChild(headerRow);
let body = document.createElement('tbody');
myTable.appendChild(body);
let row = document.createElement('tr');
body.appendChild(row);
let footer = document.createElement('tfoot');
myTable.appendChild(footer);

for (let i=0; i<studentsData.length;i++){
  let headerData = document.createElement('td');
  headerData.textContent= studentsData[i];
  headerRow.appendChild(headerData);
}

let inputs = document.getElementById('form');

inputs.addEventListener ('submit', getStudentInfo);

function getStudentInfo (event) {
  event.preventDefault();
  let email= event.target.email.value;
  let mobile= event.target.mobile.value;
  let tuition= event.target.tuition.value;

  let rowData1 = document.createElement('td');
  row.appendChild(rowData1);
  rowData1.textContent= 'id';

  let rowData2 = document.createElement('td');
  row.appendChild(rowData2);
  let name =email.split('@')[0];
  rowData2.textContent= name;

  let rowData3 = document.createElement('td');
  rowData3.textContent= email;
  row.appendChild(rowData3);

  let rowData4 = document.createElement('td');
  rowData4.textContent= mobile;
  row.appendChild(rowData4);

  let rowData5 = document.createElement('td');
  rowData5.textContent= 'age';
  row.appendChild(rowData5);

  let rowData6 = document.createElement('td');
  rowData6.textContent= tuition;
  row.appendChild(rowData6);

let student = new Student (email,mobile,tuition);
student.getAge();

}

//localStorage.setItem('user', JSON.stringify(newStudent));
//Student = JSON.parse(localStorage.getItem('user'));
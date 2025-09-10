interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'toto',
  lastName: 'dup',
  age: 31,
  location: 'marseille',
};
const student2: Student = {
  firstName: 'tata',
  lastName: 'uis',
  age: 29,
  location: 'toulouse',
};

const studentsList: Student[] = [student1, student2]
let table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach(function (student) {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

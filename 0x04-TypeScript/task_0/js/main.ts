interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Vivian",
  lastName: "Okaforcha",
  age: 20,
  location: "Jos",
};

const student2 Student = {
  firstName: "Andre",
  lastName: "Okaforcha",
  age: 22,
  location: "Jos",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElemet("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

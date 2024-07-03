interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName() : string {
    return this.firstName;
  }
}

const student = new Student('Vivian', 'Okaforcha');

const director1: Directors = {
  firstName: 'Vivian',
  lastName: 'Okaforcha',
  location: 'Jos',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const teacher3: Teacher = {
  firstName: 'Vivian',
  fullTimeEmployee: false,
  lastName: 'Okaforcha',
  location: 'Jos',
  contract: false,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(student.workOnHomework());
console.log(student.displayName());
console.log(printTeacher("Vivian", "Okaforcha"));
console.log(director1);
console.log(teacher3);

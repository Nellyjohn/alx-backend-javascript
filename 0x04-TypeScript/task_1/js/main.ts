interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Vivian',
  fullTimeEmployee: false,
  lastName: 'Okaforcha',
  location: 'Jos',
  contract: false,
};

console.log(teacher3);

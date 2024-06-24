export default function createReportObject(employeesList) {
  const departmentNames = Object.keys(employeesList);
  const allEmployees = {};

  for (let department of departmentNames) {
    allEmployees[department.toLowerCase()] = [...employeesList[department]];
  }

  const getNumberOfDepartments = () => departmentNames.length;

  return {
    allEmployees,
    getNumberOfDepartments
  };
}

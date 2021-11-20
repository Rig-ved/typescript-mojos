interface EmployeeType {
  id: number;
  fullname: string;
  role: string;
}

let employees: Record<string, EmployeeType> = {
  john: { id: 1, fullname: 'John Doe', role: 'Designer' },
  Fall: { id: 2, fullname: 'Ibrahima Fall', role: 'Developer' },
  Sara: { id: 3, fullname: 'Sara Duckson', role: 'Developer' },
};

console.log(employees['john']);

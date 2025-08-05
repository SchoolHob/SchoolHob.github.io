//Problem 1

let employess = [
    // Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
    // Sam, Tech, Manager, 40000, true
    // Mary, Finance, Trainee, 18500, true
    // Bill, HR, Executive, 21200, false
    { firstName: 'Sam', 
        department: 'Tech', 
        designation: 'Manager', 
        salary: 40000, 
        raiseEligible: true 
    },
    { 
        firstName: 'Mary', 
        department: 'Finance', 
        designation: 'Trainee', 
        salary: 18500, 
        raiseEligible: true 
    },
    { 
        firstName: 'Bill', 
        department: 'HR', 
        designation: 'Executive', 
        salary: 21200, 
        raiseEligible: false 
    }
]

console.log('Problem 1');
console.log(JSON.stringify(employess, null, 2));

//Problem 2

let company = {
    //Tech Stars, www.techstars.site, array of Employees
    name: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employess
}

console.log('Problem 2');
console.log(JSON.stringify(company, null, 2));

//Problem 3

company.employees.push({
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
});

console.log('Problem 3');
console.log(JSON.stringify(company, null, 2));

//Problem 4

let totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);

console.log(`Total Salary: $${totalSalary}`);
//Problem 5

function raiseSalaries(company) {
    for (let employee of company.employees) {
        if (employee.raiseEligible) {
            employee.salary *= 1.1; //increase salary by 10%
        }
        employee.raiseEligible = false;
    }
}

raiseSalaries(company);

console.log('Problem 5');
console.log(JSON.stringify(company, null, 2));

//Problem 6


const wfma = ['Anna', 'Sam']; //work from home array

for (let employee of company.employees) {
    employee.wfh = false;
    for (fn of wfma) { //fn is first name
        if (employee.firstName === fn) {
            employee.wfh = true;
            break;
        }
    }
}

console.log('Problem 6');
console.log(JSON.stringify(company, null, 2));
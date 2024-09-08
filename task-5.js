// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function getTotalSalary(numbers){
  let salary = 0;
  for(const number of numbers){
    salary = salary + number.starting + (number.experience * number.increment);
  }
  return salary;
}

const totalSalary = getTotalSalary(employees)
console.log(totalSalary)


// Optional --> individual salary;

// function getIndividualSalary(numbers){
//   let salary = 0;
//   let individualSalaries = {};
//   for (const number of numbers){
//     const individual = number.starting + (number.experience * number.increment);
//     individualSalaries[number.name] = individual;
//     salary += individual;
//   }
//   return {
//     salary,
//     individualSalaries
//   };
// }

// const totalSalary = getIndividualSalary(employees);
// console.log(totalSalary);

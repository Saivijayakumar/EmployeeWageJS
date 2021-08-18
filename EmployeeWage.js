const FULL_TIME = 2;
const PART_TIME = 1;
const ABSENT = 0;
const FULL_TIME_HRS = 8;
const PART_TIME_HRS = 4;
const WAGE_PER_HR = 20;
const MAX_WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

//Finding workHours For Respective employee
function getWorkHours() {
    //It Gives 0,1,2
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case PART_TIME:
            return PART_TIME_HRS;
        case FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}
//inline function use to calculate wage .
let employeeWage = (employeeHrs) => {
    return employeeHrs * WAGE_PER_HR;
}
//Createing Employee Wage Array
let day = 0;
totalEmpHrs = 0;
let employeesWageArray = new Array();
while (totalEmpHrs <= MAX_WORKING_HRS_IN_MONTH && day++ < MAX_WORKING_DAYS_IN_MONTH) {
    let employeeHrs = getWorkHours();
    totalEmpHrs += employeeHrs;
    employeesWageArray.push(employeeWage(employeeHrs));
}

// 7A Calculate Total Wage
let totalWageUsingForEach = 0;
let totalWage = (dailyWages) => totalWageUsingForEach += dailyWages;
employeesWageArray.forEach(totalWage);
console.log(`\t7A \nTotal Wage Using ForEach : ${totalWageUsingForEach}`);
console.log(`Total Wage Using Reduce : ${employeesWageArray.reduce((totalWage, currentWage) => totalWage + currentWage, 0)}`);

//7B show the day along with daily wage
day = 0;
//function to map day with daily wage it will go upto day = 20
let mapDaywithDailyWage = (dailyWage) => `Day = ${++day} => dailyWage = ${dailyWage}`;
let mapDaywithDailyWageArray = employeesWageArray.map(mapDaywithDailyWage);
console.log("\t 7B \n" + mapDaywithDailyWageArray);

//7C show days when full time wage is 160
console.log("\t 7C \n" + mapDaywithDailyWageArray.filter((x) => x.includes("160")));

//7D Find the first Occuurence of Full time
console.log("\t 7D \n" + mapDaywithDailyWageArray.find((x) => x.includes("160")));

//7E Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("\t 7E ");
console.log((mapDaywithDailyWageArray.filter((x) => x.includes("160")).every((x) => x.includes("160"))) ? `Every element is holding correct value` : `Not every element holding correct value`);

//7F Check if there is any Part Time Wage
console.log("\t 7F ");
console.log((mapDaywithDailyWageArray.some((x) => x.includes("80"))) ? `There is a Part Time Wage` : `NO Part Time Wage Present`);

//7G Find the number of days the Employee Worked
let numberOfDaysEmpWorked = (daycount, dailyWage) => {
    if (dailyWage > 0)
        return daycount + 1;
    return daycount;
}
console.log(`\t 7G \nTotal number of days the Employee Worked : ${employeesWageArray.reduce(numberOfDaysEmpWorked,0)}`);
class EmployeeWage {
    constructor(...parameters) {
        this.id = parameters[0];
        this.name = parameters[1];
        this.salary = parameters[2];
        this.gender = parameters[3];
        this.startDate = parameters[4];
    }
    //getter and seter
    get id() { return this._id };
    set id(id) {
        let idpattern = RegExp("^[1-9][0-9]*$")
        if (idpattern.test(id)) {
            this._id = id;
        }
        else {
            throw 'Invalid ID ';
        }

    };
    get name() { return this._name };
    set name(name) {
        let namepattern = RegExp("^[A-Z]{1}[a-z]{2,}")
        if (namepattern.test(name)) {
            this._name = name;
        }
        else {
            throw 'Invalid name';
        }
    };
    get salary() { return this._salary }
    set salary(salary) {
        let salarypattern = RegExp("^[1-9][0-9]*$")
        if (salarypattern.test(salary)) {
            this._salary = salary;
        }
        else {
            throw 'Invalid salary';
        }
    }
    get gender() { return this._gender }
    set gender(gender) {
        let genderpattern = RegExp("^[M,F,m,f]$")
        if (genderpattern.test(gender)) {
            this._gender = gender;
        }
        else {
            throw 'Invalid Gender It Should be M or F';
        }
    }
    get startDate() { return this._startDate };
    set startDate(startDate) {
        let currentDate = new Date();
        startDate = new Date(startDate);
        if (startDate > currentDate) {
            throw 'Invalid Date it Future date';
        }
        else {

            this._startDate = new Date(startDate).toString().split(' ').slice(1, 4).join(" ");
        }
    }

    tostring() {
        return `ID = ${this.id} Name = ${this.name} Salary = ${this.salary} Gender = ${this.gender} StartDate = ${this.startDate} `;
    }
}
try {
    //date format is year - month - day
    let emp = new EmployeeWage(1, "Saivijay", 2233, "M", '2012-02-21');
    console.log(emp.tostring())
}
catch (message) {
    console.error(message);
}
try {
    //date format is year - month - day
    let Emp = new EmployeeWage(2, "Lucky", 2233, "f", '2002-02-21');
    console.log(Emp.tostring())
}
catch (message) {
    console.error(message);
}
try {
    let employe = new EmployeeWage(3, "Ramangi", -2233, "M", '2021-02-02');
    console.log(employe.tostring())
}
catch (message) {
    console.error(message);
}
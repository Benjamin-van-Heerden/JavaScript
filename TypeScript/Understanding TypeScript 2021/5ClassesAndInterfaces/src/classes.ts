// Classes and Objects

class Department {
    static fiscalYear = 2021;
    private readonly id: number;
    private name: string;
    protected employees: string[] = [];

    constructor(name: string, id: number = -1) {
        this.name = name;
        this.id = id;
    }

    describe(this: Department) {
        console.log(`Department is: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const sales = new Department("Sales");
sales.addEmployee("Benj")


console.log(sales);
sales.describe();

sales.printEmployees();


//base class constructor is used if no new constructor is specified 
class ITDepartment extends Department {
    private admins: string[];
    private reports: string[] = [];
    private lastReport: string = "";

    constructor(admins: string[]) { 
        super("IT");
        this.admins = admins;
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    get mostRecentReport() {
        if (this.lastReport) return this.lastReport;
        throw new Error('No report found');
    }

    set mostRecentReport(text: string) {
        this.addReport(text);
    }

    //override methods (must make employees "protected" in stead of "private")
    addEmployee(employee: string) {
        this.employees.push(`IT Person: ${employee}`)
    }


}

const itDep = new ITDepartment(["Jan", "Koos"]);
itDep.addReport("Somthing went wrong");
itDep.mostRecentReport = "Now it works";
itDep.addEmployee("Sannie");
console.log(itDep);

//access like a property
console.log(itDep.mostRecentReport)

console.log(Department.fiscalYear)



"use strict";
// Classes and Objects
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, id) {
        if (id === void 0) { id = -1; }
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    Department.prototype.describe = function () {
        console.log("Department is: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2021;
    return Department;
}());
var sales = new Department("Sales");
sales.addEmployee("Benj");
console.log(sales);
sales.describe();
sales.printEmployees();
//base class constructor is used if no new constructor is specified 
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(admins) {
        var _this = _super.call(this, "IT") || this;
        _this.reports = [];
        _this.lastReport = "";
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    Object.defineProperty(ITDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            throw new Error('No report found');
        },
        set: function (text) {
            this.addReport(text);
        },
        enumerable: false,
        configurable: true
    });
    //override methods (must make employees "protected" in stead of "private")
    ITDepartment.prototype.addEmployee = function (employee) {
        this.employees.push("IT Person: " + employee);
    };
    return ITDepartment;
}(Department));
var itDep = new ITDepartment(["Jan", "Koos"]);
itDep.addReport("Somthing went wrong");
itDep.mostRecentReport = "Now it works";
itDep.addEmployee("Sannie");
console.log(itDep);
//access like a property
console.log(itDep.mostRecentReport);
console.log(Department.fiscalYear);

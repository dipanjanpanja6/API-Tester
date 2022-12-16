const { Knex } = require("knex")
const knex = require("../config/database")

/**
 * @typedef {Object} Employee
 * @property {number} employeeId
 * @property {string} employeeFirstName
 * @property {string} employeeLastName
 * @property {string} employeeEmail
 * @property {Date} employeeJoiningDate
 * @property {Date} employeePayrollDate
 * @property {string} employeeHouseNumber
 * @property {string} employeeStreetNumber
 * @property {string} employeeCity
 * @property {string} employeeState
 * @property {string} employeeZipCode
 * @property {string} employeeSalary
 *
 * @returns {Knex.QueryBuilder<Employee, {}>}
 */
const Employee = () => knex("employee")
module.exports = { Employee }

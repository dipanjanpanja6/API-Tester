const { Employee } = require("../models/Employee")

const index = async (_req, res) => {
  try {
    const employees = await Employee()
    return res.send({ message: "Employee List", data: employees })
  } catch (error) {
    return res.status(500).send({ message: "failed", error: error.message })
  }
}
const show = async (req, res) => {
  try {
    const employeeId = req.params.id
    const employee = await Employee().where({ employeeId }).first()
    if (!employee) return res.status(400).send({ message: "Employee Id not exist" })

    return res.send({ message: "Employee found.", data: employee })
  } catch (error) {
    return res.status(500).send({ message: "failed", error: error.message })
  }
}
const store = async (req, res) => {
  try {
    const {
      employeeId,
      employeeFirstName,
      employeeLastName,
      employeeEmail,
      employeeJoiningDate,
      employeePayrollDate,
      employeeHouseNumber,
      employeeStreetNumber,
      employeeCity,
      employeeState,
      employeeZipCode,
      employeeSalary,
    } = req.body

    if (!employeeFirstName) return res.status(400).send({ message: "First name is required" })
    if (!employeeLastName) return res.status(400).send({ message: "Last name is required" })
    if (!employeeEmail) return res.status(400).send({ message: "Email address is required" })
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmail)) return res.status(400).send({ message: "enter a valid email" })
    if (!employeeJoiningDate) return res.status(400).send({ message: "First name is required" })
    if (!employeePayrollDate) return res.status(400).send({ message: "Employee payroll date is required" })
    if (!employeeHouseNumber) return res.status(400).send({ message: "Employee house number is required" })
    if (!employeeStreetNumber) return res.status(400).send({ message: "Employee street number is required" })
    if (!employeeCity) return res.status(400).send({ message: "Employee city is required" })
    if (!employeeState) return res.status(400).send({ message: "Employee state name is required" })
    if (!employeeZipCode) return res.status(400).send({ message: "Employee Zip Code is required" })
    if (!employeeSalary) return res.status(400).send({ message: "Employee salary is required" })

    await Employee().insert({
      employeeId,
      employeeFirstName,
      employeeLastName,
      employeeEmail,
      employeeJoiningDate,
      employeePayrollDate,
      employeeHouseNumber,
      employeeStreetNumber,
      employeeCity,
      employeeState,
      employeeZipCode,
      employeeSalary,
    })

    return res.status(201).send({ message: "New employee added successfully" })
  } catch (error) {
    return res.status(500).send({ message: "failed", error: error.message })
  }
}
const update = async (req, res) => {
  try {
    const employeeId = req.params.id

    const {
      employeeFirstName,
      employeeLastName,
      employeeEmail,
      employeeJoiningDate,
      employeePayrollDate,
      employeeHouseNumber,
      employeeStreetNumber,
      employeeCity,
      employeeState,
      employeeZipCode,
      employeeSalary,
    } = req.body
    if (req.method === "PUT") {
      if (!employeeFirstName) return res.status(400).send({ message: "First name is required" })
      if (!employeeLastName) return res.status(400).send({ message: "Last name is required" })
      if (!employeeEmail) return res.status(400).send({ message: "Email address is required" })
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmail)) return res.status(400).send({ message: "enter a valid email" })
      if (!employeeJoiningDate) return res.status(400).send({ message: "First name is required" })
      if (!employeePayrollDate) return res.status(400).send({ message: "Employee payroll date is required" })
      if (!employeeHouseNumber) return res.status(400).send({ message: "Employee house number is required" })
      if (!employeeStreetNumber) return res.status(400).send({ message: "Employee street number is required" })
      if (!employeeCity) return res.status(400).send({ message: "Employee city is required" })
      if (!employeeState) return res.status(400).send({ message: "Employee state name is required" })
      if (!employeeZipCode) return res.status(400).send({ message: "Employee Zip Code is required" })
      if (!employeeSalary) return res.status(400).send({ message: "Employee salary is required" })
    }
    const employee = await Employee().where({ employeeId }).update({
      employeeFirstName,
      employeeLastName,
      employeeEmail,
      employeeJoiningDate,
      employeePayrollDate,
      employeeHouseNumber,
      employeeStreetNumber,
      employeeCity,
      employeeState,
      employeeZipCode,
      employeeSalary,
    })
    if (!employee) return res.status(400).send({ message: "Employee Id does not exist" })

    return res.send({ message: "Employee data update successfully", data: employee[0] })
  } catch (error) {
    return res.status(500).send({ message: "failed", error: error.message })
  }
}
const destroy = async (req, res) => {
  try {
    let employeeId = req.params.id
    const employee = await Employee().where({ employeeId }).delete()
    if (!employee) return res.status(400).send({ message: "Employee Id does not found" })

    return res.send({ message: "employee data deleted successfully" })
  } catch (error) {
    return res.status(500).send({ message: "failed", error: error.message })
  }
}

module.exports = { store, index, show, update, destroy }

const Router = require("express").Router()
const employee = require("../controllers/emplyeeController")

Router.post("/createEmployee", employee.create)
Router.get("/getEmployeeList", employee.read)
Router.put("/updateEmployee/:employeeId", employee.update)
Router.patch("/updateEmployeeByPatch/:employeeId", employee.updatePatch)
Router.delete("/deleteEmployee/:employeeId", employee.deleteData)

module.exports = Router

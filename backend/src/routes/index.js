const Router = require("express").Router()
const employee = require("../controllers/employeeController")

Router.route("/employees").get(employee.index).post(employee.store)
Router.route("/employees/:id").get(employee.show).put(employee.update).patch(employee.update).delete(employee.destroy)

module.exports = Router

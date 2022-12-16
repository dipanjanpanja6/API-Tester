const tableName = "employee"
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, table => {
    table.increments("employeeId").primary()
    table.string("employeeFirstName")
    table.string("employeeLastName").notNull()
    table.string("employeeEmail").notNull()
    table.date("employeeJoiningDate").notNull()
    table.date("employeePayrollDate").notNull()
    table.string("employeeHouseNumber").notNull()
    table.string("employeeStreetNumber").notNull()
    table.string("employeeCity").notNull()
    table.string("employeeState").notNull()
    table.string("employeeZipCode").notNull()
    table.string("employeeSalary").notNull()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}

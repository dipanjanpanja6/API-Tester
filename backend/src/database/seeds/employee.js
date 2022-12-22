/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("employee").del()
  await knex("employee").insert([
    {
      employeeFirstName: "Dipanjan",
      employeeLastName: "Panja",
      employeeEmail: "hello@dipanjanpanja.in",
      employeeJoiningDate: "2022-02-02",
      employeePayrollDate: "2023-02-02",
      employeeHouseNumber: "12",
      employeeStreetNumber: "1D xx",
      employeeCity: "CUC",
      employeeState: "WB",
      employeeZipCode: "908978",
      employeeSalary: "9010",
    },
  ])
}

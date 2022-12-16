import React from "react"

const Textar = props => {
  const { text } = props
  return (
    <>
      {text.map(t => (
        <div className="divarea-2">
          <span>employeeId : {t.employeeId}</span>
          <span>employeeFirstName : {t.employeeFirstName}</span>
          <span>employeeLastName : {t.employeeLastName}</span>
          <span>employeeEmail : {t.employeeEmail}</span>
          <span>employeeJoiningDate : {t.employeeJoiningDate}</span>
          <span>employeePayrollDate : {t.employeePayrollDate}</span>
          <span>employeeHouseNumber : {t.employeeHouseNumber}</span>
          <span>employeeStreetNumber : {t.employeeStreetNumber}</span>
          <span>employeeCity : {t.employeeCity}</span>
          <span>employeeState : {t.employeeState}</span>
          <span>employeeZipCode : {t.employeeZipCode}</span>
          <span>employeeSalary : {t.employeeSalary}</span>
        </div>
      ))}
    </>
  )
}

export default Textar

import React, { useState } from "react"
import useQueryBuilder from "../hooks/useQueryBuilder"
import Accordion from "./Accordion"

const PutContent = ({ url, method, name }) => {
  const [id, setId] = useState("")
  const [text, setText] = useState(
    JSON.stringify(
      {
        employeeFirstName: "",
        employeeLastName: "",
        employeeEmail: "",
        employeeJoiningDate: "",
        employeePayrollDate: "",
        employeeHouseNumber: "",
        employeeStreetNumber: "",
        employeeCity: "",
        employeeState: "",
        employeeZipCode: "",
        employeeSalary: "",
      },
      undefined,
      3
    )
  )
  const { state, status, handleFetch } = useQueryBuilder({ url, method, id, headers: { "Content-Type": "application/json" }, body: text })

  return (
    <div className="card">
      <div className="heading">{name}</div>
      <hr />
      <Accordion method={method}>
        <div className="accordion-content lorange">
          <div>
            <div className="head">parameter : ID</div>
            <textarea className="textarea-s" onChange={e => setId(e.target.value)} />
            <div className="head">Request URL</div>
            <textarea className="textarea" readOnly defaultValue={url} />
            <div className="head">Try it out</div>
            <textarea className="textarea-l" value={text} onChange={e => setText(e.target.value)} />
            <br />
            <button className="execute" onClick={handleFetch}>
              Execute
            </button>
            <hr />
            <div className="head">Server Response</div>
            <table>
              <tbody>
                <tr>
                  <td>Code</td>
                  <td>Description</td>
                  <td>Details</td>
                </tr>
                <tr>
                  <td>{status}</td>
                  <td>{state.desc}</td>
                  <td>
                    <textarea className="textarea-m" readOnly defaultValue={state.message} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Accordion>
    </div>
  )
}

export default PutContent

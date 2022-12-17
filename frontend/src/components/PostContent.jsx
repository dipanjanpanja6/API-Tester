import React, { useState } from "react"
import useQueryBuilder from "../hooks/useQueryBuilder"
import Accordion from "./Accordion"

const PostContent = ({ url, method, name, desc }) => {
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
  const { state, status, handleFetch } = useQueryBuilder({ url, method, headers: { "Content-Type": "application/json" }, body: text })

  return (
    <>
      <div className="card">
        <div className="heading">
          {name} <span className="subheading">| {desc}</span>
        </div>
        <hr />
        <Accordion method={method}>
          <div className="accordion-content lgreen">
            <div>
              <div className="head">parameter : NONE</div>
              <div className="head">Request URL</div>
              <textarea className="textarea" defaultValue={url} readOnly />
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
                      <textarea className="textarea-m" readOnly defaultValue={state.message}></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Accordion>
      </div>
    </>
  )
}

export default PostContent

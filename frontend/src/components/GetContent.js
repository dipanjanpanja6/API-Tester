import React, { useState } from "react"
import Textar from "./Textar"

const GetContent = () => {
  const [isActive, setIsActive] = useState(false)
  const [textarea, setTextarea] = useState([])
  const [status, setStatus] = useState(100)
  const [desc, setDesc] = useState("Success")

  const handleGet = async e => {
    try {
      e.preventDefault()
      const response = await fetch(`http://localhost:3001/api/getEmployeeList`, { method: "GET" })
      const json = await response.json()
      setStatus(response.status)
      if (response.status === 200) {
        setTextarea([json.data])
        setDesc("Success")
      } else {
        setDesc("Failed")
        setTextarea([])
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className="card">
        <div className="heading">View Database</div>
        <hr></hr>
        <div className="accordion-item">
          <div className="accordion-title blue" onClick={() => setIsActive(!isActive)}>
            <div>GET</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className="accordion-content lblue">
              <div>
                <div className="head">parameter : NONE</div>

                <div className="head">Request URL</div>

                <textarea className="textarea" value="/getEmployeeList"></textarea>

                <br />

                <button className="execute" onClick={handleGet}>
                  Execute
                </button>
                <hr></hr>

                <div className="head">Server Response</div>

                <table>
                  <tr>
                    <td>Code</td>
                    <td>Description</td>
                    <td>Details</td>
                  </tr>
                  <tr>
                    <td>{status}</td>
                    <td>{desc}</td>
                    <td>
                      <div className="divarea">
                        {textarea.map(text => {
                          console.log(text)
                          return <Textar text={text} />
                        })}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default GetContent

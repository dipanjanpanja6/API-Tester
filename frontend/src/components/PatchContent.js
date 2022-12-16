import React, { useState } from "react"

const PatchContent = () => {
  const [isActive, setIsActive] = useState(false)
  const [id, setId] = useState("")
  const [text, setText] = useState("")
  const [textarea, setTextarea] = useState("")
  const [status, setStatus] = useState(100)
  const [desc, setDesc] = useState("Success")

  const handlePatch = async e => {
    try {
      e.preventDefault()
      const response = await fetch(`/api/updateEmployeeByPatch/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: text,
      })
      const json = await response.json()
      setStatus(response.status)
      if (response.status === 200) {
        setTextarea(json.message)
        setDesc("Success")
      } else {
        setDesc("Failed")
        setTextarea(json.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="card">
        <div className="heading">Updation (Using PATCH)</div>
        <hr></hr>
        <div className="accordion-item">
          <div className="accordion-title violet" onClick={() => setIsActive(!isActive)}>
            <div>PATCH</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className="accordion-content lviolet">
              <div>
                <div className="head">parameter : ID</div>
                <textarea
                  className="textarea-s"
                  onChange={e => {
                    setId(e.target.value)
                  }}></textarea>

                <div className="head">Request URL</div>

                <textarea className="textarea">/updateEmployeeByPatch/:employeeId</textarea>

                <div className="head">Try it out</div>

                <textarea className="textarea-l" value={text} onChange={e => setText(e.target.value)}></textarea>

                <br />

                <button className="execute" onClick={handlePatch}>
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
                      <textarea className="textarea-m" value={textarea}></textarea>
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

export default PatchContent

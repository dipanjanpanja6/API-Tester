import React, { useState } from "react"

const DelContent = () => {
  const [isActive, setIsActive] = useState(false)
  const [id, setId] = useState("")
  const [textarea, setTextarea] = useState("")
  const [status, setStatus] = useState(100)
  const [desc, setDesc] = useState("Success")

  const handleDel = async e => {
    try {
      e.preventDefault()
      const response = await fetch(`/api/deleteEmployee/${id}`, { method: "DELETE" })
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
        <div className="heading">Deletion</div>
        <hr></hr>
        <div className="accordion-item">
          <div className="accordion-title red" onClick={() => setIsActive(!isActive)}>
            <div>DELETE</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className="accordion-content lred">
              <div>
                <div className="head">parameter : ID</div>
                <textarea
                  className="textarea-s"
                  onChange={e => {
                    setId(e.target.value)
                  }}></textarea>

                <div className="head">Request URL</div>

                <textarea className="textarea">/deleteEmployee/:employeeId</textarea>

                <br />

                <button className="execute" onClick={handleDel}>
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

export default DelContent

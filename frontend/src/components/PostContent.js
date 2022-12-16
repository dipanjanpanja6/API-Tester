import React, { useState } from "react"

const PostContent = () => {
  const [isActive, setIsActive] = useState(false)

  const [text, setText] = useState("")
  const [textarea, setTextarea] = useState("")
  const [status, setStatus] = useState(100)
  const [desc, setDesc] = useState("Success")

  const handlePost = async e => {
    try {
      e.preventDefault()

      const response = await fetch(`/api/createEmployee`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: text,
      })

      const json = await response.json()
      setStatus(response.status)
      if (response.status === 201) {
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
        <div className="heading">Insertion</div>
        <hr></hr>
        <div className="accordion-item">
          <div className="accordion-title green" onClick={() => setIsActive(!isActive)}>
            <div>POST</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className="accordion-content lgreen">
              <div>
                <div className="head">parameter : NONE</div>

                <div className="head">Request URL</div>

                <textarea className="textarea">/createEmployee</textarea>

                <div className="head">Try it out</div>

                <textarea className="textarea-l" value={text} onChange={e => setText(e.target.value)}></textarea>

                <br />

                <button className="execute" onClick={handlePost}>
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

export default PostContent

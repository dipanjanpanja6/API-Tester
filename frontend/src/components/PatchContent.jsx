import React, { useState } from "react"
import useQueryBuilder from "../hooks/useQueryBuilder"
import Accordion from "./Accordion"

const PatchContent = ({ url, method, name, desc }) => {
  const [id, setId] = useState("")
  const [text, setText] = useState("")
  const { state, status, handleFetch } = useQueryBuilder({ url, method, id, headers: { "Content-Type": "application/json" }, body: text })

  return (
    <div className="card">
      <div className="heading">
        {name} <span className="subheading">| {desc}</span>
      </div>
      <hr />
      <Accordion method={method}>
        <div className="accordion-content lviolet">
          <div>
            <div className="head">parameter : ID</div>
            <textarea className="textarea-s" onChange={e => setId(e.target.value)} />
            <div className="head">Request URL</div>
            <textarea className="textarea" readOnly defaultValue={url} />
            <div className="head">Try it out</div>
            <textarea className="textarea-l" value={text} onChange={e => setText(e.target.value)}></textarea>
            <br />
            <button className="execute" onClick={handleFetch}>
              Execute
            </button>
            <hr />
            <div className="head">Server Response</div>
            <table>
              <table>
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
              </table>
            </table>
          </div>
        </div>
      </Accordion>
    </div>
  )
}

export default PatchContent

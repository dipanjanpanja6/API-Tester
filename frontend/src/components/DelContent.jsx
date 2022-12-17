import React, { useState } from "react"
import useQueryBuilder from "../hooks/useQueryBuilder"
import Accordion from "./Accordion"

const DelContent = ({ url, method, name }) => {
  const [id, setId] = useState("")
  const { state, status, handleFetch } = useQueryBuilder({ url, method, id })

  return (
    <div className="card">
      <div className="heading">{name}</div>
      <hr />
      <Accordion method={method}>
        <div className="accordion-content lred">
          <div>
            <div className="head">parameter : ID</div>
            <textarea className="textarea-s" onChange={e => setId(e.target.value)} />
            <div className="head">Request URL</div>
            <textarea className="textarea" readOnly defaultValue={url} />
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

export default DelContent

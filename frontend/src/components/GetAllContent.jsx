import React from "react"
import useQueryBuilder from "../hooks/useQueryBuilder"
import Accordion from "./Accordion"

const GetContent = ({ name, url, method }) => {
  const { state, status, handleFetch } = useQueryBuilder({ url, method })

  return (
    <div className="card">
      <div className="heading">{name}</div>
      <hr />
      <Accordion method={method}>
        <div className="accordion-content lblue">
          <div>
            <div className="head">parameter : NONE</div>
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
                    <textarea className="divarea" readOnly defaultValue={state.data ? JSON.stringify(state.data, undefined, 3) : ""} />
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

export default GetContent

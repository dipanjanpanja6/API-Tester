import React, { useState } from "react"
import { getColor } from "../utils"

export default function Accordion({ children, method }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div className={`accordion-title ${getColor(method)}`} onClick={() => setIsActive(!isActive)}>
        <div>{method}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && children}
    </div>
  )
}

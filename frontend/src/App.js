import React from "react"
import "./App.styles.css"
import DelContent from "./components/DelContent"
import GetContent from "./components/GetContent"
import GetAllContent from "./components/GetAllContent"
import { Navbar } from "./components/Navbar"
import PatchContent from "./components/PatchContent"
import PostContent from "./components/PostContent"
import PutContent from "./components/PutContent"
import { methods } from "./utils"

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <GetAllContent {...methods[0]} />
      <GetContent {...methods[1]} />
      <PostContent {...methods[2]} />
      <PutContent {...methods[3]} />
      <PatchContent {...methods[4]} />
      <DelContent {...methods[5]} />
    </div>
  </>
)

export default App

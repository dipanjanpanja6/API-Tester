import React from "react";
// import Accordion from './components/Accordion';
// import Collection from './components/Collection';
import DelContent from "./components/DelContent";
import GetContent from "./components/GetContent";
import { Navbar } from "./components/Navbar";
import PatchContent from "./components/PatchContent";
import PostContent from "./components/PostContent";
import PutContent from "./components/PutContent";
// import { accordionData } from './components/content';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <GetContent />
        <PostContent />
        <PutContent />
        <PatchContent />
        <DelContent />
      </div>
    </div>
  );
};

export default App;

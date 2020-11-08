import React from "react";
import Navbar from "./compotents/Navbar";
import BlogList from "./compotents/BlogList";
import LatestCard from "./compotents/LatestCard";

function App() {
  return (
    <div>
      <Navbar/>

      <div className="content_container">
        <BlogList/>

        <LatestCard/>
      </div>
    </div>
  );
}

export default App;

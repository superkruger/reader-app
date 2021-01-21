import React from "react";
import { ReactReader } from "react-reader";

function App() {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {" "}
      <ReactReader
        url={"/alice.epub"}
        title={"Alice in wonderland"}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={epubcifi => console.log(epubcifi)}
      />
    </div>
  );
}

export default App;

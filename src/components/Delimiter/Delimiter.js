import React, { useState } from "react";
import _ from "lodash";
import "./Delimiter.css";

function Delimiter() {
  const [columnData, setColumnData] = useState("");
  const [delimitedData, setDelimitedData] = useState("");

  const handleConvert = () => {
    let newDelimitedData = columnData.replace(/\n/g, ", ");
    setDelimitedData(newDelimitedData);
  };

  const alertMaintenance = () => {
    alert("This is under maintenance, Please come back again. Thanks!");
  };

  const reset = () => {
    setDelimitedData("");
    setColumnData("");
  };

  return (
    <div className="delimiter">
      <div className="column-data">
        <h1 className="delimiter--title">Column Data Here...</h1>
        <div className="textarea">
          <textarea
            value={columnData}
            onChange={e => setColumnData(e.target.value)}
            rows="20"
            cols="80"
          ></textarea>
        </div>
      </div>
      <div className="functions">
        <button onClick={alertMaintenance} className="change--seperator">
          <span className="marker">,</span>
          <span className="caret caret-down"></span>
        </button>
        <button onClick={handleConvert} className="right">
          <i
            style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
            class="fa fa-angle-right"
          ></i>
        </button>
        <button onClick={alertMaintenance} className="left">
          <i
            style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
            class="fa fa-angle-left"
          ></i>
        </button>
        <button onClick={reset} className="ekis">
          <i
            style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
            class="fa fa-times"
          ></i>
        </button>
      </div>
      <div className="column-data">
        <h1 className="delimiter--title">Delimited Data Here...</h1>
        <div className="textarea">
          <textarea
            value={delimitedData}
            onChange={e => setDelimitedData(e.target.value)}
            rows="20"
            cols="80"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Delimiter;

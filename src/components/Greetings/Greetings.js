import React from "react";
import "./Greetings.css";

function Greetings() {
  return (
    <div className="greetings">
      <h1>Free Comma Separating Tool</h1>
      <p>
        Do you often need to take a spreadsheet of data and convert to a
        comma-delimited list?
      </p>
      <p>
        Be it for taking a list of zip codes or names to make an SQL query, or
        to take data from a CSV and be able to paste into an array. At delim.co
        we make that just a little easier.
      </p>
      <p>
        Enter your non-delimited data on the left, hit the button, and boom,
        separated data on the right. Special configs are below if the defaults
        aren't what you need!
      </p>
    </div>
  );
}

export default Greetings;

//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";
var dayT = "";
var col = {
  color: "green"
};
var currentT = new Date(2020, 1, 1, 1).getHours();
if (currentT > 0 && currentT < 12) {
  dayT = "Good morning ";
  col.color = "green";
} else if (currentT > 12 && currentT < 18) {
  dayT = "Good Afternoon";
  col.color = "yellow";
} else {
  dayT = "Good Evening ";
  col.color = "red";
}
ReactDom.render(
  <h1 className="heading" style={col}>
    {" "}
    {dayT}
  </h1>,

  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import classes from "../Menu/Menu.module.css";

const menu = (props) => (
  <div onClick={props.clicked} className={classes.Menu}>
    {" "}
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default menu;

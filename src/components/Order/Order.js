import react from "react";
import React from "react";
import classes from "./Order.module.css";

const order = (props) => (
  <div className={classes.Order}>
    <p>Ingredietns: Salad ()</p>
    <p>
      Price: <strong>USD </strong>
    </p>
  </div>
);

export default order;

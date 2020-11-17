import React from "react";

import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/" active>
      {" "}
      Checkout
    </NavigationItem>
  </ul>
);

export default navigationItems;

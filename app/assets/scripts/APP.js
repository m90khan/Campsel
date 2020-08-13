import "../styles/main.scss";
import "../scripts/modules/cursor";
import "lazysizes";
import Navigation from "../scripts/modules/navigation";
import TourPackage from "../scripts/modules/tourPackage";
import stickyHeader from "../scripts/modules/stickyHeader";

import ClientArea from "./modules/ClientArea";

// Testing React Integration
import React from "react";
import ReactDOM from "react-dom";
import Card from "./modules/reactCard";
ReactDOM.render(<Card />, document.querySelector("#react-test"));

new ClientArea();
const navMenu = new Navigation();
new stickyHeader();
new TourPackage(document.querySelectorAll(".package"));
new TourPackage(document.querySelectorAll(".feature"));
if (module.hot) {
  module.hot.accept();
}

import "../styles/main.scss";
import "../scripts/modules/cursor";
import "lazysizes";
// import "./modules/animation";
import "./modules/homeIntro";
import Navigation from "../scripts/modules/navigation";
import TourPackage from "../scripts/modules/tourPackage";
import stickyHeader from "../scripts/modules/stickyHeader";

new Navigation();
new stickyHeader();
new TourPackage(document.querySelectorAll(".package"));
new TourPackage(document.querySelectorAll(".feature"));
if (module.hot) {
  module.hot.accept();
}

// Testing React Integration
/*
* React is integrated . help later when scaling 
 

/*
 Topic: to implement AWS Lamda for later  
*test is complete wit netlify
import ClientArea from "./modules/ClientArea";

new ClientArea();

*/

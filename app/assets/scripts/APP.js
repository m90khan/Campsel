import "../styles/main.scss";
import "../scripts/modules/cursor";
import "lazysizes";
import Navigation from "../scripts/modules/navigation";
import TourPackage from "../scripts/modules/tourPackage";
import stickyHeader from "../scripts/modules/stickyHeader";
const navMenu = new Navigation();
new stickyHeader();
new TourPackage(document.querySelectorAll(".package"));
new TourPackage(document.querySelectorAll(".feature"));
if (module.hot) {
  module.hot.accept();
}

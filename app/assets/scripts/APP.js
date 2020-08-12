import "../styles/main.scss";
import "../scripts/modules/cursor";
import Navigation from "../scripts/modules/navigation";
import TourPackage from "../scripts/modules/tourPackage";
const navMenu = new Navigation();
new TourPackage(document.querySelectorAll(".package"));
new TourPackage(document.querySelectorAll(".feature"));
if (module.hot) {
  module.hot.accept();
}

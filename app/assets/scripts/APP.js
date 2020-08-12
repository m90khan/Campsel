import "../styles/main.scss";
import Cursor from "../scripts/modules/cursor";
import Navigation from "../scripts/modules/navigation";

const cursorCircle = new Cursor();
const navMenu = new Navigation();
if (module.hot) {
  module.hot.accept();
}

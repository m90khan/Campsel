// Cursor eevent
const mouse = document.querySelector(".cursor");
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
window.addEventListener("mousemove", cursor);

class Cursor {
  constructor(cursor) {}
}

export default Cursor;

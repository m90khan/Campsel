const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header-menu");

burger.addEventListener("click", (e) => {
  const child1 = burger.children[0];
  const child2 = burger.children[1];

  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    child1.style.transform = "rotate(45deg)";
    child2.style.transform = "rotate(-45deg)";

    child1.style.background = "black";
    child1.style.top = "0.5rem";
    child2.style.background = "black";
    burger.style.zIndex = 300;

    menu.style.clipPath = "circle(200% at 100% -50%)";
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    child1.style.transform = "rotate(0deg)";
    child2.style.transform = "rotate(0deg)";
    menu.style.clipPath = "circle(50px at 100% -50%)";
    child1.style.top = "0rem";

    child1.style.background = "white";
    child2.style.background = "white";
    document.body.classList.remove("hide");
  }
});

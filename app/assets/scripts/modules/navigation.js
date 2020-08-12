// typical import
import gsap from "gsap";

class Navigation {
  constructor(burger, menu) {
    this.burger = document.querySelector(".header__burger");
    this.menu = document.querySelector(".header-menu");
    this.events();
  }

  events() {
    this.burger.addEventListener("click", this.menuToggle);
  }
  menuToggle(e) {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      gsap.to(".header__burger--line1", 0.5, {
        rotate: "45",
        y: 4,
        background: "black",
      });
      gsap.to(".header__burger--line2", 0.5, {
        rotate: "-45",
        y: -2,
        background: "black",
      });
      gsap.to(".header__burger", { zIndex: 400 });
      gsap.to(".header-menu", 1, { clipPath: "circle(200% at 100% -10%)" });
      document.body.classList.add("hide");
    } else {
      e.target.classList.remove("active");
      gsap.to(".header__burger--line1", 0.5, {
        rotate: "0",
        y: 0,
        background: "white",
      });
      gsap.to(".header__burger--line2", 0.5, {
        rotate: "-0",
        y: 0,
        background: "white",
      });
      gsap.to(".header-menu", 1, { clipPath: "circle(50px at 100% -10%)" });
      document.body.classList.remove("hide");
    }
  }
}
export default Navigation;
// const burger = document.querySelector(".header__burger");
// const menu = document.querySelector(".header-menu");

// burger.addEventListener("click", (e) => {
//   if (!e.target.classList.contains("active")) {
//     e.target.classList.add("active");
//     gsap.to(".header__burger--line1", 0.5, {
//       rotate: "45",
//       y: 5,
//       background: "black",
//     });
//     gsap.to(".header__burger--line2", 0.5, {
//       rotate: "-45",
//       y: -2,
//       background: "black",
//     });
//     gsap.to(".header-logo", { zIndex: 400 });
//     gsap.to(".header-menu", 1, { clipPath: "circle(200% at 100% -10%)" });
//     document.body.classList.add("hide");
//   } else {
//     e.target.classList.remove("active");
//     gsap.to(".header__burger--line1", 0.5, {
//       rotate: "0",
//       y: 0,
//       background: "white",
//     });
//     gsap.to(".header__burger--line2", 0.5, {
//       rotate: "-0",
//       y: 0,
//       background: "white",
//     });
//     gsap.to(".header-menu", 1, { clipPath: "circle(50px at 100% -10%)" });
//     document.body.classList.remove("hide");
//   }
// });

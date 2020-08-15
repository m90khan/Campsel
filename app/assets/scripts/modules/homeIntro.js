import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, TextPlugin, ScrollTrigger);

const t1 = gsap.timeline({ delay: 0.5 });

(function userEffect() {
  t1.to(".hero__slide__heading", {
    duration: 3,
    text: "  Let the Travel Begin ...",
    opacity: 1,
    display: "none",
  })
    .to(".hero__slide__logo", {
      duration: 1.5,
      top: "-20vh",
      left: "2%",
      ease: "power4.in",
      scale: 0,
    })
    .to(
      ".hero__slide--1",
      {
        duration: 0.5,
        y: "-50vh",
        display: "none",
        ease: "power4.in",
      },
      "-=1"
    )
    .to(
      ".hero__slide--2",
      {
        duration: 0.5,
        y: "50vh",
        display: "none",
        ease: "power4.in",
      },
      "<"
    )
    .to(".intro", { display: "none" })
    .fromTo(".section-header", { opacity: 0 }, { opacity: 1 });

  // .kill(".section-header", "x,y");

  function killme() {
    t1.kill(null, "x,y");
  }
})();

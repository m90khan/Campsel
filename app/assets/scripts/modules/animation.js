// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { TextPlugin } from "gsap/TextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(MotionPathPlugin, TextPlugin, ScrollTrigger);

// const box = document.querySelectorAll(".box");

// const t1 = gsap.timeline();
// const t1 = gsap.timeline({
//   delay: 0.5,
//   scrollTrigger: {
//     trigger: box,
//     markers: true,
//     start: "top 75%", //when top of herman passes 75% viewport height
//     end: "bottom 25%", //when bottom of herman passes 25% viewport height
//     pin: true,
//     // events : onEnter onLeave onEnterBack onLeaveBack
//     toggleActions: "play none none none",
//     //options: play, pause, resume, reset, restart, complete, reverse,none
//     // other actions: complete reverse none
//   },
// });

// (function userEffect() {
//   let width = window.innerWidth;
//   let speed = 350; //pixels per second
//   let endX = width - 500;

//   let circumference =
//     document.querySelector("#wheel1").getBBox().width * Math.PI;
//   let rotation = (endX / circumference) * 360;
//   let duration = endX / speed;
//   let ease = "sine.inOut";

//   let tl = gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: ".carWrapper",
//         start: "top 50%",
//         end: "bottom 50%",
//         markers: true,
//         scrub: 1,
//         pin: true,
//         pinSpacing: true,
//       },
//     })
//     .to("svg", { duration: duration, x: endX, ease: ease })
//     .to(
//       "#wheel1, #wheel2",
//       {
//         duration: duration,
//         rotation: rotation,
//         transformOrigin: "50% 50%",
//         ease: ease,
//       },
//       0
//     );
//*text stroke
//   t1.fromTo(
//     ".test-stroke-1",
//     {
//       scale: 1,
//       xPercent: -10,
//     },
//     {
//       scale: 2,
//       xPercent: 50,
//     }
//   );
//   t1.to(".test-stroke-span", {
//     duration: 4,
//     text: " is so much fun you should try it some time!",
//   })
//     .to(".test-stroke", { color: "yellow" })
//     .set(".test-stroke", { text: "I am done" });
//   t1.to(
//     ".box",
//     {
//       duration: 1,
//       y: -200,
//       stagger: 0.25,
//       backgroundColor: "green",
//     },
//     "+=1"
//   );
// * Stagger
//   stagger: {
//     amount: 2,
//     from: "center",
//     grid: "auto",
//     onComplete: myFunction //define callbacks inside the stagger to make them apply to each sub-tween
//   }
// })();

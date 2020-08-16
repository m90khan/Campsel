<br />
<p align="center">
  <a href="https://www.thewebsitekitchen.com">
    <img src="./app\assets\images\svg\bonfire.svg" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Campsel | We arrange your Tours  </h3>

  <p align="center">
Visit an adventurous location for yoru next trip <br />
    <a href="m90khan@gmail.com"><strong>Contact Me</strong></a>
    <br />
    <br />
    <a href="https://dazzling-mclean-a17029.netlify.app/">View Demo</a>
    
   </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
- [Process](#process)
- [Skills](#skills)
- [Code Snippet](#code)
- [Contact](#Contact)

---

### About the Project

Live: https://dazzling-mclean-a17029.netlify.app/
<img src="./app\assets\images\campsel.gif">

#### Process

- Setup environment including webpack
- Implementation of HTML structure
- Applied componenet based styling
- GSAP is used for Animation
- create a seperate div for the cursor. then assign the e.pageY + "px" and e.pageX + "px" to it so to follow the actual cursor
- Js is implemented in module-based OOP
- Setup process with netlify to host the site. including the build process
- Aws function test is successful.

---

### Skills

[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][youtube]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][youtube]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][youtube]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][youtube]
[<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][youtube]
[<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />][youtube]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][youtube]
[<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][youtube]
[<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][youtube]

---

### Code Snippet

```javascript
import throttle from "lodash/throttle";
import debounce from "lodash/debounce";
class TourPackage {
  constructor(query) {
    this.revealPackages = query;
    this.hideInitial();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.windowHeight = window.innerHeight;
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.windowHeight = window.innerHeight;
      }, 333)
    );
  }
  calcCaller() {
    this.revealPackages.forEach((el) => {
      if (el.isVisible == false) {
        this.calculateScroll(el);
      }
    });
  }
  calculateScroll(el) {
    if (window.scrollY + this.windowHeight > el.offsetTop) {
      let scrollPercent =
        (el.getBoundingClientRect().y / this.windowHeight) * 100;
      if (scrollPercent < 70) {
        let className = 0;
        this.GenerateHTML(el, className);
        el.classList.add("package__reveal--visible");

        el.isVisible = true;
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }
  hideInitial() {
    this.revealPackages.forEach((el) => {
      el.classList.add("package__reveal");
      el.isVisible = false;
    });
    this.revealPackages[this.revealPackages.length - 1].isLastItem = true;
  }
  GenerateHTML(el, className) {
    const arr = [];
    if (el.classList.contains("feature")) {
      console.log(el, className);
    }
  }
}

export default TourPackage;
```

---

### Connect with me:

[<img align="left" alt="https://thewebsitekitchen.com" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][website]

[<img align="left" alt="thewebsitekitchen | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]

[<img align="left" alt="Thewebsitekitc1 | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]
[<img align="left" alt="khanmohsinx | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="thewebsitekitchen | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]

---

<img src="./app\assets\images\campsel.jpg">

[website]: https://thewebsitekitchen.com
[twitter]: https://twitter.com/Thewebsitekitc1
[youtube]: https://www.youtube.com/channel/UCYPLumL8eNsaej8f5Z2r1Rg
[instagram]: https://www.instagram.com/thewebsitekitchen/
[linkedin]: https://linkedin.com/in/khanmohsinx

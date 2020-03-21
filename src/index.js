import "./styles.scss";
import { TweenMax } from "gsap";

const accordionTrigger = document.getElementsByClassName("accordionTrigger");

// accordion toggle
for (let i = 0; i < accordionTrigger.length; i++) {
  accordionTrigger[i].addEventListener("click", function() {
    accordionTrigger[i].classList.toggle("is-active");
    accordion();
  });
}
function accordion() {
  for (let i = 0; i < accordionTrigger.length; i++) {
    let accordionItem = accordionTrigger[i].nextElementSibling;
    if (accordionTrigger[i].classList.contains("is-active")) {
      accordionToggle("open", accordionItem);
    } else {
      accordionToggle("close", accordionItem);
    }
  }
}
// accordion animation
const accordionToggle = (mode, accordionItem) => {
  if (mode === "open") {
    TweenMax.to(accordionItem, 0.3, {
      height: "auto"
    });
  }
  if (mode === "close") {
    TweenMax.to(accordionItem, 0.3, {
      height: "0"
    });
  }
};

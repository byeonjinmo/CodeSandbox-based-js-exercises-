import "./styles.css";

const body = document.querySelector("body");
const h1 = document.querySelector("body h1");
function handleWindowSize() {
  const width = window.innerWidth;
  if (width >= 700) {
    body.className = "sm";
    h1.classList.add("active");
  } else if (width < 700 && width >= 400) {
    body.className = "md";
    h1.classList.add("active");
  } else {
    body.className = "lr";
    h1.classList.add("active");
  }
}

window.addEventListener("resize", handleWindowSize);

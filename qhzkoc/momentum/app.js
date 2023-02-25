

const body = document.querySelector("body");
const h1 = document.querySelector("body h1");
function handleWindowSize() {
  const width = window.innerWidth;
  if (width >= 1000) {
    body.className = "sm";
    h1.classList.add("active");
  } else if (width < 1000 && width >= 800) {
    body.className = "md";
    h1.classList.add("active");
  } else {
    body.className = "lr";
    h1.classList.add("active");
  }
}

window.addEventListener("resize", handleWindowSize);

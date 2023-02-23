import "./styles.css";
const text = document.querySelector("#app h1:first-child");
const colors = ["blue", "black", "red", "green", "brown"];

const superEventHandler = {
  handleMouseEnter: function () {
    text.innerText = "mouse is here!";
    text.style.color = colors[0];
  },
  handleMouseLeave: function () {
    text.innerText = "mouse is gone!";
    text.style.color = colors[2];
  },
  handleWindowResize: function () {
    text.style.color = colors[3];
    text.innerText = "You just resized!";
  }
};

text.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
text.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
text.addEventListener("contextmenu", (event) => {
  text.innerText = "Right click!";
  text.style.color = colors[4];
});

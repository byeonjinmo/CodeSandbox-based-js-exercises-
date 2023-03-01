import "./styles.css";
const clockTitle = document.querySelector(".js-clock");
const clock = setInterval(function () {
  const xmas = new Date("December 25 2023 00:00:00 GMT+0900").getTime();
  const now = new Date().getTime();
  const distance = xmas - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000));
  const seconds1 = seconds.padStart(2, "0");
  const minutes1 = minutes.padStart(2, "0");
  const hours1 = hours.padStart(2, "0");

  String(new Date().getHours()).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours1}h ${minutes1}m ${seconds1}s`;
  if (distance < 0) {
    clearInterval(clock);
    clockTitle.innerText = "IT`S D-DAY!!";
  }
}, 1000);

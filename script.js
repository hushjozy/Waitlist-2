let countDownDate = new Date("May 14, 2023 00:00:00").getTime();
let x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  let countdown = document.getElementById("countdown-timer");
    if (distance <= 3600000) {
    countdown.classList.add("smaller");
  } else {
    countdown.classList.remove("smaller");
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
  }
}, 1000);

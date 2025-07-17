let bulb = document.getElementById('bulb');
let isOn = false;

function turnOn() {
  bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  isOn = true;
}

function turnOff() {
  bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  isOn = false;
}

function toggleBulb() {
  if (isOn) {
    turnOff();
  } else {
    turnOn();
  }
}

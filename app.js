const animals = ['tortoise', 'turtle'];

var animal;
var score=0;

window.onload = function () {
  createButton('Tortoise');
  createButton('Turtle');
  updateScore();
  updateImage();
  disableButtons();
  timerUpdater();
}


function updateImage() {
  animal = getRandomElement(animals);
  changeImage(findImage(animal));
}


function createButton(val) {
  // console.log(val)
  var button = document.createElement("input");
  button.type = "button";
  button.value = val;
  button.name=val.toLowerCase();
  // button.onclick = funcbtns
  var img = document.getElementById("btns");
  img.appendChild(button);
  document.getElementById("btns").onclick = function(e) {
    buttonEvent(e)
  };
  // document.getElementById("btns").onclick = buttonEvent(e);
}

function getRandomElement(array) {
  return rand = array[Math.floor(Math.random() * array.length)];
}

function findImage(val) {
  var src = 'https://loremflickr.com/320/240/' + val + '?random=' + new Date().getMilliseconds();
  console.log(src);
  return src;
}

function changeImage(src) {
  document.getElementById("img").src=src;
}

function buttonEvent(e) {
  if (e.target.name === animal) {
    score++;
  }
  else {
    score--;
  }
  updateScore();
  updateImage();
}

function updateScore() {
  document.getElementById('score').innerHTML=score;
}

function disableButtons() {
  document.getElementById("btns").disabled = true;
}

function timerUpdater() {
  var countDownDate = 10000000;
  console.log(countDownDate);
  function tick() {
    document.getElementById("timer").innerHTML = countDownDate + "s ";
    console.log(countDownDate);
    countDownDate--;
    if( countDownDate > 0 ) {
      setTimeout(tick, 1000);
    } else {
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }
  tick();
}

function timedOut() {
  document.getElementById("timer").innerHTML = "EXPIRED";
}

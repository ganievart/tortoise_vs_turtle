const animals = ['tortoise', 'turtle'];

let animal;
let score=0;

$(document).ready(function(){
  updateScore();
  updateImage();

  $( ".button" ).click(function() {
    buttonEvent($(this))
  });

  updateTimer();
});

let promise = new Promise((resolve, reject) => {
   updateImage();
});


let updateImage = () => {
  animal = getRandomElement(animals);
  changeImage(findImage(animal));
}

let getRandomElement = array => {
  return rand = array[Math.floor(Math.random() * array.length)];
}

let findImage = val => {
  var src = 'https://loremflickr.com/320/240/' + val + '?random=' + new Date().getMilliseconds();
  console.log(src);
  return src;
}

let changeImage = src => {
  $("#img").attr("src", src);

}

let buttonEvent = e => {
  if ($(e).val() === animal) {
    score++;
  }
  else {
    score--;
  }
  updateScore();
  updateImage();
}

let updateScore = () => {
  $("#score").html(score);
}

let disableButtons = () => {
  // not working
  // document.getElementById("btns").disabled = true;
}

let updateTimer = () => {
  var countDownDate = 10000000;
  function tick() {
    $("#timer").html(countDownDate + "s ");
    countDownDate--;
    if( countDownDate > 0 ) {
      setTimeout(tick, 1000);
    } else {
      $("#timer").html(countDownDate + "EXPIRED");
    }
  }
  tick();
}

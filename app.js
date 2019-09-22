let app = {
  animals : ['tortoise', 'turtle'],
  score : 0,
  key: '868a9f43d8f17114fa4933992e882734',
  secret: 'da0b36527464b3e1',
  flickrApiUrl: 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'
};

$(document).ready(function() {
  app.tortoises = test(app.animals[0]);
  setTimeout(function() {
    app.turtles = test(app.animals[1]);
  }, 1000);

  updateScore();
  loadImage(app.tortoises);
  $(".button").click(function() {
    buttonEvent($(this))
  });
  updateTimer();
});

let updateScore = () => {
  $("#score").html(app.score);
}

let test = animal => {
  arr = [];
  $.getJSON(app.flickrApiUrl, {
    tags: animal,
    tagmode: "any",
    format: "json"
  }).done(function (result, status, xhr) {
    $.each(result.items, function (i, item) {
      arr.push(item.media.m);
    });
  });
  return arr;
}

let loadImage = (arrayImages) => {
  $(".button").hide();
  // animals = app.tortoises;
  console.log(arrayImages.lenght);
  let src = getRandomElement(app.tortoises);
  // console.app.tortoises;


  console.log(src);

  $("#img").attr("src", src);

  $('#img').on('load', () => $(".button").show());
}

let getRandomElement = array => {
  console.log(array);
  console.log(Object.keys(array).length);
  return rand = array[Math.floor(Math.random() * array.length)];
}

let buttonEvent = e => {
  if ($(e).val() === app.animal) {
    app.score++;
  }
  else {
    app.score--;
  }
  updateScore();
  loadImage();
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

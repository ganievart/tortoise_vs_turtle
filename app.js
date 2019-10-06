let app = {
  animals : ['tortoise', 'turtle'],
  flickr_result : [],
  test_promise: [],
  score : 0,
  key: '868a9f43d8f17114fa4933992e882734', //not used
  secret: 'da0b36527464b3e1', // not used
  flickrApiUrl: 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'
};

$(document).ready(function() {
  console.log(app.animals);

  flickr_result = new Promise((resolve) => {
    findOnFlickrByTag(resolve, app.animals[0]);
  });

  flickr_result.then(function(value) {
    console.log(value);
    updateScore();
    loadImage(value);
  });

  $(".button").click(function() {
    buttonEvent($(this))
  });
  updateTimer();
});

let updateScore = () => {
  $("#score").html(app.score);
}

let findOnFlickrByTag = (resolve, animal) => {
  arr = [];
  $.getJSON(app.flickrApiUrl, {
    tags: animal,
    tagmode: "any",
    format: "json"
  }).then(function (result) {
    $.each(result.items, function (i, item) {
      arr.push(item.media.m);
    });
    resolve(arr);
  });

}

let loadImage = (arrayImages) => {
  $(".button").hide();

  let src = getRandomElement(arrayImages);

  $("#img").attr("src", src);

  $('#img').on('load', () => $(".button").show());
}

let getRandomElement = array => {
  console.log('getRandomElement length:' + array.length);
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

const app = {
  animals: ['tortoise', 'turtle'],
  foundOnflickrAnimals: new Map(),
  score: 0,
  flickrApiUrl: 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'
};

$(document).ready(function () {
  console.log('Be ready to play with folowing animals:' + app.animals);

  let promises = [];

  app.animals.forEach(item => {
    promises.push(new Promise((resolve) => {
      findOnFlickrByTag(resolve, item);
    }))
  });

  console.log(promises);

  Promise.all(promises).then(value => {
    app.foundOnflickrAnimals = value;
    let randomImage = getRandomImage(app.foundOnflickrAnimals);
    console.log(randomImage);
    updateScore();
    loadImage(randomImage);
  }).catch((e) => {
    //emtpy 
  });

  $(".button").click(function () {
    buttonEvent($(this))
  });
  updateTimer();

});

let getRandomImage = array => {
  console.log('Going to get random element, array.lenght=' + array.length);
  let randomMap = array[Math.floor(Math.random() * array.length)];
  let keys = Array.from(randomMap.keys());
  let key = keys[Math.floor(Math.random() * keys.length)];
  app.currentAnimal = randomMap.get(key);
  console.log(app.currentAnimal);
  return key;
}

let loadImage = (imageSrc) => {
  $(".button").hide();
  console.log('found result ' + imageSrc);
  $("#img").attr("src", imageSrc);
  $('#img').on('load', () => $(".button").show());
}

let buttonEvent = e => {
  if ($(e).val().toUpperCase() === app.currentAnimal.toUpperCase()) {
    app.score++;
  }
  else {
    app.score--;
  }
  updateScore();
  let randomImage = getRandomImage(app.foundOnflickrAnimals);
  loadImage(randomImage);
}

let updateScore = () => {
  $("#score").html(app.score);
}

let findOnFlickrByTag = (resolve, animal) => {
  let temp_map = new Map();
  $.getJSON(app.flickrApiUrl, {
    tags: animal,
    tagmode: "any",
    format: "json"
  }).then(function (result) {
    $.each(result.items, function (i, item) {
      temp_map.set(item.media.m, animal);
    });
    resolve(temp_map);
  });

}

let updateTimer = () => {
  var countDownDate = 100000;
  function tick() {
    $("#timer").html(countDownDate + "s ");
    countDownDate--;
    if (countDownDate > 0) {
      setTimeout(tick, 1000);
    } else {
      $("#timer").html(countDownDate + "EXPIRED");
    }
  }
  tick();
}

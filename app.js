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
    console.log(value.length);   

    value.forEach(animalMap => {
      console.log(animalMap)
    });

    console.log(app.foundOnflickrAnimals);

    updateScore();
    loadImage(value);
  }).catch((e) => {
    //emtpy 
  });

  $(".button").click(function () {
    buttonEvent($(this))
  });
  updateTimer();
});

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

let loadImage = (found_result) => {
  $(".button").hide();

  console.log('found result' + found_result.getJSON);
  let src = getRandomElement(found_result);

  $("#img").attr("src", src);

  $('#img').on('load', () => $(".button").show());
}

let getRandomElement = array => {
  console.log('Going to get random element, array.lenght=' + array.length);
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
    if (countDownDate > 0) {
      setTimeout(tick, 1000);
    } else {
      $("#timer").html(countDownDate + "EXPIRED");
    }
  }
  tick();
}

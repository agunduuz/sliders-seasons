let models = [
  { name: 'Spring', image: './assets/img/spring.jpg' },
  { name: 'Summer', image: './assets/img/summer.jpg' },
  { name: 'Winter', image: './assets/img/winter.jpg' },
  { name: 'Autumn', image: './assets/img/autumn.jpg' },
];

let index = 0;
let slideCount = models.length;
let settings = {
  duration: '4000',
  random: true,
};
let interval;

init(settings);

document.querySelector('#leftArrow').addEventListener('click', function () {
  index--;
  showSlide(index);
});
document.querySelector('#rightArrow').addEventListener('click', function () {
  index++;
  showSlide(index);
  console.log(index);
});

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slideCount - 1;
  }
  if (i >= slideCount) {
    index = 0;
  }
  document.querySelector('h1').textContent = models[index].name;
  document.querySelector('.images').setAttribute('src', models[index].image);
}

document.querySelectorAll('i').forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    clearInterval(interval);
  });
});
document.querySelectorAll('i').forEach(function (item) {
  item.addEventListener('mouseleave', function () {
    init(settings);
  });
});

function init(s) {
  let prev;
  interval = setInterval(() => {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);
      prev = index;
    } else {
      if (slideCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

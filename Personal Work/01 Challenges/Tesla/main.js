const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 6000;
let slideInterval;

const nextSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for next slide
  if (current.nextElementSibling) {
    //add current to next sibbling
    current.nextElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for next slide
  if (current.previousElementSibling) {
    //add current to previous sibbling
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//button events
next.addEventListener("click", (e) => {
  nextSlide();
});
prev.addEventListener("click", (e) => {
  prevSlide();
});

//autoslide
if (auto) {
  //run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

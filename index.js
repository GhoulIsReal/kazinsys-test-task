let dropdown = document.querySelector(".dropdown-holder");

dropdown.addEventListener("mouseenter", (e) => {
  if (dropdown.classList.contains("closed")) {
    dropdown.classList.remove("closed");
  }
});

dropdown.addEventListener("mouseleave", (e) => {
  if (!dropdown.classList.contains("closed")) {
    dropdown.classList.add("closed");
  }
});

const carousel = document.getElementsByClassName("carousel");
const newsSlide = carousel[1].querySelector(".news-slide");
const allSlides = carousel[1].querySelectorAll(".news-slide");
const leftButton = document.getElementsByClassName("carousel__button--prev");
const rightButton = document.getElementsByClassName("carousel__button--next");
const dots = document.getElementsByClassName("dot")

const carouselWidth = carousel[1].offsetWidth;
const slideWidth = newsSlide.offsetWidth;
const slideStyle = newsSlide.currentStyle || window.getComputedStyle(newsSlide);
const slideMarginRight = Number(slideStyle.marginRight.match(/\d+/g)[0]);

const slidesCount = carousel[1].querySelectorAll(".news-slide").length;
let blurredSlide = 4;
let offset = 0;

const handleNewsCarousel = () => {
  const maxX = -((slideWidth + 25) * (slidesCount - 3));
  allSlides[3].style.opacity = 0.3;
  dots[3].classList.add("green");
  leftButton[1].addEventListener("click", function () {
    if (offset !== 0) {
      offset += slideWidth + slideMarginRight;
      carousel[1].style.transform = `translateX(${offset}px)`;
      if (blurredSlide < slidesCount && blurredSlide > 4) {
        allSlides[blurredSlide].style.opacity = 1;
        allSlides[blurredSlide - 1].style.opacity = 0.3;
        blurredSlide -= 1;
      } else if (blurredSlide === slidesCount) {
        allSlides[blurredSlide - 1].style.opacity = 0.3;
        blurredSlide-=1;
      } else {
        allSlides[blurredSlide - 1].style.opacity = 0.3;
        dots[4].classList.remove("green");
        dots[3].classList.add("green");
      }
    }
  });

  rightButton[1].addEventListener("click", function () {
    if (offset !== -Math.abs(maxX)) {
      offset -= slideWidth + slideMarginRight;
      carousel[1].style.transform = `translateX(${offset}px)`;
      if (blurredSlide < slidesCount) {
        allSlides[blurredSlide].style.opacity = 0.3;
        allSlides[blurredSlide - 1].style.opacity = 1;
        blurredSlide += 1;
      } else if (blurredSlide === slidesCount) {
        allSlides[slidesCount - 1].style.opacity = 1;
        dots[3].classList.remove("green");
        dots[4].classList.add("green");
      }
    }
  });
};

handleNewsCarousel();

!(function (d) {
  let itemClassName = "slide";
  let dotClassName = "dot";
  (items = d.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0),
    (moving = true);

  dot = 0;
  function setInitialClasses() {
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
    dots[0].classList.add("green");
  }

  function setEventListeners() {
    rightButton[0].addEventListener("click", moveNext);
    leftButton[0].addEventListener("click", movePrev);
  }

  function moveNext() {
    if (!moving) {
      if (slide === totalItems - 1) {
        slide = 0;
        dot = 0;
      } else {
        slide++;
        dot++;
      }

      moveCarouselTo(slide);
    }
  }

  function movePrev() {
    if (!moving) {
      if (slide === 0) {
        slide = totalItems - 1;
        dot = totalItems - 1;
      } else {
        slide--;
        dot--;
      }

      moveCarouselTo(slide);
    }
  }

  function disableInteraction() {
    moving = true;
    setTimeout(function () {
      moving = false;
    }, 500);
  }

  function moveCarouselTo(slide) {
    if (!moving) {
      disableInteraction();

      let newPrevious = slide - 1,
        newNext = slide + 1;

      if (totalItems - 1 < 3) {
        if (slide === 0) {
          newPrevious = totalItems - 1;
          newNext = slide + 1;
        } else if (slide === totalItems - 1) {
          newPrevious = slide - 1;
          newNext = 0;
        }

        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
        dots[slide].className = dotClassName + " green";
        dots[newPrevious].className = dotClassName + "";
        dots[newNext].className = dotClassName + "";
      }
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();
    moving = false;
  }

  initCarousel();
})(document);

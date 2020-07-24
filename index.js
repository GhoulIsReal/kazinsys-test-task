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

const handleNewsCarousel = () => {
  const d = document;
  let newsClassName = "news-slide";
  let dotClassName = "dot";

  news = d.getElementsByClassName(newsClassName),
    totalNews = news.length,
    newsSlide = 0,
    moving = true;
  (dots = d.getElementsByClassName(dotClassName)), (dot = 0);

  function setInitialClasses() {
    news[totalNews - 1].classList.add("prev");
    news[0].classList.add("active");
    news[1].classList.add("active");
    news[2].classList.add("active");
    news[3].classList.add("next");
    dots[3].classList.add("green");
  }

  function setEventListeners() {
    const nextNews = d.getElementsByClassName("carousel__button--next")[1],
      prevNews = d.getElementsByClassName("carousel__button--prev")[1];
    nextNews.addEventListener("click", moveNext);
    prevNews.addEventListener("click", movePrev);
    console.log(nextNews)
  }

  function moveNext() {
    if (!moving) {
      if (newsSlide === totalNews - 1) {
        newsSlide = 0;
        dot = 0;
      } else if(newsSlide === 0) {
        newsSlide++;
        console.log(newsSlide);
      } else {
        newsSlide++;
        dot++;
      }
      moveCarouselTo(newsSlide);
    }
  }

  function movePrev() {
    if (!moving) {
      if (newsSlide === 0) {
        newsSlide = totalNews - 1;
        dot = totalNews - 1;
      } else {
        newsSlide--;
        dot--;
      }

      moveCarouselTo(newsSlide);
    }
  }

  function disableInteraction() {
    moving = true;
    setTimeout(function () {
      moving = false;
    }, 500);
  }

  function moveCarouselTo(newsSlide) {
    if (!moving) {
      disableInteraction();

      let newPrevious = newsSlide - 1,
        newNext = newsSlide + 1

      if (totalNews - 1 > 3) {
        if (newsSlide === 0) {
          newPrevious = totalNews - 1;
          newNext = newsSlide + 3;
        } else if (newsSlide === totalNews - 1) {
          newPrevious = newsSlide - 1;
          newNext = 0;
        }
        news[newPrevious].className = newsClassName + " prev";
        news[newNext].className = newsClassName + " next";
        news[newsSlide].className = newsClassName + " active";
      }
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();
    moving = false;
  }

  initCarousel();
}

handleNewsCarousel();


!(function (d) {
  let itemClassName = "slide";
  let dotClassName = "dot";
  (items = d.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0),
    (moving = true);

  (dots = d.getElementsByClassName(dotClassName)), (dot = 0);

  function setInitialClasses() {
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
    dots[0].classList.add("green");
  }

  function setEventListeners() {
    const next = d.getElementsByClassName("carousel__button--next")[0],
      prev = d.getElementsByClassName("carousel__button--prev")[0];
    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
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
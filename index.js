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

!(function (d) {
  let itemClassName = "slide";
  let dotClassName = "dot";
  (items = d.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0),
    (moving = true);

  (dots = d.getElementsByClassName(dotClassName)),
    (dot = 0)

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
        newNext = slide + 1

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

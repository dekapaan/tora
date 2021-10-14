let forwardBtn = document.querySelector(".forward");
let backBtn = document.querySelector(".back");
let sections = document.querySelectorAll(".page");
let video = document.querySelector("video");

video.playbackRate = 0.65;

function forward() {
  for (x = 0; x < sections.length; x++) {
    if (sections[x].classList.contains("active")) {
      if (x == sections.length - 2) {
        sections[x + 1].querySelector("p").classList.add("active");
      }
      if (x == 0) {
        sections[x].querySelector("video").classList.remove("active");
      }
      if (x == sections.length - 1) {
        sections[x].querySelector("p").classList.remove("active");

        sections[x].classList.remove("active");
        sections[0].classList.add("active");
        sections[x].querySelectorAll("img").forEach((img) => {
          img.classList.remove("active");
        });
        sections[x].querySelector(".heading").classList.remove("active");
        sections[0].querySelectorAll("img").forEach((img) => {
          img.classList.add("active");
        });
        sections[0].querySelector(".heading").classList.add("active");
        sections[0].querySelector("video").classList.add("active");
        break;
      } else {
        console.log("heck");
        sections[x].classList.remove("active");
        sections[x + 1].classList.add("active");
        sections[x].querySelectorAll("img").forEach((img) => {
          img.classList.remove("active");
        });
        sections[x].querySelector(".heading").classList.remove("active");
        sections[x + 1].querySelectorAll("img").forEach((img) => {
          img.classList.add("active");
        });
        sections[x + 1].querySelector(".heading").classList.add("active");
        break;
      }
    }
  }
}

function back() {
  for (x = 0; x < sections.length; x++) {
    if (sections[x].classList.contains("active")) {
      if (x == sections.length - 1) {
        sections[x].querySelector("p").classList.remove("active");
      }
      if (x == 1) {
        sections[x - 1].querySelector("video").classList.add("active");
      }
      if (x == 0) {
        sections[sections.length - 1]
          .querySelector("p")
          .classList.add("active");

        sections[x].classList.remove("active");
        sections[x].querySelectorAll("img").forEach((img) => {
          img.classList.remove("active");
        });
        sections[x].querySelector(".heading").classList.remove("active");
        sections[x].querySelector("video").classList.remove("active");
        sections[sections.length - 1].classList.add("active");
        sections[sections.length - 1].querySelectorAll("img").forEach((img) => {
          img.classList.add("active");
        });
        sections[sections.length - 1]
          .querySelector(".heading")
          .classList.add("active");

        break;
      } else {
        console.log("heck");
        sections[x].classList.remove("active");
        sections[x - 1].classList.add("active");
        sections[x].querySelectorAll("img").forEach((img) => {
          img.classList.remove("active");
        });
        sections[x].querySelector(".heading").classList.remove("active");
        sections[x - 1].querySelectorAll("img").forEach((img) => {
          img.classList.add("active");
        });
        sections[x - 1].querySelector(".heading").classList.add("active");
        break;
      }
    }
  }
}

forwardBtn.addEventListener("click", forward);
backBtn.addEventListener("click", back);

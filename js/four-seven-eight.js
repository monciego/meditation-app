// loader
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const container = document.getElementById("four-container");
const animateCircle = document.getElementById("animate-circle");
const text = document.getElementById("four-text");

const totalTime = 19000;
const breatheTime = 4000;
const holdTime = 7000;

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "four-container grow";
  animateCircle.className = "animate-circle animate-circle-inhale";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "four-container shrink";
      animateCircle.className = "animate-circle animate-circle-exhale";
    }, holdTime);
  }, breatheTime);
  setInterval(breathAnimation, totalTime);
}

// breathAnimation();
const button = document.querySelector("button");
const pointerContainer = document.querySelector(".pointer-container-four");
const startTechniqueBtn = document.querySelector(".start-technique-btn");

button.addEventListener("click", () => {
  breathAnimation();
  startTechniqueBtn.style.display = "none";
  pointerContainer.style.animationPlayState = "running";
});

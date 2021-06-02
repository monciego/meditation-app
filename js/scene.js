// loader
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const menuBtn = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".mobile-nav-link");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-open");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fade .5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  menuBtn.classList.toggle("toggle");
});

// web active
const linkColor = document.querySelectorAll(".nav-link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

//tablet-active

const mobileLink = document.querySelectorAll(".mobile-nav-link");
function colorMobileLink() {
  mobileLink.forEach((l) => l.classList.remove("mobile-active"));
  this.classList.add("mobile-active");
}
mobileLink.forEach((l) => l.addEventListener("click", colorMobileLink));

//  mobile/small sz active
const BmobileLink = document.querySelectorAll(".mobile-b-icon");
function activeLink() {
  BmobileLink.forEach((l) => l.classList.remove("mobile-b-active"));
  this.classList.add("mobile-b-active");
}
BmobileLink.forEach((l) => l.addEventListener("click", activeLink));

//  sunset

const video = document.querySelector(".video-container-sunset");
const videoAudio = document.querySelector(".video-audio");

const selectContainer = document.querySelector(".time-select");
const timeSelect = document.querySelectorAll(".select-btn");
const timeDisplay = document.querySelector(".time-display");
const playBtn = document.querySelector(".pause-video");
let fakeDuration = 600;

// play
const videoPlaying = (videoAudio) => {
  if (videoAudio.paused) {
    video.play();
    videoAudio.play();
    selectContainer.querySelector("i.fas").classList.remove("fa-play");
    selectContainer.querySelector("i.fas").classList.add("fa-pause");
  } else {
    video.pause();
    videoAudio.pause();
    selectContainer.querySelector("i.fas").classList.add("fa-play");
    selectContainer.querySelector("i.fas").classList.remove("fa-pause");
  }

  // select time
  timeSelect.forEach((option) => {
    option.addEventListener("click", function () {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
  });

  // time
  videoAudio.ontimeupdate = () => {
    let currentTime = videoAudio.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= fakeDuration) {
      video.pause();
      videoAudio.pause();
      videoAudio.currentTime = 0;
      selectContainer.querySelector("i.fas").classList.add("fa-play");
      selectContainer.querySelector("i.fas").classList.remove("fa-pause");
      video.pause();
      videoAudio.pause();
    }
  };
};

// event listners
playBtn.addEventListener("click", function () {
  videoPlaying(videoAudio);
});

// show video
const openVideo = document.querySelector(".play-video-icon");
const exitVideo = document.querySelector(".exit-video");

openVideo.addEventListener("click", function () {
  document
    .getElementsByClassName("sunset-content")[0]
    .classList.add("active-show");
});

exitVideo.addEventListener("click", function () {
  document
    .getElementsByClassName("sunset-content")[0]
    .classList.remove("active-show");
  video.pause();
  videoAudio.pause();
  selectContainer.querySelector("i.fas").classList.add("fa-play");
  selectContainer.querySelector("i.fas").classList.remove("fa-pause");
  document
    .getElementsByClassName("sunset-content")[0]
    .classList.remove("hide-time-select");
  document
    .getElementsByClassName("sunset-content")[0]
    .classList.remove("rotate-chevron");
});

// toggle
const hideBtn = document.querySelector(".hide-time-select-icon");

hideBtn.addEventListener("click", () => {
  document
    .getElementsByClassName("sunset-content")[0]
    .classList.toggle("hide-time-select");
  document
    .getElementsByClassName("sunset-content")[0]
    .classList.toggle("rotate-chevron");
});

// ocean
const videoOcean = document.querySelector(".video-container-ocean");
const videoAudioOcean = document.querySelector(".video-audio-ocean");

const selectContainerOcean = document.querySelector(".time-select-ocean");
const timeSelectOcean = document.querySelectorAll(
  ".time-select-ocean .select-btn-ocean"
);
const timeDisplayOcean = document.querySelector(".time-display-ocean");
const playBtnOcean = document.querySelector(".pause-video-ocean");
let fakeDurationOcean = 600;

// play
const videoPlayingOcean = (videoAudioOcean) => {
  if (videoAudioOcean.paused) {
    videoOcean.play();
    videoAudioOcean.play();
    selectContainerOcean.querySelector("i.fas").classList.remove("fa-play");
    selectContainerOcean.querySelector("i.fas").classList.add("fa-pause");
  } else {
    videoOcean.pause();
    videoAudioOcean.pause();
    selectContainerOcean.querySelector("i.fas").classList.add("fa-play");
    selectContainerOcean.querySelector("i.fas").classList.remove("fa-pause");
  }
};

// time
videoAudioOcean.ontimeupdate = () => {
  let currentTime = videoAudioOcean.currentTime;
  let elapsed = fakeDurationOcean - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplayOcean.textContent = `${minutes}:${seconds}`;

  if (currentTime >= fakeDurationOcean) {
    videoOcean.pause();
    videoAudioOcean.pause();
    videoAudioOcean.currentTime = 0;
    selectContainerOcean.querySelector("i.fas").classList.add("fa-play");
    selectContainerOcean.querySelector("i.fas").classList.remove("fa-pause");
    videoOcean.pause();
    videoAudioOcean.pause();
  }
};

// select time
timeSelectOcean.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDurationOcean = this.getAttribute("data-time");
    timeDisplayOcean.textContent = `${Math.floor(
      fakeDurationOcean / 60
    )}:${Math.floor(fakeDurationOcean % 60)}`;
  });
});

// event listners
playBtnOcean.addEventListener("click", function () {
  videoPlayingOcean(videoAudioOcean);
});

// show video
const openVideoOcean = document.querySelector(".play-video-icon-ocean");
const exitVideoOcean = document.querySelector(".exit-video-ocean");

openVideoOcean.addEventListener("click", function () {
  document
    .getElementsByClassName("ocean-content")[0]
    .classList.add("active-show-ocean");
});

exitVideoOcean.addEventListener("click", function () {
  document
    .getElementsByClassName("ocean-content")[0]
    .classList.remove("active-show-ocean");
  videoOcean.pause();
  videoAudioOcean.pause();
  selectContainerOcean.querySelector("i.fas").classList.add("fa-play");
  selectContainerOcean.querySelector("i.fas").classList.remove("fa-pause");
  document
    .getElementsByClassName("ocean-content")[0]
    .classList.remove("hide-time-select-ocean");
  document
    .getElementsByClassName("ocean-content")[0]
    .classList.remove("rotate-chevron-ocean");
});

// toggle
const hideBtnOcean = document.querySelector(".hide-time-select-icon-ocean");

hideBtnOcean.addEventListener("click", () => {
  document
    .getElementsByClassName("ocean-content")[0]
    .classList.toggle("hide-time-select-ocean");
  document
    .getElementsByClassName("ocean-content")[0]
    .classList.toggle("rotate-chevron-ocean");
});

// rain
const videoRain = document.querySelector(".video-container-rain");
const videoAudioRain = document.querySelector(".video-audio-rain");

const selectContainerRain = document.querySelector(".time-select-rain");
const timeSelectRain = document.querySelectorAll(
  ".time-select-rain .select-btn-rain"
);
const timeDisplayRain = document.querySelector(".time-display-rain");
const playBtnRain = document.querySelector(".pause-video-rain");
let fakeDurationRain = 600;

// play
const videoPlayingRain = (videoAudioRain) => {
  if (videoAudioRain.paused) {
    videoRain.play();
    videoAudioRain.play();
    selectContainerRain.querySelector("i.fas").classList.remove("fa-play");
    selectContainerRain.querySelector("i.fas").classList.add("fa-pause");
  } else {
    videoRain.pause();
    videoAudioRain.pause();
    selectContainerRain.querySelector("i.fas").classList.add("fa-play");
    selectContainerRain.querySelector("i.fas").classList.remove("fa-pause");
  }
};

// time
videoAudioRain.ontimeupdate = () => {
  let currentTime = videoAudioRain.currentTime;
  let elapsed = fakeDurationRain - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplayRain.textContent = `${minutes}:${seconds}`;

  if (currentTime >= fakeDurationRain) {
    videoRain.pause();
    videoAudioRain.pause();
    videoAudioRain.currentTime = 0;
    selectContainerRain.querySelector("i.fas").classList.add("fa-play");
    selectContainerRain.querySelector("i.fas").classList.remove("fa-pause");
    videoRain.pause();
    videoAudioRain.pause();
  }
};

// select time
timeSelectRain.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDurationRain = this.getAttribute("data-time");
    timeDisplayRain.textContent = `${Math.floor(
      fakeDurationRain / 60
    )}:${Math.floor(fakeDurationRain % 60)}`;
  });
});

// event listners
playBtnRain.addEventListener("click", function () {
  videoPlayingRain(videoAudioRain);
});

// show video
const openVideoRain = document.querySelector(".play-video-icon-rain");
const exitVideoRain = document.querySelector(".exit-video-rain");

openVideoRain.addEventListener("click", function () {
  document
    .getElementsByClassName("rain-content")[0]
    .classList.add("active-show-rain");
});

exitVideoRain.addEventListener("click", function () {
  document
    .getElementsByClassName("rain-content")[0]
    .classList.remove("active-show-rain");
  videoRain.pause();
  videoAudioRain.pause();
  selectContainerRain.querySelector("i.fas").classList.add("fa-play");
  selectContainerRain.querySelector("i.fas").classList.remove("fa-pause");
  document
    .getElementsByClassName("rain-content")[0]
    .classList.remove("hide-time-select-rain");
  document
    .getElementsByClassName("rain-content")[0]
    .classList.remove("rotate-chevron-rain");
});

// toggle
const hideBtnRain = document.querySelector(".hide-time-select-icon-rain");

hideBtnRain.addEventListener("click", () => {
  document
    .getElementsByClassName("rain-content")[0]
    .classList.toggle("hide-time-select-rain");
  document
    .getElementsByClassName("rain-content")[0]
    .classList.toggle("rotate-chevron-rain");
});

// fall
const videofall = document.querySelector(".video-container-fall");
const videoAudiofall = document.querySelector(".video-audio-fall");

const selectContainerfall = document.querySelector(".time-select-fall");
const timeSelectfall = document.querySelectorAll(
  ".time-select-fall .select-btn-fall"
);
const timeDisplayfall = document.querySelector(".time-display-fall");
const playBtnfall = document.querySelector(".pause-video-fall");
let fakeDurationfall = 600;

// play
const videoPlayingfall = (videoAudiofall) => {
  if (videoAudiofall.paused) {
    videofall.play();
    videoAudiofall.play();
    selectContainerfall.querySelector("i.fas").classList.remove("fa-play");
    selectContainerfall.querySelector("i.fas").classList.add("fa-pause");
  } else {
    videofall.pause();
    videoAudiofall.pause();
    selectContainerfall.querySelector("i.fas").classList.add("fa-play");
    selectContainerfall.querySelector("i.fas").classList.remove("fa-pause");
  }
};

// time
videoAudiofall.ontimeupdate = () => {
  let currentTime = videoAudiofall.currentTime;
  let elapsed = fakeDurationfall - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplayfall.textContent = `${minutes}:${seconds}`;

  if (currentTime >= fakeDurationfall) {
    videofall.pause();
    videoAudiofall.pause();
    videoAudiofall.currentTime = 0;
    selectContainerfall.querySelector("i.fas").classList.add("fa-play");
    selectContainerfall.querySelector("i.fas").classList.remove("fa-pause");
    videofall.pause();
    videoAudiofall.pause();
  }
};

// select time
timeSelectfall.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDurationfall = this.getAttribute("data-time");
    timeDisplayfall.textContent = `${Math.floor(
      fakeDurationfall / 60
    )}:${Math.floor(fakeDurationfall % 60)}`;
  });
});

// event listners
playBtnfall.addEventListener("click", function () {
  videoPlayingfall(videoAudiofall);
});

// show video
const openVideofall = document.querySelector(".play-video-icon-fall");
const exitVideofall = document.querySelector(".exit-video-fall");

openVideofall.addEventListener("click", function () {
  document
    .getElementsByClassName("fall-content")[0]
    .classList.add("active-show-fall");
});

exitVideofall.addEventListener("click", function () {
  document
    .getElementsByClassName("fall-content")[0]
    .classList.remove("active-show-fall");
  videofall.pause();
  videoAudiofall.pause();
  selectContainerfall.querySelector("i.fas").classList.add("fa-play");
  selectContainerfall.querySelector("i.fas").classList.remove("fa-pause");
  document
    .getElementsByClassName("fall-content")[0]
    .classList.remove("hide-time-select-fall");
  document
    .getElementsByClassName("fall-content")[0]
    .classList.remove("rotate-chevron-fall");
});

// toggle
const hideBtnfall = document.querySelector(".hide-time-select-icon-fall");

hideBtnfall.addEventListener("click", () => {
  document
    .getElementsByClassName("fall-content")[0]
    .classList.toggle("hide-time-select-fall");
  document
    .getElementsByClassName("fall-content")[0]
    .classList.toggle("rotate-chevron-fall");
});

// snow
const videosnow = document.querySelector(".video-container-snow");
const videoAudiosnow = document.querySelector(".video-audio-snow");

const selectContainersnow = document.querySelector(".time-select-snow");
const timeSelectsnow = document.querySelectorAll(
  ".time-select-snow .select-btn-snow"
);
const timeDisplaysnow = document.querySelector(".time-display-snow");
const playBtnsnow = document.querySelector(".pause-video-snow");
let fakeDurationsnow = 600;

// play
const videoPlayingsnow = (videoAudiosnow) => {
  if (videoAudiosnow.paused) {
    videosnow.play();
    videoAudiosnow.play();
    selectContainersnow.querySelector("i.fas").classList.remove("fa-play");
    selectContainersnow.querySelector("i.fas").classList.add("fa-pause");
  } else {
    videosnow.pause();
    videoAudiosnow.pause();
    selectContainersnow.querySelector("i.fas").classList.add("fa-play");
    selectContainersnow.querySelector("i.fas").classList.remove("fa-pause");
  }
};

// time
videoAudiosnow.ontimeupdate = () => {
  let currentTime = videoAudiosnow.currentTime;
  let elapsed = fakeDurationsnow - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplaysnow.textContent = `${minutes}:${seconds}`;

  if (currentTime >= fakeDurationsnow) {
    videosnow.pause();
    videoAudiosnow.pause();
    videoAudiosnow.currentTime = 0;
    selectContainersnow.querySelector("i.fas").classList.add("fa-play");
    selectContainersnow.querySelector("i.fas").classList.remove("fa-pause");
    videosnow.pause();
    videoAudiosnow.pause();
  }
};

// select time
timeSelectsnow.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDurationsnow = this.getAttribute("data-time");
    timeDisplaysnow.textContent = `${Math.floor(
      fakeDurationsnow / 60
    )}:${Math.floor(fakeDurationsnow % 60)}`;
  });
});

// event listners
playBtnsnow.addEventListener("click", function () {
  videoPlayingsnow(videoAudiosnow);
});

// show video
const openVideosnow = document.querySelector(".play-video-icon-snow");
const exitVideosnow = document.querySelector(".exit-video-snow");

openVideosnow.addEventListener("click", function () {
  document
    .getElementsByClassName("snow-content")[0]
    .classList.add("active-show-snow");
});

exitVideosnow.addEventListener("click", function () {
  document
    .getElementsByClassName("snow-content")[0]
    .classList.remove("active-show-snow");
  videosnow.pause();
  videoAudiosnow.pause();
  selectContainersnow.querySelector("i.fas").classList.add("fa-play");
  selectContainersnow.querySelector("i.fas").classList.remove("fa-pause");
  document
    .getElementsByClassName("snow-content")[0]
    .classList.remove("hide-time-select-snow");
  document
    .getElementsByClassName("snow-content")[0]
    .classList.remove("rotate-chevron-snow");
});

// toggle
const hideBtnsnow = document.querySelector(".hide-time-select-icon-snow");

hideBtnsnow.addEventListener("click", () => {
  document
    .getElementsByClassName("snow-content")[0]
    .classList.toggle("hide-time-select-snow");
  document
    .getElementsByClassName("snow-content")[0]
    .classList.toggle("rotate-chevron-snow");
});

// ice
const videoice = document.querySelector(".video-container-ice");
const videoAudioice = document.querySelector(".video-audio-ice");

const selectContainerice = document.querySelector(".time-select-ice");
const timeSelectice = document.querySelectorAll(
  ".time-select-ice .select-btn-ice"
);
const timeDisplayice = document.querySelector(".time-display-ice");
const playBtnice = document.querySelector(".pause-video-ice");
let fakeDurationice = 600;

// play
const videoPlayingice = (videoAudioice) => {
  if (videoAudioice.paused) {
    videoice.play();
    videoAudioice.play();
    selectContainerice.querySelector("i.fas").classList.remove("fa-play");
    selectContainerice.querySelector("i.fas").classList.add("fa-pause");
  } else {
    videoice.pause();
    videoAudioice.pause();
    selectContainerice.querySelector("i.fas").classList.add("fa-play");
    selectContainerice.querySelector("i.fas").classList.remove("fa-pause");
  }
};

// time
videoAudioice.ontimeupdate = () => {
  let currentTime = videoAudioice.currentTime;
  let elapsed = fakeDurationice - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplayice.textContent = `${minutes}:${seconds}`;

  if (currentTime >= fakeDurationice) {
    videoice.pause();
    videoAudioice.pause();
    videoAudioice.currentTime = 0;
    selectContainerice.querySelector("i.fas").classList.add("fa-play");
    selectContainerice.querySelector("i.fas").classList.remove("fa-pause");
    videoice.pause();
    videoAudioice.pause();
  }
};

// select time
timeSelectice.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDurationice = this.getAttribute("data-time");
    timeDisplayice.textContent = `${Math.floor(
      fakeDurationice / 60
    )}:${Math.floor(fakeDurationice % 60)}`;
  });
});

// event listners
playBtnice.addEventListener("click", function () {
  videoPlayingice(videoAudioice);
});

// show video
const openVideoice = document.querySelector(".play-video-icon-ice");
const exitVideoice = document.querySelector(".exit-video-ice");

openVideoice.addEventListener("click", function () {
  document
    .getElementsByClassName("ice-content")[0]
    .classList.add("active-show-ice");
});

exitVideoice.addEventListener("click", function () {
  document
    .getElementsByClassName("ice-content")[0]
    .classList.remove("active-show-ice");
  videoice.pause();
  videoAudioice.pause();
  selectContainerice.querySelector("i.fas").classList.add("fa-play");
  selectContainerice.querySelector("i.fas").classList.remove("fa-pause");
  document
    .getElementsByClassName("ice-content")[0]
    .classList.remove("hide-time-select-ice");
  document
    .getElementsByClassName("ice-content")[0]
    .classList.remove("rotate-chevron-ice");
});

// toggle
const hideBtnice = document.querySelector(".hide-time-select-icon-ice");

hideBtnice.addEventListener("click", () => {
  document
    .getElementsByClassName("ice-content")[0]
    .classList.toggle("hide-time-select-ice");
  document
    .getElementsByClassName("ice-content")[0]
    .classList.toggle("rotate-chevron-ice");
});

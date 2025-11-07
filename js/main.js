document.addEventListener("DOMContentLoaded", (evt) => {
  // Global Variable
  let logo = document.querySelector(".logo");
  let menu = document.querySelector(".menu");
  let menuBanner = document.querySelector(".menu-banner");
  let hiddenBar = document.querySelector(".hidden-nav");
  let h1 = document.querySelector("h1");
  let job = document.querySelector("#position");
  let tag = document.querySelector("#tagline");
  let swtichBtn = document.querySelector("#switch");
  let body = document.querySelector("body");
  let switchHidden = document.querySelector(".toggle-btn");
  let audioBtn = document.querySelector("#audio");
  let unmuteBtn = document.querySelector(".unmute");
  let muteBtn = document.querySelector(".mute");
  let switchAudio = document.querySelector("#audioBtn");

  // Audio volume
  let audio = document.getElementById("myAudio");
  audio.volume = 0.01; // Set volume to 20% (value between 0 and 1)

  //fade out and set visibility:hidden
  gsap.from("header", {
    duration: 1,
    y: -100,
    opacity: 0,
  });
  //fade in and set visibility:visible
  gsap.from(".banner-header", {
    duration: 1,
    y: -100,
    opacity: 0,
  });

  // logo
  let logoTween = gsap.to(".logo", {
    duration: 0.5,
    yPercent: 15, // offset by the width of the box
    rotation: -20,
    ease: "power4.inOut",
    scale: 1.2,
    paused: true,
  });

  // logo animation
  logo.onmouseenter = () => logoTween.play();
  logo.onmouseleave = () => logoTween.reverse();

  // Menu
  let menuTween = gsap.to(".menu", {
    duration: 1,
    rotation: 360,
    ease: "power1.inOut",
    paused: true,
  });

  let menuBannerTween = gsap.to(".menu-banner", {
    duration: 1,
    rotation: 360,
    ease: "power1.inOut",
    paused: true,
  });

  // Menu Animation
  menuTween.reversed(true);
  menuBannerTween.reverse(true);

  menu.addEventListener("click", () => {
    menuTween.reversed() ? menuTween.play() : menuTween.reverse();
    hiddenBar.classList.toggle("hidden");
  });

  menuBanner.addEventListener("click", () => {
    menuBannerTween.reversed()
      ? menuBannerTween.play()
      : menuBannerTween.reverse();
    hiddenBar.classList.toggle("hidden");
  });

  // Banner Split Text
  let name = SplitText.create(h1);

  gsap.from(name.chars, {
    y: 100,
    autoAlpha: 0,
    stagger: 0.2,
    delay: 0.7,
  });

  // Banner image
  gsap.from(".side-profile", {
    opacity: 0,
    y: 100,
    duration: 1,
  });

  // Banner position
  let position = SplitText.create(job, {
    type: "words",
  });

  gsap.from(position.words, {
    autoAlpha: 0,
    stagger: 0.1,
    delay: 0.5,
  });

  // Banner tagline
  let tagline = SplitText.create(tag, {
    type: "words",
  });

  gsap.from(tagline.words, {
    autoAlpha: 0,
    stagger: 0.1,
    delay: 1.2,
    duration: 0.5,
    ease: "sine.out",
  });

  // Banner button
  gsap.fromTo(
    ".btn-group",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1.2,
      ease: "sine.out",
    }
  );

  // switch button
  gsap.from("#switch", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.7,
  });

  // Audio Button
  audioBtn.addEventListener("click", () => {
    if (unmuteBtn) {
      unmuteBtn.classList.toggle("audioHidden");
      muteBtn.classList.toggle("audioHidden");
    }
    audio.muted = !audio.muted;
  });

  gsap.from("#audio", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.7,
  });

  swtichBtn.addEventListener("click", (e) => {
    body.classList.toggle("darkmode");
  });

  switchHidden.addEventListener("click", (e) => {
    body.classList.toggle("darkmode");
  });

  // // Audio Switch
  switchAudio.addEventListener("click", () => {
    if (muteBtn) {
      audio.muted = !audio.muted;
    }
  });
});

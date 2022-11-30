import gsap from "gsap"
import router from "../router";
export function skip() {
  gsap.to(".main-page", {
    opacity: 0,
    duration: 0.5,
    onComplete() {
      router.push({
        name: "home",
      });
    }
  })
}
export function floating_pgy() {
  gsap.fromTo(".loading_pgy2", {
    rotate: -3,
  }, {
    rotate: 5,
    duration: 3,
    repeat: -1,
    ease: "power1.inOut",
    yoyo: true,
  });
  gsap.fromTo(".loading_pgy3", {
    rotate: -3,
  }, {
    rotate: 5,
    duration: 2,
    repeat: -1,
    ease: "power1.inOut",
    yoyo: true,
  });
  gsap.fromTo(".loading_pgy3_1", {
    rotate: -3,
  }, {
    rotate: 5,
    duration: 4,
    repeat: -1,
    ease: "power1.inOut",
    yoyo: true,
  });
  gsap.fromTo(".loading_pgy4", {
    rotate: -1,
  }, {
    rotate: 2.5,
    duration: 4,
    repeat: -1,
    ease: "power1.inOut",
    yoyo: true,
  });
  gsap.fromTo(".loading_minipgy", {
    xPercent: -300,
    yPercent: 250,
  }, {
    xPercent: 2000,
    yPercent: -700,
    duration: 9,
    repeat: -1,
    ease: "none",
  });
  gsap.fromTo(".loading_minipgyball", {
    xPercent: -200,
    yPercent: 250,
  }, {
    delay: 1,
    xPercent: 1500,
    yPercent: -650,
    duration: 8,
    repeat: -1,
    ease: "none",
  });
  gsap.fromTo(".ball_2", {
    xPercent: -200,
    yPercent: 50,
  }, {
    xPercent: 1500,
    yPercent: -500,
    delay: 2,
    duration: 10,
    repeat: -1,
    ease: "none",
  });
  gsap.fromTo(".mini_2", {
    xPercent: -200,
    yPercent: 50,
  }, {
    xPercent: 2000,
    yPercent: -700,
    delay: 4,
    duration: 10,
    repeat: -1,
    ease: "none",
    // yoyo: true,
  });
  var ball_3 = gsap.timeline( { repeat: -1, repeatDelay: 3, delay: 5});
  ball_3.fromTo(".ball_3", {
    opacity: 0,
  }, {
    opacity: 0.8,
    duration: 4,
    ease: "none",
  }).to(".ball_3", {
    xPercent: 850,
    yPercent: -160,
    duration: 6,
    ease: "none",
  }, "<");
}
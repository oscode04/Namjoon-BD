const music = document.querySelector(".music");
const tl = new TimelineMax();

function handlePlay() {
  if (music.paused) {
    music.play();
    var tween = gsap.to(".btn-play", {
      duration: 2,
      opacity: 0,
      y: "-100%",
      paused: false,
    });
    animationTimeline();
    document.querySelector(".btn-play").onclick = () => tween.play();
  }
}
if (music.paused) {
  tl.to(".container", {
    visibility: "hidden",
  });
}

const animationTimeline = () => {
  tl.to(".container", 3, {
    visibility: "visible",
  })
    .from(".one", 0.5, {
      opacity: 0,
    })
    .to(
      ".one",
      0.5,
      {
        opacity: 0,
      },
      "+=2"
    )
    .from(".two", 0.5, {
      opacity: 0,
    })
    .to(
      ".two",
      0.5,
      {
        opacity: 0,
      },
      "+=2"
    )
    .from(".three", 0.5, {
      opacity: 0,
    })
    .to(
      ".three",
      0.5,
      {
        opacity: 0,
      },
      "+=2"
    )
    .from(".for", 0.5, {
      opacity: 0,
    })
    .to(
      ".for",
      0.5,
      {
        opacity: 0,
      },
      "+=6"
    )
    .from(".five", 0.5, {
      opacity: 0,
    })
    .to(
      ".five",
      0.5,
      {
        opacity: 0,
      },
      "+=2.5"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(".eight h1", 0.5, {
      opacity: 0,
    })
    .to(
      ".eight h1",
      0.5,
      {
        opacity: 0,
      },
      "+=2.5"
    )
    .from(".nine", 0.5, {
      opacity: 0,
    })
    .to(
      ".nine",
      0.5,
      {
        opacity: 0,
      },
      "+=6"
    )
    .from(".ten", 0.5, {
      opacity: 0,
    })
    .to(
      ".ten",
      0.5,
      {
        opacity: 0,
      },
      "+=1.5"
    )
    .from(".eleven", 0.5, {
      opacity: 0,
    })
    .to(
      ".eleven",
      0.5,
      {
        opacity: 0,
      },
      "+=1.5"
    )
    .from(
      ".najma",
      0.5,
      {
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=3.5"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".hbd",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".hbd",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    );
};

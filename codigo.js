const tl = gsap.timeline({ paused: true });

const openNav = () => {
  animateOpenNav();
  const navBtn = document.querySelector(".menu-toggle-btn");

  navBtn.onclick = function (e) {
    navBtn.classList.toggle("active");
    tl.reversed(!tl.reversed());
  };
};

openNav();

function animateOpenNav() {
  tl.to(".nav-container", 0.2, {
    autoAlpha: 1,
    delay: 0.1,
  });

  tl.to(
    ".site-logo",
    0.2,
    {
      color: "#fff",
    },
    "-=0.1"
  );
}

tl.from(".flex > div", 0.4, {
  opacity: 0,
  y: 10,
  stagger: {
    amount: 0.04,
  },
});

tl.to(
  ".nav-link > a",
  0.8,
  {
    top: 0,
    ease: "power2,inOut",
    stagger: {
      amount: 0.1,
    },
  },
  "-=0.4"
);

tl.from(
  ".nav-footer",
  0.3,
  {
    opacity: 0,
  },
  "-=0.5"
).reverse();

TweenMax.staggerFrom(
  ".block",
  0.8,
  {
    width: "0%",
    ease: Power1.easeIn,
    delay: 2,
  },
  0.04
);



TweenMax.staggerFrom(".navbar > *", 2, {
  opacity: 0,
  y: 30,
  ease: Expo.easeInOut,
  delay: 3,
});
  

TweenMax.staggerTo(".wrapper-text", 2, {
  opacity: 1,
  y: 100,
  ease: Expo.easeInOut,
  delay: 3,
});

TweenMax.staggerTo(" .p", 2, {
  y: 0,
  ease: Expo.easeInOut,
  delay: 3,
});
  

TweenMax.to(".containerAll", 1, {
  y: 0,
  ease: Expo.easeInOut,
  delay: 0.1,
});

TweenMax.to(".containerAll", 1, {
  y: "-100%",
  ease: Expo.easeInOut,
  delay: 2,
});

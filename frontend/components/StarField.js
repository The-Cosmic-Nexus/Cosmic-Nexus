import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createStarField() {
  const starField = document.getElementById("star-field");
  if (!starField) return;

  starField.innerHTML = "";
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 3 + 1;
    const duration = 80 - size * 10;
    const speedFactor = 1 + (3 - size) * 0.5;

    star.className = "star fixed rounded-full";
    star.style.width = star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.backgroundColor = `rgba(255,255,255,${Math.random() * 0.7 + 0.3})`;

    starField.appendChild(star);

    gsap.to(star, {
      x: `+=${Math.random() > 0.5 ? 300 : -300}`,
      y: `+=${Math.random() > 0.5 ? 100 : -100}`,
      opacity: 0.5,
      duration,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    gsap.to(star, {
      y: `+=${size * 5}`,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: speedFactor * 0.1
      }
    });
  }
}

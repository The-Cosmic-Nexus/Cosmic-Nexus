import gsap from "gsap";
import { router } from "../router/router.js";

export function renderLanding() {
  const app = document.getElementById("app");

  app.innerHTML = `
<section id="landing-page" class="page-content min-h-screen flex items-center justify-center text-center p-8 bg-black/50 light-theme:bg-white/50">
  <div id="landing-content" class="max-w-4xl p-12 rounded-3xl bg-white/10 light-theme:bg-gray-100/90 backdrop-blur-md shadow-2xl glowing-shadow border-4 border-indigo-700/50 transition-colors duration-500 gsap-hidden">
    <i data-lucide="galaxy" class="w-20 h-20 mx-auto text-blue-300 light-theme:text-indigo-800 mb-6"></i>
    <h1 id="main-title-landing" class="text-7xl sm:text-9xl font-black mb-4 text-white light-theme:text-gray-900">
      COSMIC LIBRARY
    </h1>
    <p class="text-2xl text-gray-300 light-theme:text-gray-700 mb-10 italic">
      Unlock infinite reading possibilities across the literary universe.
    </p>
    <button id="landing-start"
      class="text-2xl bg-blue-600 text-white p-5 rounded-full font-extrabold hover:bg-blue-500 transition duration-300 shadow-xl glowing-shadow transform hover:scale-[1.05] flex items-center justify-center mx-auto">
      <i data-lucide="log-in" class="w-7 h-7 inline mr-3"></i>
      Sign in with Google
    </button>
  </div>
</section>
`;

  lucide.createIcons();

  gsap.to("#landing-content", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5
  });

  gsap.to("#main-title-landing", {
    scale: 1.05,
    skewX: 0.5,
    rotation: 0.2,
    duration: 3.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  document.getElementById("landing-start").onclick = () => {
    router.handleLandingStart();
  };
}

import { router } from "../router/router.js";
import { store } from "../state/store.js";
import { applyTheme, toggleTheme } from "../utils/theme.js";

export function renderNavbar() {
  const navbar = document.getElementById("floating-navbar");

  navbar.innerHTML = `
    <div class="flex justify-between items-center w-full">
      <h2 class="text-lg font-extrabold text-blue-400 light-theme:text-gray-900 cursor-pointer">
        COSMIC LIBRARY
      </h2>
      <div id="nav-links" class="flex space-x-2 items-center"></div>
    </div>
  `;

  navbar.querySelector("h2").onclick = () => router.navigate("landing");

  updateNavLinks();
}

export function updateNavLinks() {
  const navLinksContainer = document.getElementById("nav-links");
  if (!navLinksContainer) return;

  const user = store.auth?.currentUser;
  const isDark = store.currentTheme === "dark";

  navLinksContainer.innerHTML = "";

  const links = [
    { id: "explore", text: "Explore", auth: true },
    { id: "library", text: "My Library", auth: true },
    { id: "profile", text: "Profile", auth: false }
  ];

  links.forEach(link => {
    if (link.auth && !user) return;

    const btn = document.createElement("button");
    btn.textContent = link.text;

    btn.className =
      router.currentPage === link.id
        ? "px-3 py-1 text-md font-semibold text-blue-400 light-theme:text-indigo-800 border-b-2 border-blue-400 light-theme:border-indigo-800"
        : "px-3 py-1 text-md font-semibold text-gray-300 light-theme:text-gray-600 hover:text-white light-theme:hover:text-indigo-700 transition";

    btn.onclick = () => router.navigate(link.id);
    navLinksContainer.appendChild(btn);
  });

  // Theme toggle
  const toggleBtn = document.createElement("button");
  toggleBtn.className =
    "p-2 rounded-full hover:bg-gray-700 light-theme:hover:bg-gray-200 transition";

  toggleBtn.innerHTML = `
    <i data-lucide="${isDark ? "sun" : "moon"}"
       class="w-6 h-6 ${isDark ? "text-yellow-400" : "text-indigo-700"}"></i>
  `;

  toggleBtn.onclick = toggleTheme;
  navLinksContainer.appendChild(toggleBtn);

  lucide.createIcons();
}

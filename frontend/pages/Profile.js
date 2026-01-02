export function renderProfile() {
  const app = document.getElementById("app");

  app.innerHTML = `
<section id="profile-page" class="page-content p-4 sm:p-8 lg:p-12 max-w-lg mx-auto">
  <h1 class="text-6xl sm:text-7xl font-black text-blue-400 light-theme:text-indigo-800 mb-8">
    PROFILE
  </h1>

  <div id="profile-card"
    class="p-8 rounded-2xl shadow-2xl glowing-shadow bg-gray-800/95 light-theme:bg-white/95 border-t-8 border-indigo-700">
    <h2 class="text-4xl font-bold mb-6 text-gray-100 light-theme:text-gray-900 flex items-center">
      <i data-lucide="user-circle" class="w-10 h-10 mr-3 text-blue-500 light-theme:text-indigo-800"></i>
      Account Details
    </h2>

    <div id="auth-status"></div>

    <div id="user-info-display" class="space-y-4 mt-6 hidden">
      <p class="text-lg">
        <span class="font-semibold text-blue-400 light-theme:text-indigo-800">User ID:</span>
        <span id="display-uid" class="font-mono text-sm block md:inline"></span>
      </p>
      <p class="text-lg">
        <span class="font-semibold text-blue-400 light-theme:text-indigo-800">Login Type:</span>
        <span id="display-login-type"></span>
      </p>
      <p class="text-lg">
        <span class="font-semibold text-blue-400 light-theme:text-indigo-800">Email:</span>
        <span id="display-email">Not set</span>
      </p>
    </div>

    <button id="logout-button"
      class="hidden w-full mt-8 py-3 bg-red-600 text-white rounded-xl font-extrabold hover:bg-red-700 transition duration-300 shadow-lg transform hover:scale-[1.01]">
      <i data-lucide="log-out" class="w-5 h-5 inline mr-2"></i>
      Logout
    </button>
  </div>
</section>
`;

  lucide.createIcons();
}

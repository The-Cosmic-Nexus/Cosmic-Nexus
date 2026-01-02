export function renderExplore() {
  const app = document.getElementById("app");

  app.innerHTML = `
<section id="explore-page" class="page-content p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto">
  <header id="explore-header" class="flex justify-between items-center mb-8 lg:mb-16">
    <h1 class="text-6xl sm:text-7xl font-black text-blue-400 light-theme:text-indigo-800">
      EXPLORE
      <span class="text-gray-400 light-theme:text-gray-600 text-lg font-light block sm:inline-block mt-1 sm:ml-4">
        / Cosmic Picks
      </span>
    </h1>
  </header>

  <section id="hero-section"
    class="mb-12 p-8 sm:p-12 rounded-2xl shadow-2xl glowing-shadow bg-gray-800/95 light-theme:bg-gray-100/95 transition-colors duration-500 border-b-8 border-indigo-700">
    <h2 class="text-5xl font-extrabold mb-4 text-gray-100 light-theme:text-gray-900">
      Curated Recommendations
    </h2>

    <div class="flex flex-col sm:flex-row gap-4">
      <input id="search-input" type="text"
        placeholder="Search the galaxy by title or author..."
        class="flex-grow p-4 border-2 border-indigo-700 rounded-xl focus:ring-4 focus:ring-indigo-700 bg-gray-700 light-theme:bg-white text-gray-100 light-theme:text-gray-900 placeholder-gray-400 transition duration-300 text-lg">

      <button id="suggest-button"
        class="bg-blue-600 text-white p-4 rounded-xl font-extrabold hover:bg-blue-500 transition duration-300 shadow-xl glowing-shadow transform hover:scale-[1.05] flex items-center justify-center">
        <i data-lucide="zap" class="w-6 h-6 inline mr-2 animate-pulse"></i>
        IGNITE Suggestion Engine
      </button>
    </div>
  </section>

  <section id="filter-section" class="mb-12">
    <h3 class="text-2xl font-bold mb-5 text-blue-300 light-theme:text-indigo-800 border-b border-indigo-700/50 pb-2">
      Select Your Vibe:
    </h3>
    <div id="genre-chips" class="flex flex-wrap gap-3"></div>
  </section>

  <section>
    <h3 id="results-title" class="3xl font-black mb-8 text-gray-100 light-theme:text-gray-800">
      Top Picks: The Algorithm Has Spoken
    </h3>
    <div id="book-grid"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"></div>
  </section>
</section>
`;

  lucide.createIcons();
}

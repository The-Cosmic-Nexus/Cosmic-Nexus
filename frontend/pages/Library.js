export function renderLibrary() {
  const app = document.getElementById("app");

  app.innerHTML = `
<section id="library-page" class="page-content p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto">
  <h1 class="text-6xl sm:text-7xl font-black text-blue-400 light-theme:text-indigo-800 mb-8">
    MY LIBRARY
  </h1>

  <div class="mb-10 p-4 rounded-2xl bg-gray-900/50 light-theme:bg-gray-200/50 shadow-lg border border-indigo-700/30">
    <input id="library-search-input" type="text"
      placeholder="Filter your saved books or list names..."
      class="w-full p-4 border-2 border-indigo-700 rounded-xl focus:ring-4 focus:ring-indigo-700 bg-gray-700 light-theme:bg-white text-gray-100 light-theme:text-gray-900 placeholder-gray-400 transition duration-300 text-lg">
  </div>

  <div id="library-section"
    class="p-8 rounded-2xl shadow-2xl glowing-shadow bg-gray-800/95 light-theme:bg-white/95">
    <h2 class="text-4xl font-bold mb-6 text-blue-500 light-theme:text-indigo-800 flex items-center">
      <i data-lucide="book-open-check" class="w-8 h-8 mr-3"></i>
      Reading List
    </h2>

    <div id="reading-list-grid"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <p id="no-reading-list"
        class="text-gray-500 light-theme:text-gray-500 italic col-span-full">
        Your reading list is empty. Explore and save some books!
      </p>
    </div>
  </div>

  <div class="mt-12 p-8 rounded-2xl shadow-2xl glowing-shadow bg-gray-800/95 light-theme:bg-white/95">
    <h2 class="text-4xl font-bold mb-6 text-blue-500 light-theme:text-indigo-800 flex items-center">
      <i data-lucide="list-checks" class="w-8 h-8 mr-3"></i>
      My Custom Lists
    </h2>

    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <input id="new-list-name" type="text"
        placeholder="New List Name (e.g., Sci-Fi Classics)"
        class="flex-grow p-3 border-2 border-gray-300 rounded-lg bg-gray-700 light-theme:bg-white text-gray-100 light-theme:text-gray-900">
      <button id="create-list-button"
        class="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-500 transition">
        Create List
      </button>
    </div>

    <div id="custom-lists-container" class="space-y-6">
      <p id="no-custom-lists" class="text-gray-500 light-theme:text-gray-500 italic">
        No custom lists yet. Start organizing your cosmic journey!
      </p>
    </div>
  </div>
</section>
`;

  lucide.createIcons();
}

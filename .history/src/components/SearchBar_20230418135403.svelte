<!-- src/components/SearchBar.svelte -->
<script>
  import products from "../stores/products";
  let searchQuery = "";
  async function search() {
    const { data } = await commerce.products.list({ query: searchQuery });
    products.set(data);
  }
</script>

<div class="flex items-center justify-center mt-8">
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="Search..."
    class="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4 py-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-500"
  />
  <button
    on:click={search}
    class="px-4 py-2 bg-indigo-600 text-white font-semibold uppercase tracking-wider rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
  >
    Search
  </button>
</div>

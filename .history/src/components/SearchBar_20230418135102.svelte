<!-- src/components/SearchBar.svelte -->
<script>
  import products from "../stores/products";
  let searchQuery = "";
  async function search() {
    const { data } = await commerce.products.list({ query: searchQuery });
    products.set(data);
  }
</script>

<input type="text" bind:value={searchQuery} placeholder="Search..." />
<button on:click={search}>Search</button>

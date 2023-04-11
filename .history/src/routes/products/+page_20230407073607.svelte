<script>
  import { onMount } from "svelte";
  import commerce from "$lib/commerce";

  let products = [];
  let error = null;

  onMount(async () => {
    try {
      const { data } = await commerce.products.list();
      products = data;
    } catch (e) {
      error =
        "Failed to load products. Please check your Commerce.js API key and store settings.";
      console.error(e);
    }
  });
</script>

<main>
  <h1 class="text-2xl">Products</h1>
  {#if error}
    <p>{error}</p>
  {:else if products.length === 0}
    <p>Loading products...</p>
  {:else}
    <ul>
      {#each products as product}
        <li>
          <h2 class="text-xl">{product.name}</h2>
          <p>Price: ${product.price.formatted_with_code}</p>
          <img src={product.media.source} alt={product.name} />
        </li>
      {/each}
    </ul>
  {/if}
</main>

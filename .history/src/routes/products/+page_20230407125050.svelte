<script lang="ts">
  import { onMount } from "svelte";
  import commerce from "$lib/commerce";

  interface Product {
    id: string;
    name: string;
    price: {
      formatted_with_code: string;
    };
    media: {
      source: string;
    };
  }

  let products: Product[] = [];
  let error: string | null = null;
  let isLoading = true;

  onMount(async () => {
    try {
      const { data } = await commerce.products.list();
      products = data;
    } catch (e) {
      error =
        e.message ||
        "Failed to load products. Please check your Commerce.js API key and store settings.";
      console.error(e);
    } finally {
      isLoading = false;
    }
  });
</script>

<main>
  <h1 class="text-2xl">Products</h1>
  {#if error}
    <p>{error}</p>
  {:else if isLoading}
    <p>Loading products...</p>
  {:else}
    <ul>
      {#each products as product}
        <li>
          <h2 class="text-xl">{product.name}</h2>
          <p>Price: ${product.price.formatted_with_code}</p>
          {#if product.media && product.media.source}
            <img src={product.media.source} alt={product.name} />
          {:else}
            <p>No image available</p>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</main>

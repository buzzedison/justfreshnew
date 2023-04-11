<script lang="ts">
  import { onMount } from "svelte";
  import commerce from "$lib/commerce";

  interface Product {
    id: string;
    name: string;
    price: {
      formatted_with_code: string;
    };
    image: {
      url: string;
    };
  }

  let products: Product[] = [];
  let error: string | null = null;
  let isLoading = true;

  onMount(async () => {
    // ...
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
          {#if product.image && product.image.url}
            <img src={product.image.url} alt={product.name} />
          {:else}
            <p>No image available</p>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</main>

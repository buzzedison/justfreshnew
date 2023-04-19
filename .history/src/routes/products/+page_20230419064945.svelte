<script lang="ts">
  import { onMount } from "svelte";
  import commerce from "$lib/commerce";
  // import addToCart from "src/components/CartItems.svelte";
  // import addToCart from "$lib/cart.js";
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
    try {
      const { data } = await commerce.products.list();
      console.log("Products:", data);
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

<main class="container mx-auto">
  <h1 class="text-2xl">Products</h1>
  {#if error}
    <p>{error}</p>
  {:else if isLoading}
    <p>Loading products...</p>
  {:else}
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each products as product}
        <li class="bg-white shadow rounded p-4">
          <h2 class="text-xl mb-2">{product.name}</h2>
          <div class="h-64 w-full bg-gray-100 overflow-hidden mb-2">
            {#if product.image && product.image.url}
              <img
                class="object-cover object-center h-full w-full"
                src={product.image.url}
                alt={product.name}
              />
            {:else}
              <p class="text-center py-4">No image available</p>
            {/if}
          </div>
          <p>Price: ${product.price.formatted_with_code}</p>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            on:click={() => addToCart(product.id, 1)}
          >
            Add to Cart
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</main>

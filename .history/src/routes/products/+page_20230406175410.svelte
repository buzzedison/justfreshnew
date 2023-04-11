<script>
  import { onMount } from "svelte";
  import commerce from "$lib/commerce";

  export let products = [];

  onMount(async () => {
    const { data } = await commerce.products.list();
    products = data;
  });

  return { products };
</script>

<main>
  <h1 class="text-2xl">Products</h1>
  <ul>
    {#each products as product}
      <li>
        <h2 class="text-xl">{product.name}</h2>
        <p>Price: ${product.price.formatted_with_code}</p>
        <img src={product.media.source} alt={product.name} />
      </li>
    {/each}
  </ul>
</main>

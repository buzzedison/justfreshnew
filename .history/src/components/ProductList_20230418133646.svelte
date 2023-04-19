<!-- src/components/ProductList.svelte -->
<script>
  import products from "../stores/products";
  import categories from "../stores/categories";
</script>

{#each $categories as category}
  <h2 class="text-2xl font-bold mb-4">{category.name}</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each $products.filter( (product) => product.categories.some((c) => c.id === category.id) ) as product}
      <div class="bg-white shadow rounded p-4">
        <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
        <img
          class="w-full h-48 object-cover mb-4 rounded"
          src={product.image.url}
          alt={product.name}
        />
        <p class="text-lg font-semibold">
          {product.price.formatted_with_symbol}
        </p>
      </div>
    {/each}
  </div>
{/each}

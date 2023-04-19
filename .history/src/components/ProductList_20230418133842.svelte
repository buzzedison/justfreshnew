<!-- src/components/ProductList.svelte -->
<script>
  import products from "../stores/products";
  import categories from "../stores/categories";
</script>

{#each $categories as category}
  <h2 class="text-3xl font-bold mb-6">{category.name}</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each $products.filter( (product) => product.categories.some((c) => c.id === category.id) ) as product}
      <div
        class="bg-white shadow-lg rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <img
          class="w-full h-64 object-cover mb-4 rounded-lg"
          src={product.image.url}
          alt={product.name}
        />
        <h3 class="text-2xl font-semibold mb-2">{product.name}</h3>
        <p class="text-lg font-semibold text-gray-600">
          {product.price.formatted_with_symbol}
        </p>
      </div>
    {/each}
  </div>
{/each}

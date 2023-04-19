<!-- src/components/ProductList.svelte -->
<script>
  import products from "../stores/products";
  import categories from "../stores/categories";
  import AddToCartButton from "./AddToCartButton.svelte";
</script>

{#each $categories as category}
  <h2 class="text-2xl font-bold mb-4">{category.name}</h2>
  <div class="grid grid-cols-3 gap-4">
    {#each $products.filter( (product) => product.categories.some((c) => c.id === category.id) ) as product}
      <div class="bg-white shadow rounded-lg p-4">
        <img
          class="w-full h-48 object-cover rounded-t-lg mb-4"
          src={product.image.url}
          alt={product.name}
        />
        <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
        <p class="text-lg font-medium text-gray-700 mb-4">
          {product.price.formatted_with_symbol}
        </p>
        <AddToCartButton productId={product.id} />
      </div>
    {/each}
  </div>
{/each}

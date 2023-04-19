<!-- src/components/ProductList.svelte -->
<script>
  import { products } from "../stores/products";
  import { categories } from "../stores/categories";
</script>

{#each $categories as category}
  <h2>{category.name}</h2>
  <ul>
    {#each $products.filter( (product) => product.categories.some((c) => c.id === category.id) ) as product}
      <li>
        <h3>{product.name}</h3>
        <img src={product.media.source} alt={product.name} />
        <p>{product.price.formatted_with_symbol}</p>
      </li>
    {/each}
  </ul>
{/each}

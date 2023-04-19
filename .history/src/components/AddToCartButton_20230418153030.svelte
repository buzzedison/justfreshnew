<!-- src/components/AddToCartButton.svelte -->
<script>
  import addToCart from "../stores/cart";

  export let productId;
  let quantity = 1;
</script>

<div>
  <input type="number" bind:value={quantity} min="1" />
  <button on:click={() => addToCart(productId, quantity)}>Add to Cart</button>
</div>

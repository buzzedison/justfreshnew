<!-- src/components/AddToCartButton.svelte -->
<script>
  export let productId;
  import commerce from "$lib/commerce";
  import refreshCart from "../stores/cart.js";

  async function addToCart() {
    const { cart } = await commerce.cart.add(productId, 1);
    console.log("Product added to cart:", cart);
    refreshCart(); // Call refreshCart function here
  }
</script>

<button
  on:click={addToCart}
  class="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
>
  Add to Cart
</button>

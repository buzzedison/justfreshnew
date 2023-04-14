<script lang="ts">
  import { onMount } from "svelte";
  import cart from "$lib/cart";

  interface CartItem {
    id: string;
    product_name: string;
    quantity: number;
    line_total: {
      formatted_with_symbol: string;
    };
  }

  let cartItems: CartItem[] = [];

  let unsubscribe = cart.subscribe(($cart) => {
    cartItems = $cart.line_items || [];
  });

  onMount(() => {
    cart.fetch();
  });
</script>

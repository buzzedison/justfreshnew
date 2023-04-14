<script lang="ts">
  import { onMount, onDestroy } from "svelte";
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

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="bg-white shadow overflow-hidden sm:rounded-md p-6">
  <h2 class="text-2xl mb-4">Cart</h2>
  {#if cartItems.length === 0}
    <p>Your cart is empty.</p>
  {:else}
    <ul>
      {#each cartItems as item}
        <li class="border-b border-gray-200 py-4">
          <div class="flex items-center">
            <div class="ml-4">
              <h3 class="text-lg font-medium">{item.product_name}</h3>
              <p class="text-sm text-gray-500">Quantity: {item.quantity}</p>
              <p class="text-sm text-gray-500">
                Total: {item.line_total.formatted_with_symbol}
              </p>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>

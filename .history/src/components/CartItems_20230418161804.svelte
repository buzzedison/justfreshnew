<!-- src/components/CartItems.svelte -->
<script>
  import { onMount } from "svelte";
  import { cart, refreshCart } from "../stores/cart.js";

  let cartItems = [];

  onMount(async () => {
    $cart && (cartItems = $cart.line_items);
  });

  $: if ($cart) cartItems = $cart.line_items;
</script>

{#if cartItems && cartItems.length > 0}
  <ul class="divide-y divide-gray-200">
    {#each cartItems as item}
      <li class="py-4">
        <div class="flex">
          <img
            class="h-20 w-20 object-cover"
            src={item.media.source}
            alt={item.name}
          />
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">{item.name}</p>
            <p class="text-sm text-gray-500">
              {item.quantity} x {item.price.formatted_with_symbol}
            </p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
{:else}
  <p>No items in cart.</p>
{/if}

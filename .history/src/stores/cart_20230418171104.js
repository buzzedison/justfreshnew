// src/stores/cart.js
import { writable } from 'svelte/store';
import commerce from '$lib/commerce';

const cart = writable({});

export async function addToCart(productId, quantity = 1) {
  const newCart = await commerce.cart.add(productId, quantity);
  cart.set(newCart);
}

export async function fetchCart() {
  const currentCart = await commerce.cart.retrieve();
  cart.set(currentCart);
}

//refresh cart

export async function refreshCart() {
    const { cart: fetchedCart } = await commerce.cart.retrieve();
    cart.set(fetchedCart);
  }
  
  refreshCart();

fetchCart();



export default cart;


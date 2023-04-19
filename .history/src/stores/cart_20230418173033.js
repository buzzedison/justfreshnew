// // src/stores/cart.js
// import { writable } from 'svelte/store';
// import commerce from '$lib/commerce';

// const cart = writable({});

// export const fetchCart = async () => {
//   const fetchedCart = await commerce.cart.retrieve();
//   cart.set(fetchedCart);
// };

// export const addItemToCart = async (productId, quantity) => {
//   const { cart: updatedCart } = await commerce.cart.add(productId, quantity);
//   cart.set(updatedCart);
// };

// export const updateItem = async (lineItemId, quantity) => {
//   const { cart: updatedCart } = await commerce.cart.update(lineItemId, { quantity });
//   cart.set(updatedCart);
// };

// export const removeItem = async (lineItemId) => {
//   const { cart: updatedCart } = await commerce.cart.remove(lineItemId);
//   cart.set(updatedCart);
// };

// export const emptyCart = async () => {
//   const { cart: updatedCart } = await commerce.cart.empty();
//   cart.set(updatedCart);
// };

// export default cart;

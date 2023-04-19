// src/stores/products.js
import { writable } from 'svelte/store';
import commerce from '$lib/commerce';

const products = writable([]);

(async () => {
  const { data } = await commerce.products.list();
  products.set(data);
})();

export default products;


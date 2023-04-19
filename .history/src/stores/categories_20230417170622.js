// src/stores/categories.js
import { writable } from 'svelte/store';
import commerce from '$lib/commerce.js';

const categories = writable([]);

(async () => {
  const { data } = await commerce.categories.list();
  categories.set(data);
})();

export default categories;

// src/stores/categories.js
import { writable } from 'svelte/store';
import commerce from '$lib/commerce';

const categories = writable([]);


(async () => {
  //list commerce js categories

  const { data } = await commerce.categories.list ()();
  categories.set(data);
})();

export default categories;
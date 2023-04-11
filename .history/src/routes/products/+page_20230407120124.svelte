<script context="module">
  import { client } from "$lib/commerce.js";

  export async function load() {
    const { data: categories } = await client.categories.list();
    const { data: products } = await client.products.list();

    return {
      props: {
        categories,
        products,
      },
    };
  }
</script>

<script>
  export let categories;
  export let products;
</script>

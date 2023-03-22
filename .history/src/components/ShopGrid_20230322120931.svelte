<script>
  let products = [
    {
      name: "Orange Juice",
      description: "Natural, sweet, and no additives",
      price: "$2.99",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Veggie Box",
      description: "Lettuce, Brocolli, Carrots, and more",
      price: "$7.99",
      image: "https://via.placeholder.com/200",
    },
    // Add more products as needed
  ];
</script>

<!-- src/components/ShopGrid.svelte -->
<div class="container mx-auto py-12">
  <h2 class="text-4xl font-bold text-black mb-6">
    Our Collection of Healthy Living
  </h2>
  <div class="flex overflow-x-auto space-x-4">
    {#each products as product}
      <div
        class="w-60 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
      >
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
        <p class="text-gray-700 mb-4">{product.description}</p>
        <div class="flex items-center justify-between w-full">
          <span class="font-bold text-orange-600">{product.price}</span>
          <a
            href="/buy"
            class="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-black"
          >
            Buy Now
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  /* Custom scrollbar style */
  .container::-webkit-scrollbar {
    height: 8px;
  }

  .container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .container::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
</style>

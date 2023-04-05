<!-- src/components/Subsections.svelte -->
<div class="container mx-auto py-12">
  <div>
    <div class="card w-96 glass">
      <figure>
        <img src="/juice1.jpeg" alt="juices!" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Organic Juices</h2>
        <p>
          Taste the freshness and feel the health benefits of our organic
          juices, made from locally sourced fruits and vegetables.
        </p>
        <div class="card-actions justify-end">
          <button class="btn bg-orange-600">Explore Juices</button>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-orange-600 mb-4">Organic Juices</h2>
      <p class="text-gray-700 mb-6">
        Taste the freshness and feel the health benefits of our organic juices,
        made from locally sourced fruits and vegetables. Enjoy a wide range of
        flavors and experience a refreshing burst of energy.
      </p>
      <a
        href="/juices"
        class="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-black"
        >Explore Juices</a
      >
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-orange-600 mb-4">Healthy Groceries</h2>
      <p class="text-gray-700 mb-6">
        Stock up on nutritious and organic groceries to fuel your healthy
        lifestyle. Choose from a variety of products, including grains, snacks,
        and beverages, carefully selected for their quality and taste.
      </p>
      <a
        href="/groceries"
        class="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-black"
        >Shop Groceries</a
      >
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-orange-600 mb-4">Custom Meal Plans</h2>
      <p class="text-gray-700 mb-6">
        Achieve your health goals with custom meal plans created by our expert
        nutritionists. We'll help you find the perfect balance of nutrients,
        flavors, and portion sizes, tailored to your unique needs.
      </p>
      <a
        href="/meal-plans"
        class="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-black"
        >Get Started</a
      >
    </div>
  </div>
</div>

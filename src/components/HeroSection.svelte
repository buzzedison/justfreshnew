<!-- src/components/HeroSection.svelte -->
<section class="bg-white py-8">
  <div class="container mx-auto flex flex-wrap items-center">
    <div class="w-full md:w-1/2 px-4">
      <h1 class="text-4xl md:text-5xl font-bold text-orange-700 mb-6">
        Discover Healthy Foods and Groceries
      </h1>
      <p class="text-xl text-gray-700 mb-6">
        Enjoy a wide range of organic, fresh, and delicious foods to fuel your
        healthy lifestyle.
      </p>
      <div class="space-x-4">
        <a
          href="/shop"
          class="bg-orange-700 text-white font-semibold py-3 px-6 rounded hover:bg-orange-700"
        >
          Shop Now
        </a>
        <a
          href="/learn"
          class="border border-orange-600 text-orange-700 font-semibold py-3 px-6 rounded hover:bg-green-100"
        >
          Learn More
        </a>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-4">
      <img
        src="/justfreshwoman.png"
        alt="Healthy food"
        class="w-contain h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</section>

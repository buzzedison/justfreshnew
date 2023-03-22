<!-- src/components/HeroSection.svelte -->
<section class="bg-white py-12 mt-7">
  <div class="container mx-auto flex flex-wrap items-center">
    <div class="w-full md:w-1/2 px-4">
      <h1 class="text-4xl md:text-5xl font-bold text-green-600 mb-6">
        Discover Healthy Foods and Groceries
      </h1>
      <p class="text-xl text-gray-700 mb-6">
        Enjoy a wide range of organic, fresh, and delicious foods to fuel your
        healthy lifestyle.
      </p>
      <div class="space-x-4">
        <a
          href="/shop"
          class="bg-green-600 text-white font-semibold py-3 px-6 rounded hover:bg-green-700"
        >
          Shop Now
        </a>
        <a
          href="/learn"
          class="border border-green-600 text-green-600 font-semibold py-3 px-6 rounded hover:bg-green-100"
        >
          Learn More
        </a>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-4">
      <img
        src="/hero-image.jpg"
        alt="Healthy food"
        class="w-full h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</section>

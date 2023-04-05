<!-- src/components/Navbar.svelte -->
<!-- <nav class="bg-white shadow-sm">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between py-4">
      <div class="text-2xl font-bold text-orange-600">Just Fresh</div>
      <ul class="flex items-center space-x-4 text-gray-700">
        <li>
          <a href="/" class="hover:text-orange-600"> About </a>
        </li>
        <li>
          <a href="/juices" class="hover:text-orange-600"> Drinks </a>
        </li>
        <li>
          <a href="/groceries" class="hover:text-orange-600"> Groceries </a>
        </li>
        <li>
          <a href="/marketplace" class="hover:text-orange-600"> Marketplace </a>
        </li>
        <li>
          <a href="/packages" class="hover:text-orange-600"> Packages </a>
        </li>
        <li>
          <a href="/contact" class="hover:text-orange-600">
            Health Tips & Recipes
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->

<script>
  import { onMount } from "svelte";

  onMount(() => {
    // Your JavaScript code for the component goes here, if needed
  });
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <button class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </button>
      <ul
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/">Item 1</a></li>
        <li>
          <button class="justify-between w-full text-left">
            Parent
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              /></svg
            >
          </button>
          <ul class="p-2">
            <li><a href="/">Submenu 1</a></li>
            <li><a href="/">Submenu 2</a></li>
          </ul>
        </li>
        <li><a href="/">Item 3</a></li>
      </ul>
    </div>
  </div>
  <!-- Rest of the code -->
</div>

<style>
  /* Add any component-specific styles here */
</style>

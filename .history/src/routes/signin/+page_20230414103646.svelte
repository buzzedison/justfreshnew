<script>
  // import any required dependencies here
</script>

<section class="h-screen">
  <div class="h-full flex">
    <!-- Left column container with background-->
    <div
      class="flex flex-wrap items-center justify-center lg:justify-between w-1/2"
    >
      <div class="w-1/2">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Sample image"
        />
      </div>
    </div>

    <!-- Right column container -->
    <div class="w-1/2 flex flex-col items-center justify-center">
      <form class="w-full max-w-md">
        <!-- Sign in section -->
        <div
          class="flex flex-row items-center justify-center lg:justify-start mb-4"
        >
          <p class="mb-0 mr-4 text-lg">Sign in with</p>

          <!-- Social media buttons -->
          <!-- ... -->
        </div>

        <!-- Separator between social media sign in and email/password sign in -->
        <!-- ... -->

        <!-- Email input -->
        <div class="relative mb-6">
          <input
            type="text"
            class="peer block w-full rounded border-0 bg-transparent px-3 py-2 leading-7 outline-none transition-all duration-200 ease-linear dark:text-gray-200 dark:placeholder-gray-200 placeholder-opacity-0 focus:placeholder-opacity-100 peer-focus:placeholder-opacity-100"
            id="exampleFormControlInput2"
            placeholder="Email address"
          />
          <label
            for="exampleFormControlInput2"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-90p origin-0-0 truncate pt-2 leading-7 text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-4 peer-focus:scale-0.8 peer-focus:text-primary dark:text-gray-200 dark:peer-focus:text-primary"
            >Email address
          </label>
        </div>

        <!-- Password input -->
        <div class="relative mb-6">
          <input
            type="password"
            class="peer block w-full rounded border-0 bg-transparent px-3 py-2 leading-7 outline-none transition-all duration-200 ease-linear dark:text-gray-200 dark:placeholder-gray-200 placeholder-opacity-0 focus:placeholder-opacity-100 peer-focus:placeholder-opacity-100"
            id="exampleFormControlInput22"
            placeholder="Password"
          />
          <label
            for="exampleFormControlInput22"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-90p origin-0-0 truncate pt-2 leading-7 text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-4 peer-focus:scale-0.8 peer-focus:text-primary dark:text-gray-200 dark:peer-focus:text-primary"
            >Password
          </label>
        </div>

        <!-- Remember me and Forgot password -->
        <!-- ... -->

        <button
          type="submit"
          class="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg"
          >Sign in</button
        >
      </form>
    </div>
  </div>
</section>

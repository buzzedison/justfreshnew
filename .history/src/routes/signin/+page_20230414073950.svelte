<script>
  // import any required dependencies here
</script>

<div class="min-h-screen flex items-center justify-center rounded-lg">
  <div
    class="shadow-lg rounded-lg p-8 max-w-3xl w-4/5 sm:w-2/3 md:w-1/2 lg:w-2/5"
  >
    <h2 class="text-3xl font-semibold text-center mb-6">Sign in</h2>

    <form>
      <div class="mb-4">
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          class="mt-1 border-2 border-gray-300 focus:border-indigo-500 rounded-md w-full px-4 py-2"
        />
      </div>

      <div class="mb-4">
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          class="mt-1 border-2 border-gray-300 focus:border-indigo-500 rounded-md w-full px-4 py-2"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md mb-6"
        >Sign in</button
      >
    </form>

    <div class="text-center py-4">
      <p class="text-gray-600">Or sign in with:</p>
      <div class="flex justify-center items-center mt-2">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mx-2"
          >Facebook</button
        >

        <button
          class="bg-[#DB4437] hover:bg-[#C73227] text-white font-semibold py-2 px-4 rounded-md mx-2"
          >Google</button
        >
      </div>
    </div>
  </div>
</div>

<script>
  // Add your sign-in logic here
  function signInWithEmail() {
    // ...
  }

  function signInWithGoogle() {
    // ...
  }

  function signInWithFacebook() {
    // ...
  }
</script>

<div class="min-h-screen flex items-center justify-center gradient">
  <div class="bg-white rounded-lg shadow p-6 w-full max-w-md">
    <h2 class="text-2xl font-bold mb-4">Sign In</h2>

    <form class="space-y-4" on:submit|preventDefault={signInWithEmail}>
      <div class="flex flex-col">
        <label for="email" class="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          class="border border-gray-300 rounded p-2 text-sm"
          required
        />
      </div>

      <div class="flex flex-col">
        <label for="password" class="text-sm font-medium">Password</label>
        <input
          id="password"
          type="password"
          class="border border-gray-300 rounded p-2 text-sm"
          required
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 text-white rounded-md py-2 px-4 w-full font-semibold"
      >
        Sign In
      </button>
    </form>

    <div class="mt-6">
      <div class="text-center text-sm font-medium">or</div>
      <div class="flex space-x-4 justify-center mt-4">
        <button
          class="bg-blue-600 text-white rounded-md py-2 px-4 font-semibold"
          on:click={signInWithFacebook}
        >
          Sign In with Facebook
        </button>
        <button
          class="bg-red-600 text-white rounded-md py-2 px-4 font-semibold"
          on:click={signInWithGoogle}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .gradient {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
</style>

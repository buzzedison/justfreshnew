<script>
  import { authHandlers } from "$stores/store.js";

  async function handleSignOut() {
    try {
      await authHandlers.logout();
      // Redirect or perform any other action after signing out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }
</script>

<div>
  <h1>This is dashboard</h1>

  <button
    class="bg-black py-3 px-5 text-white rounded-lg"
    on:click={handleSignOut}>Sign out</button
  >
</div>

<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase/firebase.js";

  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  const nonAuthRoutes = [
    "/",
    "/signup",
    "/signin",
    "/products",
    "/products/new",
  ];

  onMount(async () => {
    console.log("app mounted");
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      const currentPath = window.location.pathname;
      if (!user && !nonAuthRoutes.includes(currentPath)) {
        // Redirect to the sign-in page if the user is not authenticated and trying to access a protected route
        window.location.href = "/signin";
        return;
      } else if (user && nonAuthRoutes.includes(currentPath)) {
        // Redirect to the dashboard if the user is authenticated and trying to access a non-authenticated route
        window.location.href = "/dashboard";
        return;
        // Redirect to the sign-in page if the user is not authenticated and trying to access a protected route
      }
      //add signedin user id using docref
    }); // Closing parenthesis for auth.onAuthStateChanged
  }); // Closing parenthesis and brace for onMount
</script>

<div>
  <Navbar />
  <slot />
  <Footer />
</div>

<script>
  // import Hero from "../components/HeroSection.svelte";
  import Hero from "../components/Hero.svelte";
  import SubSection from "../components/SubSection.svelte";
  import ShopGrid from "../components/ShopGrid.svelte";
  import BlogGrid from "../components/Blog.svelte";
</script>

<div>
  <Hero />
  <SubSection />
  <ShopGrid />
  <BlogGrid />

  <slot />
</div>

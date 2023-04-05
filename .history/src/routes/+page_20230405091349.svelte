<script>
  // import Hero from "../components/HeroSection.svelte";
  import Hero from "../components/Hero.svelte";
  import SubSection from "../components/SubSection.svelte";
  import ShopGrid from "../components/ShopGrid.svelte";
</script>

<div>
  <Hero />
  <SubSection />
  <ShopGrid />
  <slot />
</div>

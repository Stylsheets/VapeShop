<script>
	import '../app.postcss';
  import Navbar from "$components/Navbar.svelte";
</script>

<div class="bg-my-blueberry w-screen h-screen">
	<img src="/assets/bg.jpg" class="bg absolute top-0 right-0 h-full" alt="background" />
  <div class="absolute inset-0 z-10 bg-gradient-to-l from-my-blueberry via-transparent via-30% to-my-blueberry w-screen h-screen"></div>
  <div class="container mx-auto text-my-white z-20 relative">
    <Navbar />
    <div class="z-30 relative">
    <slot />
    </div>
  </div>
</div>

<style global>
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Inter&family=Inter:wght@900&display=swap');

    html, body {
        font-family: 'Inter', sans-serif;
    }
</style>
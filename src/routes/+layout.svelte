<script>
	import '../app.postcss';
</script>

<div class="bg-my-blueberry w-screen h-screen">
	<img src="/assets/bg.jpg" class="bg absolute top-0 right-0 h-full" alt="background image" />
  <div class="absolute inset-0 z-10 bg-gradient-to-l from-my-blueberry via-transparent via-30% to-my-blueberry w-screen h-screen"></div>
  <slot />
</div>

<style>
  .bg {}
</style>

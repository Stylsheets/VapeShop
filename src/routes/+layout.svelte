<script>
	import '../app.postcss';
	import Navbar from '$components/Navbar.svelte';
	import { page } from '$app/stores';
	import PageTransition from "../components/PageTransition.svelte";
	import ScrollHandler from "../components/ScrollHandler.svelte";
</script>

<div class="bg-my-blueberry w-screen h-screen">
	<img src="/assets/bg.jpg" class="bg absolute top-0 right-0 h-full" alt="background" />
	<div
		class="absolute inset-0 z-10 bg-gradient-to-l from-my-blueberry via-transparent via-30% to-my-blueberry w-screen h-screen"
	/>
	<div class="container mx-auto text-my-white z-20 relative">
		<Navbar />
		{#key $page.route.id}
			<PageTransition>
				<div class="z-30 relative">
					<slot />
				</div>
			</PageTransition>
		{/key}
	</div>
</div>

<ScrollHandler />

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Inter&family=Inter:wght@900&display=swap');

	html,
	body {
		font-family: 'Inter', sans-serif;
	}
</style>
<script>
	import { fly } from 'svelte/transition';
</script>

<div
	class="noScrollbar overflow-hidden"
	in:fly={{ x: -50, delay: 250 }}
	out:fly={{ x: -50, duration: 200 }}
>
	<slot />
</div>

<style global>
	*::-webkit-scrollbar {
		display: none;
		scrollbar-width: none;
		-ms-overflow-style: none; /* IE and Edge */
	}
	*::-webkit-scrollbar-track {
		background: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background: transparent;
	}
</style>

<script>
	import Hero from '$components/Hero.svelte';
	import Instagram from '../components/Icons/Instagram.svelte';
	import Twitter from '../components/Icons/Twitter.svelte';
	import Youtube from '../components/Icons/Youtube.svelte';
</script>

<div class="flex flex-col">
	<div class="flex justify-between">
		<div class="h-[38rem] flex flex-col justify-center items-center">
			<Hero />
		</div>
		<div />
	</div>
	<div class="flex flex-col w-full h-40">
		<div class="flex flex-col justify-between h-full">
			<div />
			<div class="flex gap-3 mt-auto">
				<a class="hover:opacity-50" href="#">
					<Instagram />
				</a>
				<a class="hover:opacity-50" href="#">
					<Twitter />
				</a>
				<a class="hover:opacity-50" href="#">
					<Youtube />
				</a>
			</div>
		</div>
	</div>
</div>

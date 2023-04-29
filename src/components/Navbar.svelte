<script lang="ts">
	import NavItem from './NavItem.svelte';
</script>

<div class="py-6">
	<div
		class="absolute inset-0 z-10 bg-gradient-to-b from-my-blueberry via-transparent to-transparent opacity-60 h-48"
	/>
	<div class="z-20 relative flex items-center justify-between">
		<a href="/" class="logo text-2xl">
			<span>vapeshop</span><span class="text-my-lightblue">.</span>
		</a>
		<div class="">
			<ul class="flex gap-20">
				<NavItem href="/">Home</NavItem>
				<NavItem href="/test">Test</NavItem>
				<NavItem href="#">Other Page</NavItem>
			</ul>
		</div>
		<div class="">
			<ul class="flex gap-5">
				<li>
					<button class="stroke-current hover:opacity-50">
						<svg
							class="w-6 h-6"
							aria-hidden="true"
							fill=""
							stroke-width="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</li>
				<li>
					<button class="stroke-current hover:opacity-50">
						<svg
							class="w-6 h-6"
							aria-hidden="true"
							fill=""
							stroke-width="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.logo {
		font-family: 'Comfortaa', cursive;
	}
</style>

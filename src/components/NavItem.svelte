<script lang="ts">
	export let href: string;

	let clazz = '';

	export { clazz as class };
</script>

<li class="hover:text-opacity-50 text-my-white {clazz}">
	<a {href}>
		<slot />
	</a>
</li>

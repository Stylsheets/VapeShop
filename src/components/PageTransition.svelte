<script>
  import { fly } from 'svelte/transition';
</script>

<div in:fly="{{ y: -50, delay: 250 }}" out:fly="{{ y: -50, duration: 200 }}">
  <slot />
</div>

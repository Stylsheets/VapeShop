<script lang="ts">
	import { onMount } from 'svelte';
  import {goto} from "$app/navigation";

	let ticking = false;

  let pages = ['/', '/test'];

	function handleScroll(delta: number) {
    if (delta > 0) {
      gotoNextPage()
    } else {
      gotoPrevPage()
    }
	}

  function gotoNextPage() {
    let currentPage = pages.indexOf(window.location.pathname);
    if (currentPage < pages.length - 1) {
      goto(pages[currentPage + 1]);
    }
  }

  function gotoPrevPage() {
    let currentPage = pages.indexOf(window.location.pathname);
    if (currentPage > 0) {
      goto(pages[currentPage - 1]);
    }
  }

	onMount(() => {
    document.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll(e.deltaY);
          ticking = false;
        });
        ticking = true;
      }
    });
	});
</script>

<slot />
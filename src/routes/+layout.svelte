<script lang="ts">
	import "../app.css";

	import { onMount } from "svelte";
	import { ModeWatcher, resetMode } from "mode-watcher";

	let { children } = $props();

	onMount(() => {
	});
</script>

<main>
</main>


<div>
	<ModeWatcher />
	{@render children()}
</div>

<style>
</style>

<script lang="ts">
	import "../app.css";

	import { onMount } from "svelte";
	import { ModeWatcher, resetMode, toggleMode, mode, setMode } from "mode-watcher";
	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import { Button } from "@/components/ui/button/index.ts";
	
	let { children } = $props();

	onMount(() => {
		setMode("light");
	});
</script>

<main>
</main>


<div>
	<ModeWatcher defaultMode={"light"} />
	{@render children()}
</div>


<Button class="fixed top-4 right-4" onclick={toggleMode} variant="outline" size="icon">
	<SunIcon
	class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
	/>
	<MoonIcon
	class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>


<style>
</style>


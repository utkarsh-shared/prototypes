import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: { // $lib: 'src/renderer/sveltekit/src/lib',
		// $routes: 'src/renderer/sveltekit/src/routes',
		// "@/*": "./path/to/lib/*",
		// "@/components/*": "./src/shadcn-lib/components",
		"@/*": "./src/shadcn-ui-lib/*" }
	}
};

export default config;

<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { ThumbsUp, Heart, Star, Lightbulb, Trophy } from '@lucide/svelte';

	const praises = [
		{ text: 'Ease of Use', mentions: 850, icon: Star },
		{ text: 'Excellent Customer Support', mentions: 620, icon: Heart },
		{ text: 'Reliable Performance', mentions: 480, icon: ThumbsUp },
		{ text: 'Innovative Features', mentions: 250, icon: Lightbulb },
		{ text: 'Great ROI', mentions: 145, icon: Trophy }
	];
</script>

<Card>
	<CardHeader>
		<CardTitle>Top Customer Praises (Last Week)</CardTitle>
        <CardDescription>What our customers love about our solution.</CardDescription>
	</CardHeader>
	<CardContent class="grid grid-cols-2 sm:grid-cols-3 gap-4">
		{#each praises as praise}
			<div
				class="flex flex-col items-center justify-center p-4 space-y-2 text-center bg-yellow-50 rounded-lg"
			>
				<div class="p-3 bg-yellow-100 rounded-full">
					<svelte:component this={praise.icon} class="w-6 h-6 text-yellow-600" />
				</div>
				<p class="text-sm font-semibold">{praise.text}</p>
				<p class="text-xs text-gray-500">{praise.mentions} mentions</p>
			</div>
		{/each}
	</CardContent>
</Card>
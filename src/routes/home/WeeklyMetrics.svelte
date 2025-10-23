<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { ArrowUp } from "@lucide/svelte";

  // These values would typically come from an API and be updated in real-time
  let totalSalesCalls = 128;
  let painPointsCaptured = 97;
  let objectionsCaptured = 75;
  let competitorMentions = 52;

</script>

<section class="w-full py-12 md:py-24">
    <div class="container px-4 md:px-6">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                        Total Sales Calls This Week
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{totalSalesCalls}</div>
                    <p class="text-xs text-muted-foreground">+10% from last week</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                        Pain Points Captured
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{painPointsCaptured}</div>
                    <p class="text-xs text-muted-foreground">+15% from last week</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                        Objections Captured
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{objectionsCaptured}</div>
                     <p class="text-xs text-muted-foreground">-5% from last week</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">
                        Competitor Mentions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{competitorMentions}</div>
                     <p class="text-xs text-muted-foreground">+8% from last week</p>
                </CardContent>
            </Card>
        </div>
    </div>
</section>
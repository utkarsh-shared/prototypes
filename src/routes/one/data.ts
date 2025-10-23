// src/lib/data.ts

export interface MonthlySalesData {
	month: string;
	totalRevenue: number;
	averageDealSize: number;
	winRate: number; // percentage
	salesCycleLength: number; // in days
	callActivity: {
		totalCalls: number;
		averageCallDuration: number; // in minutes
	};
	pipeline: {
		newLeads: number;
		newOpportunities: number;
		pipelineValue: number;
	};
	customerSuccess: {
		cac: number; // customer acquisition cost
		clv: number; // customer lifetime value
		churnRate: number; // percentage
	};
	gongInsights: {
		talkToListenRatio: number; // percentage of sales rep talking time
		competitorMentions: {
			[competitor: string]: number;
		};
		keywordTrends: {
			[keyword: string]: number;
		};
	};
}

export const annualSalesData: MonthlySalesData[] = [
	{
		month: 'January',
		totalRevenue: 250000,
		averageDealSize: 25000,
		winRate: 20,
		salesCycleLength: 45,
		callActivity: {
			totalCalls: 1200,
			averageCallDuration: 15,
		},
		pipeline: {
			newLeads: 500,
			newOpportunities: 100,
			pipelineValue: 2000000,
		},
		customerSuccess: {
			cac: 5000,
			clv: 75000,
			churnRate: 5,
		},
		gongInsights: {
			talkToListenRatio: 65,
			competitorMentions: {
				CompetitorA: 15,
				CompetitorB: 8,
			},
			keywordTrends: {
				pricing: 50,
				features: 35,
				integration: 20,
			},
		},
	},
	// ... (data for February to December)
	{
		month: 'December',
		totalRevenue: 450000,
		averageDealSize: 32000,
		winRate: 28,
		salesCycleLength: 38,
		callActivity: {
			totalCalls: 1500,
			averageCallDuration: 18,
		},
		pipeline: {
			newLeads: 650,
			newOpportunities: 150,
			pipelineValue: 3500000,
		},
		customerSuccess: {
			cac: 4500,
			clv: 90000,
			churnRate: 3,
		},
		gongInsights: {
			talkToListenRatio: 55,
			competitorMentions: {
				CompetitorA: 25,
				CompetitorB: 12,
			},
			keywordTrends: {
				pricing: 70,
				features: 50,
				integration: 30,
			},
		},
	},
];
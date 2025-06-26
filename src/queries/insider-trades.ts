import { buildQuery } from '../_query-builder.js';

export const InsiderTradesAPI = {
	async searchInsiderTrades({
		options,
	}: {
		options: InsiderTradeQueryOptions;
	}): Promise<InsiderTradesArr> {
		const query = buildQuery('insider-trading/search', { ...options });
		const response = await fetch(query);
		return await response.json();
	},
};

type InsiderTradeQueryOptions = {
	symbol?: string;
	from?: Date;
	to?: Date;
	reportingCik?: string;
	companyCik?: string;
	transactionType?: string;
};

export interface InsiderTrades {
	symbol: string;
	filingDate: Date;
	transactionDate: Date;
	reportingCik: string;
	companyCik: string;
	transactionType: string;
	securitiesOwned: number;
	reportingName: string;
	typeOfOwner: string;
	acquisitionOrDisposition: string;
	directOrIndirect: string;
	formType: string;
	securitiesTransacted: number;
	price: number;
	securityName: string;
	url: string;
}

export type InsiderTradesArr = InsiderTrades[];

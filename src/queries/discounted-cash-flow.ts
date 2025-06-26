import { buildQuery } from '../_query-builder.js';

export const DiscountedCashFlowAPI = {
	async dcfValuation(symbol: string): Promise<DcfValuationArr> {
		const query = buildQuery('dcf-valuation', { symbol });
		const response = await fetch(query);
		return await response.json();
	},
	async leveredDcf(symbol: string): Promise<LeveredDcfArr> {
		const query = buildQuery('levered-dcf', { symbol });
		const response = await fetch(query);
		return await response.json();
	},
};
export interface DcfValuation {
	symbol: string;
	date: Date;
	dcf: number;
	'Stock Price': number;
}
export type DcfValuationArr = DcfValuation[];
export interface LeveredDcf {
	symbol: string;
	date: Date;
	dcf: number;
	'Stock Price': number;
}
export type LeveredDcfArr = LeveredDcf[];

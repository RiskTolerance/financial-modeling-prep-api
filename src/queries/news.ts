import { buildQuery } from '../_query-builder.js';

export const NewsAPI = {
	/**
	 * @returns The stock news for the given symbol.
	 */
	async stockNews(
		symbol: string,
		options: {
			from: Date;
			to: Date;
			page: number;
			limit: number;
		}
	): Promise<StockNewsArr> {
		const query = buildQuery('news/stock', {
			symbol,
			...options,
		});
		const response = await fetch(query);
		const data = await response.json();
		return data;
	},

	/**
	 * @returns The press releases for the given symbol.
	 */
	async pressReleases(
		symbol: string,
		options: {
			from: Date;
			to: Date;
			page: number;
			limit: number;
		}
	): Promise<PressReleaseArr> {
		const query = buildQuery('press-releases', {
			symbol,
			...options,
		});
		const response = await fetch(query);
		const data = await response.json();
		return data;
	},

	// The following endpoints are technically under the analyst catagory, but they fit in the news catagory better.

	/**
	 * @returns The price target news for the given symbol.
	 */
	async priceTargetNews(
		symbol: string,
		limit: number
	): Promise<PriceTargetNewsArr> {
		const query = buildQuery('price-target-news', {
			symbol,
			limit,
		});
		const response = await fetch(query);
		const data = await response.json();
		return data;
	},

	/**
	 * @returns The stock grade news for the given symbol.
	 */
	async stockGradeNews(
		symbol: string,
		options: { page: number; limit: number }
	): Promise<StockGradeNewsArr> {
		const query = buildQuery('grades-news', {
			symbol,
			...options,
		});
		const response = await fetch(query);
		const data = await response.json();
		return data;
	},
};

// VANILLA TYPESCRIPT TYPES ------------------------------------------------------------

export interface StockNews {
	symbol: string;
	publishedDate: string | Date;
	publisher: string;
	title: string;
	image: string;
	site: string;
	text: string;
	url: string;
}
export type StockNewsArr = StockNews[];

export interface PressRelease {
	symbol: string;
	publishedDate: string | Date;
	publisher: string;
	title: string;
	image: string;
	site: string;
	text: string;
	url: string;
}
export type PressReleaseArr = PressRelease[];

export interface PriceTargetNews {
	symbol: string;
	publishedDate: string | Date;
	newsURL: string;
	newsTitle: string;
	analystName: string;
	priceTarget: number;
	adjPriceTarget: number;
	priceWhenPosted: number;
	newsPublisher: string;
	newsBaseURL: string;
	analystCompany: string;
}
export type PriceTargetNewsArr = PriceTargetNews[];

export interface StockGradeNews {
	symbol: string;
	publishedDate: string | Date;
	newsURL: string;
	newsTitle: string;
	newsBaseURL: string;
	newsPublisher: string;
	newGrade: string;
	previousGrade: string | null;
	gradingCompany: string;
	action: string;
	priceWhenPosted: number;
}
export type StockGradeNewsArr = StockGradeNews[];

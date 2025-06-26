import { AnalystAPI } from './queries/analyst.js';
import { ChartAPI } from './queries/chart.js';
import { CompanyAPI } from './queries/company.js';
import { DiscountedCashFlowAPI } from './queries/discounted-cash-flow.js';
import { DirectoryAPI } from './queries/directory.js';
import { EconomicsAPI } from './queries/economics.js';
import { InsiderTradesAPI } from './queries/insider-trades.js';
import { MarketPerformanceAPI } from './queries/market-performance.js';
import { NewsAPI } from './queries/news.js';
import { SearchAPI } from './queries/search.js';
import { StatementsAPI } from './queries/statements.js';
import { TechnicalAPI } from './queries/technical-indicators.js';

export const FmpApi = {
	Analyst: AnalystAPI,
	Chart: ChartAPI,
	Company: CompanyAPI,
	DiscountedCashFlow: DiscountedCashFlowAPI,
	Directory: DirectoryAPI,
	Economics: EconomicsAPI,
	InsiderTrades: InsiderTradesAPI,
	MarketPerformance: MarketPerformanceAPI,
	News: NewsAPI,
	Search: SearchAPI,
	Statements: StatementsAPI,
	Technical: TechnicalAPI,
};

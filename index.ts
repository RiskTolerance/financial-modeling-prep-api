import { AnalystAPI } from './src/queries/analyst';
import { ChartAPI } from './src/queries/chart';
import { CompanyAPI } from './src/queries/company';
import { DiscountedCashFlowAPI } from './src/queries/discounted-cash-flow';
import { DirectoryAPI } from './src/queries/directory';
import { EconomicsAPI } from './src/queries/economics';
import { InsiderTradesAPI } from './src/queries/insider-trades';
import { MarketPerformanceAPI } from './src/queries/market-performance';
import { NewsAPI } from './src/queries/news';
import { SearchAPI } from './src/queries/search';
import { StatementsAPI } from './src/queries/statements';
import { TechnicalAPI } from './src/queries/technical-indicators';

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

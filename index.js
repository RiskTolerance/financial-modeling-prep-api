import { AnalystAPI } from './queries/analyst';
import { ChartAPI } from './queries/chart';
import { CompanyAPI } from './queries/company';
import { DiscountedCashFlowAPI } from './queries/discounted-cash-flow';
import { DirectoryAPI } from './queries/directory';
import { EconomicsAPI } from './queries/economics';
import { InsiderTradesAPI } from './queries/insider-trades';
import { MarketPerformanceAPI } from './queries/market-performance';
import { NewsAPI } from './queries/news';
import { SearchAPI } from './queries/search';
import { StatementsAPI } from './queries/statements';
import { TechnicalAPI } from './queries/technical-indicators';
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

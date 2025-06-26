import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { StatementsAPI } from './statements';
import { mockFetch, resetFetchMocks } from '../../test/utils/api-test-utils';

const TEST_SYMBOL = 'AAPL';
const TEST_LIMIT = 1;
const TEST_PERIOD = 'annual';

const mockIncomeStatement = [
	{ symbol: TEST_SYMBOL, date: '2024-01-01', reportedCurrency: 'USD' },
];
const mockBalanceSheet = [
	{ symbol: TEST_SYMBOL, date: '2024-01-01', reportedCurrency: 'USD' },
];
const mockCashFlowStatement = [
	{ symbol: TEST_SYMBOL, date: '2024-01-01', reportedCurrency: 'USD' },
];
const mockKeyMetrics = [
	{
		symbol: TEST_SYMBOL,
		date: '2024-01-01',
		fiscalYear: '2023',
		period: 'annual',
		reportedCurrency: 'USD',
		marketCap: 1,
		enterpriseValue: 1,
	},
];
const mockFinancialRatios = [
	{
		symbol: TEST_SYMBOL,
		date: '2024-01-01',
		fiscalYear: '2023',
		period: 'annual',
		reportedCurrency: 'USD',
		grossProfitMargin: 1,
	},
];
const mockKeyMetricsTtm = [
	{ symbol: TEST_SYMBOL, marketCap: 1, enterpriseValueTTM: 1 },
];
const mockFinancialRatiosTtm = [
	{ symbol: TEST_SYMBOL, grossProfitMarginTTM: 1 },
];
const mockFinancialScores = [
	{ symbol: TEST_SYMBOL, reportedCurrency: 'USD', altmanZScore: 1 },
];
const mockOwnerEarnings = [
	{
		symbol: TEST_SYMBOL,
		reportedCurrency: 'USD',
		fiscalYear: '2023',
		period: 'annual',
		date: '2024-01-01',
		averagePPE: 1,
		maintenanceCapex: 1,
		ownersEarnings: 1,
		growthCapex: 1,
		ownersEarningsPerShare: 1,
	},
];
const mockEnterpriseValues = [
	{
		symbol: TEST_SYMBOL,
		date: '2024-01-01',
		stockPrice: 1,
		numberOfShares: 1,
		marketCapitalization: 1,
		minusCashAndCashEquivalents: 1,
		addTotalDebt: 1,
		enterpriseValue: 1,
	},
];
const mockIncomeStatementGrowth = [
	{
		symbol: TEST_SYMBOL,
		date: '2024-01-01',
		fiscalYear: '2023',
		period: 'annual',
		reportedCurrency: 'USD',
		growthRevenue: 1,
	},
];
const mockBalanceSheetGrowth = [
	{
		symbol: TEST_SYMBOL,
		date: '2024-01-01',
		fiscalYear: '2023',
		period: 'annual',
		reportedCurrency: 'USD',
		growthCashAndCashEquivalents: 1,
	},
];
const mockCashFlowStatementGrowth = [
	{
		symbol: TEST_SYMBOL,
		date: '2024-01-01',
		fiscalYear: '2023',
		period: 'annual',
		reportedCurrency: 'USD',
		growthNetIncome: 1,
	},
];

describe('StatementsAPI', () => {
	beforeEach(() => {
		process.env.FMP_API_KEY = 'test-key';
	});
	afterEach(() => {
		resetFetchMocks();
	});

	it('should fetch income statement', async () => {
		const fetchMock = mockFetch(mockIncomeStatement);
		const result = await StatementsAPI.incomeStatement(TEST_SYMBOL, {
			limit: TEST_LIMIT,
			period: TEST_PERIOD,
		});
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockIncomeStatement);
	});

	it('should fetch balance sheet', async () => {
		const fetchMock = mockFetch(mockBalanceSheet);
		const result = await StatementsAPI.balanceSheet(TEST_SYMBOL, {
			limit: TEST_LIMIT,
			period: TEST_PERIOD,
		});
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockBalanceSheet);
	});

	it('should fetch cash flow statement', async () => {
		const fetchMock = mockFetch(mockCashFlowStatement);
		const result = await StatementsAPI.cashFlowStatement(TEST_SYMBOL, {
			limit: TEST_LIMIT,
			period: TEST_PERIOD,
		});
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockCashFlowStatement);
	});

	it('should fetch key metrics', async () => {
		const fetchMock = mockFetch(mockKeyMetrics);
		const result = await StatementsAPI.keyMetrics(TEST_SYMBOL, {
			limit: TEST_LIMIT,
			period: 'annual',
		});
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockKeyMetrics);
	});

	it('should fetch financial ratios', async () => {
		const fetchMock = mockFetch(mockFinancialRatios);
		const result = await StatementsAPI.financialRatios(TEST_SYMBOL, {
			limit: TEST_LIMIT,
			period: 'annual',
		});
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockFinancialRatios);
	});

	it('should fetch key metrics TTM', async () => {
		const fetchMock = mockFetch(mockKeyMetricsTtm);
		const result = await StatementsAPI.keyMetricsTtm(TEST_SYMBOL);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockKeyMetricsTtm);
	});

	it('should fetch financial ratios TTM', async () => {
		const fetchMock = mockFetch(mockFinancialRatiosTtm);
		const result = await StatementsAPI.financialRatiosTtm(TEST_SYMBOL);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockFinancialRatiosTtm);
	});

	it('should fetch financial scores', async () => {
		const fetchMock = mockFetch(mockFinancialScores);
		const result = await StatementsAPI.financialScores(TEST_SYMBOL);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockFinancialScores);
	});

	it('should fetch owner earnings', async () => {
		const fetchMock = mockFetch(mockOwnerEarnings);
		const result = await StatementsAPI.ownerEarnings(TEST_SYMBOL, TEST_LIMIT);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockOwnerEarnings);
	});

	it('should fetch enterprise values', async () => {
		const fetchMock = mockFetch(mockEnterpriseValues);
		const result = await StatementsAPI.enterpriseValues(
			TEST_SYMBOL,
			TEST_LIMIT,
			TEST_PERIOD
		);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockEnterpriseValues);
	});

	it('should fetch income statement growth', async () => {
		const fetchMock = mockFetch(mockIncomeStatementGrowth);
		const result = await StatementsAPI.incomeStatementGrowth(
			TEST_SYMBOL,
			TEST_LIMIT,
			TEST_PERIOD
		);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockIncomeStatementGrowth);
	});

	it('should fetch balance sheet growth', async () => {
		const fetchMock = mockFetch(mockBalanceSheetGrowth);
		const result = await StatementsAPI.balanceSheetGrowth(
			TEST_SYMBOL,
			TEST_LIMIT,
			TEST_PERIOD
		);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockBalanceSheetGrowth);
	});

	it('should fetch cash flow statement growth', async () => {
		const fetchMock = mockFetch(mockCashFlowStatementGrowth);
		const result = await StatementsAPI.cashFlowStatementGrowth(
			TEST_SYMBOL,
			TEST_LIMIT,
			TEST_PERIOD
		);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockCashFlowStatementGrowth);
	});

	it('should handle fetch error for incomeStatement', async () => {
		const error = new Error('Network error');
		const spy = vi.spyOn(global, 'fetch').mockRejectedValue(error);
		await expect(
			StatementsAPI.incomeStatement(TEST_SYMBOL, {
				limit: TEST_LIMIT,
				period: TEST_PERIOD,
			})
		).rejects.toThrow('Network error');
		spy.mockRestore();
	});
});

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { MarketPerformanceAPI } from './market-performance.js';
import { mockFetch, resetFetchMocks } from '../../test/utils/api-test-utils.js';

const apiKey = process.env.FMP_API_KEY!;
const marketApi = MarketPerformanceAPI(apiKey);

const TEST_EXCHANGE = 'NASDAQ';
const TEST_SECTOR = 'Technology';
const TEST_INDUSTRY = 'Software - Application';
const TEST_DATE = new Date('2024-01-01');
const TEST_FROM = new Date('2024-01-01');
const TEST_TO = new Date('2024-01-31');

const mockMarketSectorPerformance = [
	{
		date: '2024-01-01',
		sector: TEST_SECTOR,
		exchange: TEST_EXCHANGE,
		averageChange: 1.23,
	},
];
const mockIndustryPerformance = [
	{
		date: '2024-01-01',
		industry: TEST_INDUSTRY,
		exchange: TEST_EXCHANGE,
		averageChange: 2.34,
	},
];
const mockSectorPE = [
	{
		date: '2024-01-01',
		sector: TEST_SECTOR,
		exchange: TEST_EXCHANGE,
		pe: 25.5,
	},
];
const mockIndustryPE = [
	{
		date: '2024-01-01',
		industry: TEST_INDUSTRY,
		exchange: TEST_EXCHANGE,
		pe: 30.1,
	},
];
const mockBiggestLosers = [
	{
		symbol: 'AAPL',
		price: 150,
		name: 'Apple',
		change: -5,
		changesPercentage: -3.2,
		exchange: TEST_EXCHANGE,
	},
];
const mockBiggestGainers = [
	{
		symbol: 'MSFT',
		price: 300,
		name: 'Microsoft',
		change: 10,
		changesPercentage: 3.5,
		exchange: TEST_EXCHANGE,
	},
];
const mockMostActive = [
	{
		symbol: 'TSLA',
		price: 700,
		name: 'Tesla',
		change: 15,
		changesPercentage: 2.1,
		exchange: TEST_EXCHANGE,
	},
];

describe('MarketPerformanceAPI', () => {
	beforeEach(() => {
		process.env.FMP_API_KEY = 'test-key';
	});
	afterEach(() => {
		resetFetchMocks();
	});

	it('should fetch market sector performance history', async () => {
		const fetchMock = mockFetch(mockMarketSectorPerformance);
		const result = await marketApi.marketSectorPerformanceHistory(
			TEST_FROM,
			TEST_TO,
			TEST_EXCHANGE,
			TEST_SECTOR
		);
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockMarketSectorPerformance);
	});

	it('should fetch industry performance history', async () => {
		const fetchMock = mockFetch(mockIndustryPerformance);
		const result = await marketApi.industryPerformanceHistory({
			options: {
				from: TEST_FROM,
				to: TEST_TO,
				exchange: TEST_EXCHANGE,
				industry: TEST_INDUSTRY,
			},
		});
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockIndustryPerformance);
	});

	it('should fetch sector price/earnings history', async () => {
		const fetchMock = mockFetch(mockSectorPE);
		const result = await marketApi.sectorPriceEarningsHistory({
			options: {
				date: TEST_DATE,
				exchange: TEST_EXCHANGE,
				sector: TEST_SECTOR,
			},
		});
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockSectorPE);
	});

	it('should fetch industry price/earnings history', async () => {
		const fetchMock = mockFetch(mockIndustryPE);
		const result = await marketApi.industryPriceEarningsHistory({
			options: {
				from: TEST_FROM,
				to: TEST_TO,
				exchange: TEST_EXCHANGE,
				industry: TEST_INDUSTRY,
			},
		});
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockIndustryPE);
	});

	it('should fetch biggest losers', async () => {
		const fetchMock = mockFetch(mockBiggestLosers);
		const result = await marketApi.biggestLosers();
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockBiggestLosers);
	});

	it('should fetch biggest gainers', async () => {
		const fetchMock = mockFetch(mockBiggestGainers);
		const result = await marketApi.biggestGainers();
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockBiggestGainers);
	});

	it('should fetch most active', async () => {
		const fetchMock = mockFetch(mockMostActive);
		const result = await marketApi.mostActive();
		expect(fetchMock).toHaveBeenCalledOnce();
		expect(result).toEqual(mockMostActive);
	});

	it('should handle fetch error for marketSectorPerformanceHistory', async () => {
		const error = new Error('Network error');
		const spy = vi.spyOn(global, 'fetch').mockRejectedValue(error);
		await expect(
			marketApi.marketSectorPerformanceHistory(
				TEST_FROM,
				TEST_TO,
				TEST_EXCHANGE,
				TEST_SECTOR
			)
		).rejects.toThrow('Network error');
		spy.mockRestore();
	});
});

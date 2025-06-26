export declare const FmpApi: {
    Analyst: {
        financialEstimates(symbol: string, options: {
            page: number;
            limit: number;
        }): Promise<import("./queries/analyst").FinancialEstimatesArr>;
        ratingSnapshot(symbol: string): Promise<import("./queries/analyst").RatingsSnapshotArr>;
        historicalRatings(symbol: string, limit: number): Promise<import("./queries/analyst").HistoricalRatingsArr>;
        analystPriceTarget(symbol: string): Promise<import("./queries/analyst").AnalystPriceTargetArr>;
        analystPriceTargetConsensus(symbol: string): Promise<import("./queries/analyst").AnalystPriceTargetConsensusArr>;
        stockGradesConsensus(symbol: string): Promise<import("./queries/analyst").StockGradesConsensusArr>;
        stockGradeChanges(symbol: string): Promise<import("./queries/analyst").StockGradeChangesArr>;
        stockGradeHistory(symbol: string, limit: number): Promise<import("./queries/analyst").StockGradesHistoryArr>;
    };
    Chart: {
        light(symbol: string, options: {
            from: Date;
            to: Date;
        }): Promise<import("./queries/chart").ChartLightArr>;
        full(symbol: string, options: {
            from: Date;
            to: Date;
        }): Promise<import("./queries/chart").ChartFullArr>;
        unadjustedStockPrice(symbol: string, options: {
            from: Date;
            to: Date;
        }): Promise<import("./queries/chart").UnadjustedStockPriceArr>;
        dividendAdjustedStockPrice(symbol: string, options: {
            from: Date;
            to: Date;
        }): Promise<import("./queries/chart").DividendAdjustedStockPriceArr>;
        stockPriceInterval(symbol: string, interval: "5min" | "15min" | "30min" | "1hour" | "4hour", options: {
            from: Date;
            to: Date;
            nonadjusted?: boolean;
        }): Promise<import("./queries/chart").StockPriceIntervalArr>;
    };
    Company: {
        profile(symbol: string): Promise<import("./queries/company").CompanyProfileArr>;
        employeeCount(symbol: string, limit: number): Promise<import("./queries/company").CompanyEmployeeCountArr>;
        historicalEmployeeCount(symbol: string, limit: number): Promise<import("./queries/company").HistoricalCompanyEmployeeCountArr>;
        marketCap(symbol: string): Promise<import("./queries/company").CompanyMarketCapArr>;
    };
    DiscountedCashFlow: {
        dcfValuation(symbol: string): Promise<import("./queries/discounted-cash-flow").DcfValuationArr>;
        leveredDcf(symbol: string): Promise<import("./queries/discounted-cash-flow").LeveredDcfArr>;
    };
    Directory: {
        companySymbolList(): Promise<import("./queries/directory").CompanySymbolArr>;
        companyFinancialSymbolList(): Promise<import("./queries/directory").CompanyFinancialSymbolArr>;
        activelyTradingList(): Promise<import("./queries/directory").ActivelyTradingArr>;
        availableSectors(): Promise<import("./queries/directory").SectorArr>;
        availableIndustries(): Promise<import("./queries/directory").IndustryArr>;
    };
    Economics: {
        treasuryRates(): Promise<import("./queries/economics").TreasuryRatesArr>;
        economicIndicators(name: import("./queries/economics").EconomicIndicatorNameOptions, options: {
            from: Date;
            to: Date;
        }): Promise<import("./queries/economics").EconomicIndicatorsArr>;
    };
    InsiderTrades: {
        searchInsiderTrades({ options, }: {
            options: {
                symbol?: string;
                from?: Date;
                to?: Date;
                reportingCik?: string;
                companyCik?: string;
                transactionType?: string;
            };
        }): Promise<import("./queries/insider-trades").InsiderTradesArr>;
    };
    MarketPerformance: {
        marketSectorPerformanceHistory(from: Date, to: Date, exchange: "NASDAQ" | "NYSE" | "AMEX", sector: import("./queries/search").MarketSector): Promise<import("./queries/market-performance").MarketSectorPerformanceArr>;
        industryPerformanceHistory<S extends import("./queries/search").MarketSector = keyof {
            Healthcare: "Biotechnology" | "Medical - Devices" | "Drug Manufacturers - Specialty & Generic" | "Medical - Instruments & Supplies" | "Diagnostics & Research" | "Medical - Care Facilities" | "Health Information Services" | "Drug Manufacturers - General" | "Medical - Distribution" | "Healthcare Plans" | "Pharmaceutical Retailers";
            Financials: "Banks - Regional" | "Shell Companies" | "Asset Management" | "Capital Markets" | "Credit Services" | "Insurance - Property & Casualty" | "Insurance Brokers" | "Banks - Diversified" | "Insurance - Specialty" | "Insurance - Life" | "Financial Data & Stock Exchanges" | "Mortgage Finance" | "Insurance - Diversified" | "Insurance - Reinsurance" | "Financial Conglomerates";
            Technology: "Software - Application" | "Software - Infrastructure" | "Information Technology Services" | "Semiconductors" | "Communication Equipment" | "Electronic Components" | "Computer Hardware" | "Scientific & Technical Instruments" | "Semiconductor Equipment & Materials" | "Solar" | "Consumer Electronics" | "Electronics & Computer Distribution";
            Energy: "Oil & Gas Exploration & Production" | "Oil & Gas Midstream" | "Oil & Gas Equipment & Services" | "Oil & Gas Integrated" | "Oil & Gas Refining & Marketing" | "Uranium" | "Oil & Gas Drilling" | "Thermal Coal";
            Industrials: "Specialty Industrial Machinery" | "Aerospace & Defense" | "Engineering & Construction" | "Electrical Equipment & Parts" | "Specialty Business Services" | "Marine Shipping" | "Building Products & Equipment" | "Integrated Freight & Logistics" | "Farm & Heavy Construction Machinery" | "Security & Protection Services" | "Conglomerates" | "Staffing & Employment Services" | "Rental & Leasing Services" | "Industrial Distribution" | "Airlines" | "Pollution & Treatment Controls" | "Waste Management" | "Metal Fabrication" | "Trucking" | "Consulting Services" | "Railroads" | "Tools & Accessories" | "Airports & Air Services" | "Business Equipment & Supplies" | "Infrastructure Operations";
            'Communication Services': "Internet Content & Information" | "Telecom Services" | "Entertainment" | "Advertising Agencies" | "Electronic Gaming & Multimedia" | "Broadcasting" | "Publishing";
            'Consumer Staples': "Packaged Foods" | "Education & Training Services" | "Household & Personal Products" | "Farm Products" | "Beverages - Non-Alcoholic" | "Food Distribution" | "Beverages - Wineries & Distilleries" | "Grocery Stores" | "Tobacco" | "Discount Stores" | "Beverages - Brewers" | "Confectioners";
            'Consumer Discretionary': "Auto Parts" | "Restaurants" | "Specialty Retail" | "Internet Retail" | "Furnishings, Fixtures & Appliances" | "Apparel Retail" | "Auto Manufacturers" | "Leisure" | "Auto & Truck Dealerships" | "Apparel Manufacturing" | "Packaging & Containers" | "Residential Construction" | "Travel Services" | "Resorts & Casinos" | "Gambling" | "Footwear & Accessories" | "Recreational Vehicles" | "Personal Services" | "Lodging" | "Luxury Goods" | "Home Improvement Retail" | "Textile Manufacturing" | "Department Stores";
            Materials: "Specialty Chemicals" | "Gold" | "Other Industrial Metals & Mining" | "Steel" | "Chemicals" | "Agricultural Inputs" | "Building Materials" | "Other Precious Metals & Mining" | "Copper" | "Coking Coal" | "Lumber & Wood Production" | "Paper & Paper Products" | "Silver" | "Aluminum";
            'Real Estate': "Real Estate - Services" | "REIT - Mortgage" | "REIT - Retail" | "REIT - Office" | "REIT - Residential" | "REIT - Specialty" | "REIT - Healthcare Facilities" | "REIT - Industrial" | "REIT - Diversified" | "Real Estate - Development" | "REIT - Hotel & Motel" | "Real Estate - Diversified";
            Utilities: "Utilities - Regulated Electric" | "Utilities - Renewable" | "Utilities - Regulated Gas" | "Utilities - Regulated Water" | "Utilities - Diversified" | "Utilities - Independent Power Producers";
        }>({ options, }: {
            options: import("./queries/market-performance").IndustryOptions<S>;
        }): Promise<import("./queries/market-performance").IndustryPerformanceArr>;
        sectorPriceEarningsHistory<S extends import("./queries/search").MarketSector = keyof {
            Healthcare: "Biotechnology" | "Medical - Devices" | "Drug Manufacturers - Specialty & Generic" | "Medical - Instruments & Supplies" | "Diagnostics & Research" | "Medical - Care Facilities" | "Health Information Services" | "Drug Manufacturers - General" | "Medical - Distribution" | "Healthcare Plans" | "Pharmaceutical Retailers";
            Financials: "Banks - Regional" | "Shell Companies" | "Asset Management" | "Capital Markets" | "Credit Services" | "Insurance - Property & Casualty" | "Insurance Brokers" | "Banks - Diversified" | "Insurance - Specialty" | "Insurance - Life" | "Financial Data & Stock Exchanges" | "Mortgage Finance" | "Insurance - Diversified" | "Insurance - Reinsurance" | "Financial Conglomerates";
            Technology: "Software - Application" | "Software - Infrastructure" | "Information Technology Services" | "Semiconductors" | "Communication Equipment" | "Electronic Components" | "Computer Hardware" | "Scientific & Technical Instruments" | "Semiconductor Equipment & Materials" | "Solar" | "Consumer Electronics" | "Electronics & Computer Distribution";
            Energy: "Oil & Gas Exploration & Production" | "Oil & Gas Midstream" | "Oil & Gas Equipment & Services" | "Oil & Gas Integrated" | "Oil & Gas Refining & Marketing" | "Uranium" | "Oil & Gas Drilling" | "Thermal Coal";
            Industrials: "Specialty Industrial Machinery" | "Aerospace & Defense" | "Engineering & Construction" | "Electrical Equipment & Parts" | "Specialty Business Services" | "Marine Shipping" | "Building Products & Equipment" | "Integrated Freight & Logistics" | "Farm & Heavy Construction Machinery" | "Security & Protection Services" | "Conglomerates" | "Staffing & Employment Services" | "Rental & Leasing Services" | "Industrial Distribution" | "Airlines" | "Pollution & Treatment Controls" | "Waste Management" | "Metal Fabrication" | "Trucking" | "Consulting Services" | "Railroads" | "Tools & Accessories" | "Airports & Air Services" | "Business Equipment & Supplies" | "Infrastructure Operations";
            'Communication Services': "Internet Content & Information" | "Telecom Services" | "Entertainment" | "Advertising Agencies" | "Electronic Gaming & Multimedia" | "Broadcasting" | "Publishing";
            'Consumer Staples': "Packaged Foods" | "Education & Training Services" | "Household & Personal Products" | "Farm Products" | "Beverages - Non-Alcoholic" | "Food Distribution" | "Beverages - Wineries & Distilleries" | "Grocery Stores" | "Tobacco" | "Discount Stores" | "Beverages - Brewers" | "Confectioners";
            'Consumer Discretionary': "Auto Parts" | "Restaurants" | "Specialty Retail" | "Internet Retail" | "Furnishings, Fixtures & Appliances" | "Apparel Retail" | "Auto Manufacturers" | "Leisure" | "Auto & Truck Dealerships" | "Apparel Manufacturing" | "Packaging & Containers" | "Residential Construction" | "Travel Services" | "Resorts & Casinos" | "Gambling" | "Footwear & Accessories" | "Recreational Vehicles" | "Personal Services" | "Lodging" | "Luxury Goods" | "Home Improvement Retail" | "Textile Manufacturing" | "Department Stores";
            Materials: "Specialty Chemicals" | "Gold" | "Other Industrial Metals & Mining" | "Steel" | "Chemicals" | "Agricultural Inputs" | "Building Materials" | "Other Precious Metals & Mining" | "Copper" | "Coking Coal" | "Lumber & Wood Production" | "Paper & Paper Products" | "Silver" | "Aluminum";
            'Real Estate': "Real Estate - Services" | "REIT - Mortgage" | "REIT - Retail" | "REIT - Office" | "REIT - Residential" | "REIT - Specialty" | "REIT - Healthcare Facilities" | "REIT - Industrial" | "REIT - Diversified" | "Real Estate - Development" | "REIT - Hotel & Motel" | "Real Estate - Diversified";
            Utilities: "Utilities - Regulated Electric" | "Utilities - Renewable" | "Utilities - Regulated Gas" | "Utilities - Regulated Water" | "Utilities - Diversified" | "Utilities - Independent Power Producers";
        }>({ options, }: {
            options: import("./queries/market-performance").SectorOptions<S>;
        }): Promise<import("./queries/market-performance").SectorPriceEarningsArr>;
        industryPriceEarningsHistory<S extends import("./queries/search").MarketSector = keyof {
            Healthcare: "Biotechnology" | "Medical - Devices" | "Drug Manufacturers - Specialty & Generic" | "Medical - Instruments & Supplies" | "Diagnostics & Research" | "Medical - Care Facilities" | "Health Information Services" | "Drug Manufacturers - General" | "Medical - Distribution" | "Healthcare Plans" | "Pharmaceutical Retailers";
            Financials: "Banks - Regional" | "Shell Companies" | "Asset Management" | "Capital Markets" | "Credit Services" | "Insurance - Property & Casualty" | "Insurance Brokers" | "Banks - Diversified" | "Insurance - Specialty" | "Insurance - Life" | "Financial Data & Stock Exchanges" | "Mortgage Finance" | "Insurance - Diversified" | "Insurance - Reinsurance" | "Financial Conglomerates";
            Technology: "Software - Application" | "Software - Infrastructure" | "Information Technology Services" | "Semiconductors" | "Communication Equipment" | "Electronic Components" | "Computer Hardware" | "Scientific & Technical Instruments" | "Semiconductor Equipment & Materials" | "Solar" | "Consumer Electronics" | "Electronics & Computer Distribution";
            Energy: "Oil & Gas Exploration & Production" | "Oil & Gas Midstream" | "Oil & Gas Equipment & Services" | "Oil & Gas Integrated" | "Oil & Gas Refining & Marketing" | "Uranium" | "Oil & Gas Drilling" | "Thermal Coal";
            Industrials: "Specialty Industrial Machinery" | "Aerospace & Defense" | "Engineering & Construction" | "Electrical Equipment & Parts" | "Specialty Business Services" | "Marine Shipping" | "Building Products & Equipment" | "Integrated Freight & Logistics" | "Farm & Heavy Construction Machinery" | "Security & Protection Services" | "Conglomerates" | "Staffing & Employment Services" | "Rental & Leasing Services" | "Industrial Distribution" | "Airlines" | "Pollution & Treatment Controls" | "Waste Management" | "Metal Fabrication" | "Trucking" | "Consulting Services" | "Railroads" | "Tools & Accessories" | "Airports & Air Services" | "Business Equipment & Supplies" | "Infrastructure Operations";
            'Communication Services': "Internet Content & Information" | "Telecom Services" | "Entertainment" | "Advertising Agencies" | "Electronic Gaming & Multimedia" | "Broadcasting" | "Publishing";
            'Consumer Staples': "Packaged Foods" | "Education & Training Services" | "Household & Personal Products" | "Farm Products" | "Beverages - Non-Alcoholic" | "Food Distribution" | "Beverages - Wineries & Distilleries" | "Grocery Stores" | "Tobacco" | "Discount Stores" | "Beverages - Brewers" | "Confectioners";
            'Consumer Discretionary': "Auto Parts" | "Restaurants" | "Specialty Retail" | "Internet Retail" | "Furnishings, Fixtures & Appliances" | "Apparel Retail" | "Auto Manufacturers" | "Leisure" | "Auto & Truck Dealerships" | "Apparel Manufacturing" | "Packaging & Containers" | "Residential Construction" | "Travel Services" | "Resorts & Casinos" | "Gambling" | "Footwear & Accessories" | "Recreational Vehicles" | "Personal Services" | "Lodging" | "Luxury Goods" | "Home Improvement Retail" | "Textile Manufacturing" | "Department Stores";
            Materials: "Specialty Chemicals" | "Gold" | "Other Industrial Metals & Mining" | "Steel" | "Chemicals" | "Agricultural Inputs" | "Building Materials" | "Other Precious Metals & Mining" | "Copper" | "Coking Coal" | "Lumber & Wood Production" | "Paper & Paper Products" | "Silver" | "Aluminum";
            'Real Estate': "Real Estate - Services" | "REIT - Mortgage" | "REIT - Retail" | "REIT - Office" | "REIT - Residential" | "REIT - Specialty" | "REIT - Healthcare Facilities" | "REIT - Industrial" | "REIT - Diversified" | "Real Estate - Development" | "REIT - Hotel & Motel" | "Real Estate - Diversified";
            Utilities: "Utilities - Regulated Electric" | "Utilities - Renewable" | "Utilities - Regulated Gas" | "Utilities - Regulated Water" | "Utilities - Diversified" | "Utilities - Independent Power Producers";
        }>({ options, }: {
            options: import("./queries/market-performance").IndustryOptions<S>;
        }): Promise<import("./queries/market-performance").IndustryPriceEarningsArr>;
        biggestLosers(): Promise<import("./queries/market-performance").BiggestLosersArr>;
        biggestGainers(): Promise<import("./queries/market-performance").BiggestGainersArr>;
        mostActive(): Promise<import("./queries/market-performance").MostActiveArr>;
    };
    News: {
        stockNews(symbol: string, options: {
            from: Date;
            to: Date;
            page: number;
            limit: number;
        }): Promise<import("./queries/news").StockNewsArr>;
        pressReleases(symbol: string, options: {
            from: Date;
            to: Date;
            page: number;
            limit: number;
        }): Promise<import("./queries/news").PressReleaseArr>;
        priceTargetNews(symbol: string, limit: number): Promise<import("./queries/news").PriceTargetNewsArr>;
        stockGradeNews(symbol: string, options: {
            page: number;
            limit: number;
        }): Promise<import("./queries/news").StockGradeNewsArr>;
    };
    Search: {
        stockScreener<S extends import("./queries/search").MarketSector = keyof {
            Healthcare: "Biotechnology" | "Medical - Devices" | "Drug Manufacturers - Specialty & Generic" | "Medical - Instruments & Supplies" | "Diagnostics & Research" | "Medical - Care Facilities" | "Health Information Services" | "Drug Manufacturers - General" | "Medical - Distribution" | "Healthcare Plans" | "Pharmaceutical Retailers";
            Financials: "Banks - Regional" | "Shell Companies" | "Asset Management" | "Capital Markets" | "Credit Services" | "Insurance - Property & Casualty" | "Insurance Brokers" | "Banks - Diversified" | "Insurance - Specialty" | "Insurance - Life" | "Financial Data & Stock Exchanges" | "Mortgage Finance" | "Insurance - Diversified" | "Insurance - Reinsurance" | "Financial Conglomerates";
            Technology: "Software - Application" | "Software - Infrastructure" | "Information Technology Services" | "Semiconductors" | "Communication Equipment" | "Electronic Components" | "Computer Hardware" | "Scientific & Technical Instruments" | "Semiconductor Equipment & Materials" | "Solar" | "Consumer Electronics" | "Electronics & Computer Distribution";
            Energy: "Oil & Gas Exploration & Production" | "Oil & Gas Midstream" | "Oil & Gas Equipment & Services" | "Oil & Gas Integrated" | "Oil & Gas Refining & Marketing" | "Uranium" | "Oil & Gas Drilling" | "Thermal Coal";
            Industrials: "Specialty Industrial Machinery" | "Aerospace & Defense" | "Engineering & Construction" | "Electrical Equipment & Parts" | "Specialty Business Services" | "Marine Shipping" | "Building Products & Equipment" | "Integrated Freight & Logistics" | "Farm & Heavy Construction Machinery" | "Security & Protection Services" | "Conglomerates" | "Staffing & Employment Services" | "Rental & Leasing Services" | "Industrial Distribution" | "Airlines" | "Pollution & Treatment Controls" | "Waste Management" | "Metal Fabrication" | "Trucking" | "Consulting Services" | "Railroads" | "Tools & Accessories" | "Airports & Air Services" | "Business Equipment & Supplies" | "Infrastructure Operations";
            'Communication Services': "Internet Content & Information" | "Telecom Services" | "Entertainment" | "Advertising Agencies" | "Electronic Gaming & Multimedia" | "Broadcasting" | "Publishing";
            'Consumer Staples': "Packaged Foods" | "Education & Training Services" | "Household & Personal Products" | "Farm Products" | "Beverages - Non-Alcoholic" | "Food Distribution" | "Beverages - Wineries & Distilleries" | "Grocery Stores" | "Tobacco" | "Discount Stores" | "Beverages - Brewers" | "Confectioners";
            'Consumer Discretionary': "Auto Parts" | "Restaurants" | "Specialty Retail" | "Internet Retail" | "Furnishings, Fixtures & Appliances" | "Apparel Retail" | "Auto Manufacturers" | "Leisure" | "Auto & Truck Dealerships" | "Apparel Manufacturing" | "Packaging & Containers" | "Residential Construction" | "Travel Services" | "Resorts & Casinos" | "Gambling" | "Footwear & Accessories" | "Recreational Vehicles" | "Personal Services" | "Lodging" | "Luxury Goods" | "Home Improvement Retail" | "Textile Manufacturing" | "Department Stores";
            Materials: "Specialty Chemicals" | "Gold" | "Other Industrial Metals & Mining" | "Steel" | "Chemicals" | "Agricultural Inputs" | "Building Materials" | "Other Precious Metals & Mining" | "Copper" | "Coking Coal" | "Lumber & Wood Production" | "Paper & Paper Products" | "Silver" | "Aluminum";
            'Real Estate': "Real Estate - Services" | "REIT - Mortgage" | "REIT - Retail" | "REIT - Office" | "REIT - Residential" | "REIT - Specialty" | "REIT - Healthcare Facilities" | "REIT - Industrial" | "REIT - Diversified" | "Real Estate - Development" | "REIT - Hotel & Motel" | "Real Estate - Diversified";
            Utilities: "Utilities - Regulated Electric" | "Utilities - Renewable" | "Utilities - Regulated Gas" | "Utilities - Regulated Water" | "Utilities - Diversified" | "Utilities - Independent Power Producers";
        }>({ options, }: {
            options: {
                marketCapMoreThan?: number;
                marketCapLessThan?: number;
                sector?: S | undefined;
                industry?: (S extends keyof {
                    Healthcare: "Biotechnology" | "Medical - Devices" | "Drug Manufacturers - Specialty & Generic" | "Medical - Instruments & Supplies" | "Diagnostics & Research" | "Medical - Care Facilities" | "Health Information Services" | "Drug Manufacturers - General" | "Medical - Distribution" | "Healthcare Plans" | "Pharmaceutical Retailers";
                    Financials: "Banks - Regional" | "Shell Companies" | "Asset Management" | "Capital Markets" | "Credit Services" | "Insurance - Property & Casualty" | "Insurance Brokers" | "Banks - Diversified" | "Insurance - Specialty" | "Insurance - Life" | "Financial Data & Stock Exchanges" | "Mortgage Finance" | "Insurance - Diversified" | "Insurance - Reinsurance" | "Financial Conglomerates";
                    Technology: "Software - Application" | "Software - Infrastructure" | "Information Technology Services" | "Semiconductors" | "Communication Equipment" | "Electronic Components" | "Computer Hardware" | "Scientific & Technical Instruments" | "Semiconductor Equipment & Materials" | "Solar" | "Consumer Electronics" | "Electronics & Computer Distribution";
                    Energy: "Oil & Gas Exploration & Production" | "Oil & Gas Midstream" | "Oil & Gas Equipment & Services" | "Oil & Gas Integrated" | "Oil & Gas Refining & Marketing" | "Uranium" | "Oil & Gas Drilling" | "Thermal Coal";
                    Industrials: "Specialty Industrial Machinery" | "Aerospace & Defense" | "Engineering & Construction" | "Electrical Equipment & Parts" | "Specialty Business Services" | "Marine Shipping" | "Building Products & Equipment" | "Integrated Freight & Logistics" | "Farm & Heavy Construction Machinery" | "Security & Protection Services" | "Conglomerates" | "Staffing & Employment Services" | "Rental & Leasing Services" | "Industrial Distribution" | "Airlines" | "Pollution & Treatment Controls" | "Waste Management" | "Metal Fabrication" | "Trucking" | "Consulting Services" | "Railroads" | "Tools & Accessories" | "Airports & Air Services" | "Business Equipment & Supplies" | "Infrastructure Operations";
                    'Communication Services': "Internet Content & Information" | "Telecom Services" | "Entertainment" | "Advertising Agencies" | "Electronic Gaming & Multimedia" | "Broadcasting" | "Publishing";
                    'Consumer Staples': "Packaged Foods" | "Education & Training Services" | "Household & Personal Products" | "Farm Products" | "Beverages - Non-Alcoholic" | "Food Distribution" | "Beverages - Wineries & Distilleries" | "Grocery Stores" | "Tobacco" | "Discount Stores" | "Beverages - Brewers" | "Confectioners";
                    'Consumer Discretionary': "Auto Parts" | "Restaurants" | "Specialty Retail" | "Internet Retail" | "Furnishings, Fixtures & Appliances" | "Apparel Retail" | "Auto Manufacturers" | "Leisure" | "Auto & Truck Dealerships" | "Apparel Manufacturing" | "Packaging & Containers" | "Residential Construction" | "Travel Services" | "Resorts & Casinos" | "Gambling" | "Footwear & Accessories" | "Recreational Vehicles" | "Personal Services" | "Lodging" | "Luxury Goods" | "Home Improvement Retail" | "Textile Manufacturing" | "Department Stores";
                    Materials: "Specialty Chemicals" | "Gold" | "Other Industrial Metals & Mining" | "Steel" | "Chemicals" | "Agricultural Inputs" | "Building Materials" | "Other Precious Metals & Mining" | "Copper" | "Coking Coal" | "Lumber & Wood Production" | "Paper & Paper Products" | "Silver" | "Aluminum";
                    'Real Estate': "Real Estate - Services" | "REIT - Mortgage" | "REIT - Retail" | "REIT - Office" | "REIT - Residential" | "REIT - Specialty" | "REIT - Healthcare Facilities" | "REIT - Industrial" | "REIT - Diversified" | "Real Estate - Development" | "REIT - Hotel & Motel" | "Real Estate - Diversified";
                    Utilities: "Utilities - Regulated Electric" | "Utilities - Renewable" | "Utilities - Regulated Gas" | "Utilities - Regulated Water" | "Utilities - Diversified" | "Utilities - Independent Power Producers";
                } ? import("./queries/search").IndustryForSector<S> : never) | undefined;
                betaMoreThan?: number;
                betaLowerThan?: number;
                priceMoreThan?: number;
                priceLowerThan?: number;
                dividendMoreThan?: number;
                dividendLowerThan?: number;
                volumeMoreThan?: number;
                volumeLowerThan?: number;
                exchange?: string;
                country?: string;
                isEtf?: boolean;
                isFund?: boolean;
                isActivelyTrading: boolean;
                limit?: number;
                includeAllShareClasses?: boolean;
            };
        }): Promise<import("./queries/search").ScreenerResultArr>;
    };
    Statements: {
        incomeStatement(symbol: string, options: {
            limit: number;
            period: "annual" | "quarter" | "Q1" | "Q2" | "Q3" | "Q4";
        }): Promise<import("./queries/statements").IncomeStatementArr>;
        balanceSheet(symbol: string, options: {
            limit: number;
            period: "annual" | "quarter" | "Q1" | "Q2" | "Q3" | "Q4";
        }): Promise<import("./queries/statements").BalanceSheetArr>;
        cashFlowStatement(symbol: string, options: {
            limit: number;
            period: "annual" | "quarter" | "Q1" | "Q2" | "Q3" | "Q4";
        }): Promise<import("./queries/statements").CashFlowStatementArr>;
        keyMetrics(symbol: string, options: {
            limit: number;
            period: "annual";
        }): Promise<import("./queries/statements").KeyMetricsArr>;
        financialRatios(symbol: string, options: {
            limit: number;
            period: "annual";
        }): Promise<import("./queries/statements").FinancialRatiosArr>;
        keyMetricsTtm(symbol: string): Promise<import("./queries/statements").KeyMetricsTtmArr>;
        financialRatiosTtm(symbol: string): Promise<import("./queries/statements").FinancialRatiosTtmArr>;
        financialScores(symbol: string): Promise<import("./queries/statements").FinancialScoresArr>;
        ownerEarnings(symbol: string, limit: number): Promise<import("./queries/statements").OwnerEarningsArr>;
        enterpriseValues(symbol: string, limit: number, period: "annual" | "quarter" | "Q1" | "Q2" | "Q3" | "Q4"): Promise<import("./queries/statements").EnterpriseValuesArr>;
        incomeStatementGrowth(symbol: string, limit: number, period: "annual" | "quarter" | "Q1" | "Q2" | "Q3" | "Q4"): Promise<import("./queries/statements").IncomeStatementGrowthArr>;
        balanceSheetGrowth(symbol: string, limit: number, period: "annual" | "quarter" | "Q1" | "Q2" | "Q3" | "Q4"): Promise<import("./queries/statements").BalanceSheetStatementGrowthArr>;
        cashFlowStatementGrowth(symbol: string, limit: number, period: "annual" | "quarter" | "Q1" | "Q2" | "Q3" | "Q4"): Promise<import("./queries/statements").CashflowStatementGrowthArr>;
    };
    Technical: {
        simpleMovingAverage(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").SimpleMovingAverageArr>;
        exponentialMovingAverage(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").ExponentialMovingAverageArr>;
        weightedMovingAverage(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").WeightedMovingAverageArr>;
        doubleExponentialMovingAverage(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").DoubleExponentialMovingAverageArr>;
        tripleExponentialMovingAverage(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").TripleExponentialMovingAverageArr>;
        relativeStrengthIndex(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").RelativeStrengthIndexArr>;
        standardDeviation(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").StandardDeviationArr>;
        williamsR(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").WilliamsRArr>;
        averageDirectionalIndex(symbol: string, options: {
            periodLength: number;
            timeframe: string;
            from: Date;
            to: Date;
        }): Promise<import("./queries/technical-indicators").AverageDirectionalIndexArr>;
        quote(symbol: string): Promise<import("./queries/technical-indicators").QuoteArr>;
    };
};

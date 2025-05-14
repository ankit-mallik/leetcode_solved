function maxProfit(prices: number[]): number {
    let totalProfit = 0;

    for(let day = 1; day < prices.length; day++){
        const dailyProfit = prices[day] - prices[day -1];

        totalProfit = totalProfit + Math.max(0, dailyProfit);
    }

    return totalProfit;
};
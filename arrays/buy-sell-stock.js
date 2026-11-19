function maxProfit(prices) {
  let minPrice = 2147483647; // Java's Integer.MAX_VALUE
  let maxProfitValue = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfitValue) {
      maxProfitValue = prices[i] - minPrice;
    }
  }
  return maxProfitValue;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

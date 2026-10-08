function maxProfit(prices) {

    let min = prices[0];
    let maxProfit = 0;

    for(let i=1; i<prices.length; i++){
        if(prices[i]-min > maxProfit){
            maxProfit = prices[i]-min
        } 

        if(prices[i]<min){
            min = prices[i]
        }
    }

    return maxProfit

}


/**  * 
 * def maxProfit(prices):
 *    min_price = prices[0]
 *    max_profit = 0
 * 
 *      for i in range(1, len(prices)):
 *          if prices[i] - min_price > max_profit:
 *             max_profit = prices[i] - min_price
 *        if prices[i] < min_price: 
 *            min_price = prices[i]
 *      return max_profit
 * 
 */


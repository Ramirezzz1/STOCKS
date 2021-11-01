import { iex } from '../config/iex.js';


export const stock = {

    latestPrice: (ticker, callback, bind ) => {
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
        fetch(url).then((response) => response.json())
        .then((data) => callback(data))
        
    }

}
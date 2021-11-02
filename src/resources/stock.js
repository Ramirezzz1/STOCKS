import { iex } from '../config/iex.js';


export const stock = {

    latestPrice: (ticker, callback, bind ) => {
        fetch(stock.latestPriceURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
    },

    latestPriceURL: (ticker) => {
       return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`
    },

    formatPriceData: (data) => {
        let stockData
        console.log('test',data)
        if(Array.isArray (data) ){
             stockData = data[data.length - 1] 

        }else{
            stockData = data
        }
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        return formattedData
    },

    getYesterdaysClose: (ticker, date, callback) => {
        fetch(stock.yesterdaysCloseURL(ticker))
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)))
    }, 

    yesterdaysCloseURL: (ticker) => {
        // return ``
        // return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1exactDate=20211101&token=${iex.api_token}`
        return `${iex.base_url}/stock/${ticker}/previous?chartLast=1&token=${iex.api_token}`
    }

}
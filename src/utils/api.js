async function coinRequest(url) {
    try{
        let response = await fetch(url);
        // console.log('response: ', response);
        let data = await response.json();
        // console.log('data:', data);
        return data;    
        // resolvePath(data);
    }catch(err){
        console.log(err);
    }
}

// order = market_cap_desc - рыночная капитализация

const coinMarkets = (page, order) => {
    return ('https://api.coingecko.com/api/v3/coins/markets?'
                +'vs_currency=usd'
                +'&order='+order
                +'&per_page=20'
                +'&page='+page
                +'&sparkline=false'
                +'price_change_percentage=24h'
            );
}

const coinList = () => {
    return ('https://api.coingecko.com/api/v3/coins/list');
}

export {coinRequest, coinMarkets, coinList}
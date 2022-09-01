import style from './style.module.css';

const RowCrypto = (props) => {
    function round (price){
        if(price == null){
            return '0';
        }
        else if(price > 0.01){
            return '+' + price.toFixed(2);
        }
        else if(price < -1){
            return price.toFixed(2);
        }
        else if(price > 0){
            return '+' + price.toFixed(5);
        }
        else return price.toFixed(5);
    }

    function splitNumberByDigits(number){
        if(number === null){
            return '-'
        }
        else return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }

    function subtitlePlus(number){
        if(+number > 0) return '+' + number;
        else return number;
    }

    function defineLineColor(index){
        if(index % 2 === 0){
            return 'even';
        }
        else return 'notEven';
    }

    function definePercentageColor(precentage){
        if(+precentage > 0){
            return 'plus';
        }
        else return 'minus';
    }

    const coinInform = {
        id: props.coin.id,
        image: props.coin.image,
        name: props.coin.name,
        symbol: props.coin.symbol,
        current_price: props.coin.current_price,
        marcetCap: props.coin.market_cap,
        marcetCapChangePercentage24h: props.coin.market_cap_change_percentage_24h,
        marketCapRank: props.coin.market_cap_rank,
        price: props.coin.low_24h,
        priceChange24h: round(props.coin.price_change_24h),
        priceChangePercentage24h: props.coin.price_change_percentage_24h
    };
    return(
        <tbody className={style.tbody}>
            <tr className={style[defineLineColor(props.posInTable)]}>
                <td>
                    <div className={style.currency}>
                        <img src = {coinInform.image} className={style.img} alt='currency'/>
                        <a href='/'>{coinInform.name}</a>
                    </div>
                </td>
                <td>
                    <div className={style.price}>
                        <p>{coinInform.price}</p>
                        <sup
                        className={style[definePercentageColor(coinInform.priceChange24h)]}
                        >{coinInform.priceChange24h}</sup>
                    </div>
                </td>
                <td>
                    <div className={style.marcetCap}>
                        {splitNumberByDigits(coinInform.marcetCap)}
                    </div>
                </td>
                <td>
                    <p className={style['priceChangePercentage24h' + definePercentageColor(coinInform.priceChangePercentage24h)]}>
                        {subtitlePlus(coinInform.priceChangePercentage24h)}
                    </p>
                </td>
            </tr>
        </tbody>
    );
}

export default RowCrypto;
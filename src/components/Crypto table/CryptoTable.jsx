import styles from './style.module.css'

import RowCrypto from './rowCryptoTable/rowCrypto';
import TableSlider from './TableSlider/tableSlider';

import {coinRequest, coinMarkets, coinList} from '../../utils/api'
import { Component } from 'react';

class CryptoTable extends Component {
    constructor(props){
        super(props);     
        this.state = {
            countCoin: 0,
            coinPage: [],
            capSort: true,
        }
        this.setRequest(); 
    }
    setRequest(){
        coinRequest(coinList()).then(result => {
            this.setState({countCoin: result.length - 12000});
            // console.log('this.state.countCoin: ', this.state.countCoin);
        })
        coinRequest(coinMarkets(1, 'market_cap_desc')).then(result => {
            this.setState({coinPage: [...result]});
        })
    }
    render(){ 
        return(
            <div className="container">
            {console.log('coinPage: ', this.state.countCoin)}
                <div className={styles.CryptoTable}>
                    <table className={styles.table}>
                        <thead className={styles.headTable}>
                            <tr>
                                <th className={styles.currencyColumn}>Валюта</th>
                                <th>
                                        Стоимость
                                </th>
                                <th>
                                    <p className={styles.buttom}
                                    onClick={() => {
                                            if(this.state.capSort){
                                                coinRequest(coinMarkets(601, 'market_cap_asc')).then(result => {
                                                    this.setState({coinPage: [...result]});
                                                    this.setState({capSort: false});
                                                })
                                            }
                                            else {
                                                coinRequest(coinMarkets(1, 'market_cap_desc')).then(result => {
                                                    this.setState({coinPage: [...result]});
                                                    this.setState({capSort: true});
                                                })
                                            }
                                        }
                                    }
                                    >
                                        Капитализация
                                    </p>
                                </th>
                                <th>Изм. (24 ч.)</th>
                            </tr>
                        </thead>
                        {
                            this.state.coinPage.map((coin, i) => {
                                return (
                                    <RowCrypto coin = {coin} posInTable = {i}/>
                                );
                            })
                        }
                    </table>
                    <TableSlider countCoin = {this.state.countCoin}/>
                </div>
            </div>
        );
    } 
}

export default CryptoTable;
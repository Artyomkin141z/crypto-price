import styles from './style.module.css'

import {coinRequest, coinMarkets, coinList} from '../../utils/api'
import { Component } from 'react';

class CryptoTable extends Component {
    constructor(props){
        super(props);      
        this.state = {
            countCoin: 0,
            coinPage: {},
        }
    }
    // setRequest(){
    //     const localState = 0;
    //     coinRequest(coinList()).then(result => {
    //         localState = result.length;
    //         // console.log('localState: ', localState.countCoin);
    //         // return result;
    //     })
    //     console.log('localState: ', localState);
    //     return localState;
    // };
    render(){ 
        return(
            <div className="container">
            {/* {console.log('countCoin: ', this.state.countCoin)} */}
                <div className={styles.CryptoTable}>
                    <table className={styles.table}>
                        <thead className={styles.headTable}>
                            <tr>
                                <th>Валюта</th>
                                <th>Стоимость</th>
                                <th>Капитализация</th>
                                <th>Объём (24 ч.)</th>
                                <th>Изменение (24 ч.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bitcon</td>
                                <td>19810.5$</td>
                                <td>379 082 838 534$</td>
                                <td>792 698 000$</td>
                                <td>-1.1221%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } 
}

export default CryptoTable;
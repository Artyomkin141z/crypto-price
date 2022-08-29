import styles from './style.module.css'

function CryptoTable() {
    return(
        <div className="container">
            <div className={styles.CryptoTable}>
                <table className={styles.table}>
                    <tr className={styles.headTable}>
                        <th>Валюта</th>
                        <th>Стоимость</th>
                        <th>Капитализация</th>
                        <th>Объём (24 ч.)</th>
                        <th>Изменение (24 ч.)</th>
                    </tr>
                    <tr>
                        <td>Bitcon</td>
                        <td>19810.5$</td>
                        <td>379 082 838 534$</td>
                        <td>792 698 000$</td>
                        <td>-1.1221%</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default CryptoTable;
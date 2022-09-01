import styles from './styles.module.css'

const TableSlider = (props) => {
    const countPages = Math.ceil(props.countCoin/20);

    return(
        <div className={styles.container}>
            <div className={styles.slider}>
                <button></button>
                <div className={styles.pages}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                </div>
                <button></button>
            </div>
        </div>
    );
}

export default TableSlider;
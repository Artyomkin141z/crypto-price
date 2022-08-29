import styles from './style.module.css'

import bookMark from '../../constants/image/bookmark.png';
import person from '../../constants/image/person.png'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <a href='/'>
                    CryptoPrice
                </a>
                <div>
                    <a href='/'>
                        <img src={bookMark} className={styles.img} alt='bookmark'/>
                    </a>
                    <a href='/'>
                        <img src={person} className={styles.img} alt='bookmark'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
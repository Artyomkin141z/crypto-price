import styles from './style.module.css'

import bookMark from '../../constants/image/bookmark.png';
import person from '../../constants/image/person.png'
import logo from '../../constants/image/logo.png';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <a href='/' className={styles.logo}>
                    <img src={logo} className={styles.img} alt='logo'/>
                    <p>Cryptocurrency Price</p>
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
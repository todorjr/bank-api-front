import styles from '../styles/Navbar.module.css'
import logoSrc from '../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar () {
    return (
        <div>
            <nav className={styles.mainNav}>
                <div className="logo">
                    <a href="" className='main-nav-logo'>
                        <img src={logoSrc} alt="Logo" className={styles.logoImage} />
                    </a>
                </div>
                <div>
                    <a href="" className={styles.navItem}>
                        <FontAwesomeIcon icon={faUserCircle} className={styles.userIcon} />
                        Sign In
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

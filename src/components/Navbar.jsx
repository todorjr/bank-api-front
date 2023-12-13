import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'
import logoSrc from '../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Navbar () {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <div>
            <nav className={styles.mainNav}>
                <div className="logo">
                    <Link to="/" className='main-nav-logo'>
                        <img src={logoSrc} alt="Logo" className={styles.logoImage} />
                    </Link>
                </div>
                <div>
                {user.isLoggedIn ? (
                    <Link to="/" className={styles.navItem} onClick={handleSignOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} className={styles.userIcon} />
                        Sign Out
                    </Link>
                ) : (
                    <Link to="/signin" className={styles.navItem}>
                        <FontAwesomeIcon icon={faUserCircle} className={styles.userIcon} />
                        Sign In
                    </Link>
                )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

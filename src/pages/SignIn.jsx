import { useState } from 'react'
import styles from '../styles/Signin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Signing in with:', { username, password });
    };

    return (
        <>
        <Navbar />
        <div className={styles.content}>
            <div className={styles.contentForm}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.userIcon} />
                <h1>Sign In</h1>
                <form>
                    <div className={styles.input}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    </div>
                    <br />
                    <div className={styles.input}>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    </div>
                    <br />
                    <div className={styles.remember}>
                        <input type="checkbox" itemID="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <br />
                    <button className={styles.btn} type="button" onClick={handleSignIn}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default SignIn




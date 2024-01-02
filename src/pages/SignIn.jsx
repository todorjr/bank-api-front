
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Signin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { useSelector, useDispatch } from 'react-redux';
import { authenticateUser } from '../features/user/userAsyncActions.js'

function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    const isPasswordValid = /^(?=.*[a-z]).{3,}$/.test(password)

    const isEmailInvalid = !isEmailValid && email !== ''
    const isPasswordInvalid = !isPasswordValid && password !== ''

    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.isLoggedIn) {
            navigate('/profile');
        }
    }, [navigate, user]);
    

    const handleSignIn = async () => {
        if (isEmailValid && isPasswordValid) {
            await dispatch(authenticateUser({ email, password }))
        } else {
            console.log('Invalid username or password format')
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.contentForm}>
                    <FontAwesomeIcon icon={faUserCircle} className={styles.userIcon} />
                    <h1>Sign In</h1>
                    <form>
                        <div className={`${styles.input} ${isEmailInvalid && styles.invalid}`}>
                            <label>
                                Username:
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <br />
                        <div className={`${styles.input} ${isPasswordInvalid && styles.invalid}`}>
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
                            <input type="checkbox" id="remember-me" />
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




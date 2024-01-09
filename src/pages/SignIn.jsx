
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Signin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { useSelector, useDispatch } from 'react-redux'
import { authenticateUser } from '../features/user/userAsyncActions.js'

function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [passError, setPassError] = useState(null)

    const { isLoggedIn, authError } = useSelector((state) => state.user)

    const validateEmail = (email) => {
        if (!email) {
            setEmailError('Invalid email format')
            return false
        }
        setEmailError('')
        return true
    }

    const validatePassword = (password) => {
        if (!password) {
            setPassError('Invalid password')
            return false
        }
        setPassError('')
        return true
    }

    const handleSignIn = async () => {
        const isEmailValid = validateEmail(email)
        const isPasswordValid = validatePassword(password)

        if (isEmailValid && isPasswordValid) {
            await dispatch(authenticateUser({ email, password }))
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/profile')
        }
    }, [navigate, isLoggedIn])

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
                                    className={`${emailError ? styles.invalidAuth : ''}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            {emailError && <div className={styles.errorMessage}>{emailError}</div>}

                        </div>
                        <br />
                        <div className={styles.input}>
                            <label>
                                Password:
                                <input
                                    type="password"
                                    className={`${passError ? styles.invalidAuth : ''}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                            {passError && <div className={styles.errorMessage}>{passError}</div>}

                        </div>
                        {authError && <div className={styles.errorMessage}>Authentication Failed. Please try again.</div>}
                        <br />
                        <div className={styles.remember}>
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me" className={styles.rememberLabel}>Remember me</label>
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




import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getUserData } from '../features/user/userAsyncActions.js'

function Profile() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user.token) {
      dispatch(getUserData(user.token))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token])

  console.log(user);

  return (
    <>
      <Navbar />
      <div className={styles.profileContent}>
        <h1>Welcome back</h1>
        {user && (
          <div>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Profile


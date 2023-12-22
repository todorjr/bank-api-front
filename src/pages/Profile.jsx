import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserData } from '../features/user/userAsyncActions.js'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Transaction from '../components/Transaction'
import styles from '../styles/Profile.module.css'

function Profile() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    const fetchData = async () => {
      if (user.token) {
        await dispatch(getUserData(user.token));
      }
    };
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token])

  const {firstName, lastName} = user  

  return (
    <>
      <Navbar />
      <div className={styles.profileContent}>
        <div className={styles.header}>
          <h1>Welcome back <br/>{firstName} {lastName}</h1>
          <button className={styles.editName}>Edit name</button>
        </div>
        <Transaction />
      </div>
      <Footer />
    </>
  )
}

export default Profile


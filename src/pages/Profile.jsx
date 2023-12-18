import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getUserData } from '../features/user/userAsyncActions.js'

function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Dispatch action to fetch user data
            await dispatch(getUserData({ firstName, lastName }))
          } catch (error) {
            console.error('Error fetching user data', error)
          }
        }
    
        // Call fetchData to trigger the dispatch
        fetchData()
      }, [dispatch, firstName, lastName])
    
      // Access the updated user data from the Redux store
      const { firstName: userFirstName, lastName: userLastName } = user
    
      // Set local state based on user data
      useEffect(() => {
        setFirstName(userFirstName || '')
        setLastName(userLastName || '')  
      }, [userFirstName, userLastName])
    
      console.log(firstName, lastName)

    return (
        <>
        <Navbar />
        <div className={styles.profileContent}>
            <h1>Welcome back {firstName} {lastName}</h1>
        </div>
        <Footer />
        </>
    )
}

export default Profile
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserData, updateUserData } from '../features/user/userAsyncActions.js'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Transaction from '../components/Transaction'
import styles from '../styles/Profile.module.css'

function Profile() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [isEditing, setIsEditing] = useState(false)
  const [editedFirstName, setEditedFirstName] = useState(user.firstName)
  const [editedLastName, setEditedLastName] = useState(user.lastName)

  useEffect(() => {
    const fetchData = async () => {
      if (user.token) {
        await dispatch(getUserData(user.token))
      }
    }
  
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token])

  useEffect(() => {
    setEditedFirstName(user.firstName)
    setEditedLastName(user.lastName)
  }, [user.firstName, user.lastName])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditedFirstName(user.firstName) 
    setEditedLastName(user.lastName)
  }

  const handleSave = async () => {
    setIsEditing(false)
    dispatch(updateUserData(user.token, {
      firstName: editedFirstName,
      lastName: editedLastName
    }))
  }


  return (
    <>
      <Navbar />
      <div className={styles.profileContent}>
        <div className={styles.header}>
        <h1>Welcome back <br />
        {isEditing ? (
            <div className={styles.editForm}>
              <input
                className={styles.editName}
                type="text"
                value={editedFirstName}
                onChange={(e) => setEditedFirstName(e.target.value)}
              />
              <input
                className={styles.editName}
                type="text"
                value={editedLastName}
                onChange={(e) => setEditedLastName(e.target.value)}
              />
            </div>
          ) : `${user.firstName} ${user.lastName}`}</h1>
          {isEditing ? (
            <div className={styles.editButtons}>
              <button className={styles.saveName} onClick={handleSave}>Save</button>
              <button className={styles.cancelName} onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <button className={styles.edit} onClick={handleEdit}>Edit name</button>
          )}
        </div>
        <Transaction />
      </div>
      <Footer />
    </>
  )
}

export default Profile


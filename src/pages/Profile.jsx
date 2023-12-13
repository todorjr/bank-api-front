import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Profile.module.css';


function Profile() {
    return (
        <>
        <Navbar />
        <div className={styles.profileContent}>

        </div>
        <Footer />
        </>
    );
}

export default Profile

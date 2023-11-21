import styles from '../styles/Hero.module.css'

function Hero () {
    return (
        <div className={styles.hero}>
            <section className={styles.heroSection}>
                <p className={styles.subtitle}>No fees.</p>
                <p className={styles.subtitle}>No minimum deposit.</p>
                <p className={styles.subtitle}>High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
    
}

export default Hero

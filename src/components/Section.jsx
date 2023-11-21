import styles from '../styles/Section.module.css'
import prioritySrc from '../assets/img/icon-chat.png'
import securitySrc from '../assets/img/icon-security.png'
import savingsSrc from '../assets/img/icon-money.png'


function Section () {
    return (
        <section className={styles.features}>
            <div className={styles.featuresItem}>
                <img src={prioritySrc} alt=""  className={styles.featureIcon} />
                <h3>You are our #1 priority</h3>
                <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
            </div>
            <div className={styles.featuresItem}>
                <img src={savingsSrc} alt="" className={styles.featureIcon} />
                <h3>More savings means higher rates</h3>
                <p>The more you save with us, the higher your interest rate will be!</p>
            </div>
            <div className={styles.featuresItem}>
                <img src={securitySrc} alt="" className={styles.featureIcon} />
                <h3>Security you can trust</h3>
                <p>We use top of the line encryption to make sure your data and money is always safe.</p>
            </div>
        </section>
    )
}

export default Section

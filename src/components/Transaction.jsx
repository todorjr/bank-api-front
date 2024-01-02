import styles from '../styles/Transaction.module.css'

function Transaction() {

    return (
        <div>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                    <h3 className={styles.accountTitle}>Argent Bank Checking (x8349)</h3>
                    <p className={styles.accountAmount}>$2,082.79</p>
                    <p className={styles.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={`{styles.accountContentWrapper} {styles.cta}`}>
                    <button className={styles.transactionButton}>View transactions</button>
                </div>

            </section>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                    <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
                    <p className={styles.accountAmount}>$12,582.79</p>
                    <p className={styles.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={`{styles.accountContentWrapper} {styles.cta}`}>
                    <button className={styles.transactionButton}>View transactions</button>
                </div>

            </section>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                    <h3 className={styles.accountTitle}>Argent Bank Credit Card (x8349)</h3>
                    <p className={styles.accountAmount}>$184.30</p>
                    <p className={styles.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={`{styles.accountContentWrapper} {styles.cta}`}>
                    <button className={styles.transactionButton}>View transactions</button>
                </div>

            </section>
        </div>

    )
}

export default Transaction
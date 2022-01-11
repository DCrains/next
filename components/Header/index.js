import React from 'react'
import styles from './Header.module.css'

const Header = ()=> {
    return (
        <div className={styles.header}>
            <div className={styles.nav} >
                <div className={styles.leftbar}>
                    <p className={styles.leftbar1}>8-911-113-93-95</p>
                    <p className={styles.leftbar2}>ПН-ВС 10:00 - 20:00 </p>
                </div>
                <div className={styles.ebuch}>
                    <a href="/" className={styles.item}>Наши услуги</a>
                    <a href="/" className={styles.item}>Цены</a>
                    <a href="/" className={styles.item}> Контакты</a>
                    <a href="/" className={styles.item}>Наши работы</a>
                </div>
            </div>
        </div>
    )
}

export default Header
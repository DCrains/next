import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.nav} >
                <div className={styles.leftbar}>
                    <p className={styles.leftbar1}>8-911-113-93-95</p>
                    <p className={styles.leftbar2}>ПН-ВС 10:00 - 20:00 </p>
                </div>
                <div className={styles.ebuch}>
                    <Link href="/"><a className={styles.item}>Наши услуги</a></Link>
                    <Link href="/"><a className={styles.item}>Цены</a></Link>
                    <Link href="/"><a className={styles.item}> Контакты</a></Link>
                    <Link href="/"> <a className={styles.item}>Наши работы</a></Link>

                </div>
            </div>
        </div>
    )
}

export default Header
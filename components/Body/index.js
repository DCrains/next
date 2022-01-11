import React from 'react'
import styles from './Body.module.css'


const Body = () => {
    const [authed, setAuthed] = React.useState(false)
    return (
    <div className={styles.body}>
        <div className={styles.main}>
            <div className={styles.first}>
                Замена и ремонт глушителей <br>
                </br>в Санкт-Петербурге
            </div>
            <div className={styles.vertical}>
                GLUSHAC
            </div>
            <div className={styles.main2}>
                <button className={styles.button}>
                    Записаться
                </button>
                <div className={styles.second}>
                    Скидка при повторном посещении<br>
                    </br>10% на работы и запчасти
                </div>

            </div>
            <div className={styles.spisok}>
                <ul>
                    <li>Гарантия от 1 года до 3 лет на все виды работ</li>
                    <li>Бесплатная диагностика</li>
                    <li>Современное оборудование</li>
                </ul>
            </div>

        </div>
        <button onClick={authed ? ()=> setAuthed(false) : ()=> setAuthed(true) } >{authed ? 'log out' : 'log in'}</button>
    </div>
)
}

export default Body
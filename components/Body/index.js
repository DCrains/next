import React from 'react'
import styles from './Body.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';

const Body = () => {
    const matches = useMediaQuery('(min-width:1069px)')
   
    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <div className={styles.first}>
                    Замена и ремонт глушителей <br>
                    </br>в Санкт-Петербурге
                </div>
                {matches ? <div className={styles.vertical}>
                    GLUSHAC
                </div> : <div></div>}
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
            
        </div>
    )
}

export default Body
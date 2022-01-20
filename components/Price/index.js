import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from './Price.module.css'


const Price = () => {
  const [keys, setKeys] = useState([])
  const [tokens, setTokens] = useState([])
  useEffect(() => {
    axios.get('https://api.pancakeswap.info/api/v2/tokens')
      .then(response => {
        setTokens(Object.values(response.data.data))
        console.log(response.data.data)
        setKeys(Object.keys(response.data.data))
      })
      .catch(error => console.log(error))
  }, [])



  return (
    <div className={styles.token1}>

      {tokens && keys && tokens.map((token, idx) => {
        console.log(keys[idx])
        return (
          <div key={idx} className={styles.tokencontainer}>
            <div className={styles.tokencard}><p className={styles.p} >адрес: {keys[idx]}</p>
            <p className={styles.p} >название: {token.name}</p>
           <p className={styles.p} >символ: {token.symbol}</p>
           <p className={styles.p} >стоимость: {token.price_BNB}</p></div>
          </div>
        )
      })
      }
    </div>
  )
}
export default Price

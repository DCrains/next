import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    
    const [authed, setAuthed] = React.useState(false)
    const [name, setname] = React.useState()
    const [password, setpassword] = React.useState()
    const [nameDirty, setnameDirty] = React.useState(false)
    const [passwordDirty, setpasswordDirty] = React.useState(false)
    const [nameError, setnameError] = React.useState('имя не может быть пустым')
    const [passwordError, setpasswordError] = React.useState('пароль не может быть пустым')


 
    const nameHandler =(jopa)=>{
        setname(jopa.target.value)
        if (jopa.target.value.length < 3 || jopa.target.value.length > 8 ){
            setnameError('имя должно быть длинее 3 или менее 8')
            if(!jopa.target.value){
                setnameError('имя не может быть пустым') 
            }
        } else {
            setnameError()
        }

    }
    const passwordHandler =(jopa)=>{
        setpassword(jopa.target.value)
        if (jopa.target.value.length < 3 || jopa.target.value.length > 8 ){
            setpasswordError('пароль должен быть длинее 3 или менее 8')
            if(!jopa.target.value){
                setpasswordError('пароль не может быть пустым') 
            }
        } else {
            setpasswordError()
        }

    }

    const blurHandler = (jopa) => {
        switch (jopa.target.name){
            case 'name' :
                setnameDirty(true)
                break
                case 'password' :
                setpasswordDirty(true)
                break
        }
    }
     return(

      <div>
              {!authed ? <form className={styles.form}> <h1 className={styles.h1}>Ты кто ежи?</h1>
              {(nameDirty && nameError) && <div className={styles.Error}>{nameError}</div>} 
              <input className={styles.input1} onChange={jopa => nameHandler(jopa)} value={name} onBlur={jopa => blurHandler(jopa)} name='name' type='text' placeholder='Имя' ></input>
              {(passwordDirty && passwordError) && <div className={styles.Error}>{passwordError}</div>} 
              <input className={styles.input2} onChange={jopa => passwordHandler(jopa)} value={password} onBlur={jopa => blurHandler(jopa)} name='password' type='password' placeholder='Пароль' ></input> </form> : <div></div>}
          <button className={styles.button2} onClick={authed ? () => setAuthed(false) : () => setAuthed(true)} >{authed ? <button className={styles.button1}>log out</button> : <button className={styles.button}>log in</button>}</button>
          
        
      </div>
    )

}

export default Footer
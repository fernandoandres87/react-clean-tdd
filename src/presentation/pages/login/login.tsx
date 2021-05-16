import React from 'react'
import Styles from './login.styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Logo from '@/presentation/components/logo/logo'

const Login: React.FC = () => {
  return (
    <div className= { Styles.login }>
      <header className= { Styles.header }>
        <Logo />
      </header>
      <form className= { Styles.form }>
        <h2> Login </h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Escriba su email"/>
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Escriba su password"/>
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type='submit'> Entrar </button>
        <span className={Styles.link}>Crear Cuenta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <footer className= { Styles.footer }>

      </footer>
    </div>
  )
}

export default Login

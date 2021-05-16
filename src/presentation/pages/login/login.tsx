import React from 'react'
import Styles from './login.styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'

const Login: React.FC = () => {
  return (
    <div className= { Styles.login }>
      <Header />
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
      <Footer />
    </div>
  )
}

export default Login

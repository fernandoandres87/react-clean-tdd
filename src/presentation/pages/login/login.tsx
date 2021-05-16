import React, { useState } from 'react'
import Styles from './login.styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false
  })
  const [errorState] = useState({
    email: 'Campo obligatorio',
    password: 'Campo obligatorio',
    main: ''
  })
  return (
    <div className= { Styles.login }>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
        <form className= { Styles.form }>
          <h2> Login </h2>
          <Input type="email" name="email" placeholder="Escriba su email" />
          <Input type="password" name="password" placeholder="Escriba su password" />
          <button data-testid="submit" disabled className={Styles.submit} type='submit'> Entrar </button>
          <span className={Styles.link}>Crear Cuenta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login

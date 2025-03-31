import React from 'react'
import {Appname} from '../components/appname.jsx'
import {Logincard} from '../components/logincard.jsx'

export const Login = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-sky-900">
      <Appname/>
      <Logincard/>
    </div>
  )
}

import RegisterComponent from 'components/CardRegister'
import React from 'react'
import NavegacionComponent from 'components/Layout/Header'
import Head from 'next/head'

export default function Register() {
  return (
    <>
      <Head>
        <title>GW | Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavegacionComponent />
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <RegisterComponent />
      </div>
    </>
  )
}

import React, { Fragment } from 'react'
import Head from 'next/head'
import NavegacionComponent from '../components/Layout/Header'

export default function Register() {
  return (
    <Fragment>
      <Head>
        <title>GW | Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavegacionComponent />
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      ></div>
    </Fragment>
  )
}

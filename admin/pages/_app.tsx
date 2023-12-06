import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '@/context/AppContext'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [user,setUser]=useState("amal")
  return(
    <Layout>
      <AppContext.Provider value={{
        user,setUser
      }}>
     <Component {...pageProps} />
     </AppContext.Provider>
     </Layout>
     )
}

import {useEffect, useState} from 'react'
import axios from 'axios'
import Head from 'next/head'
import Navbar from './Navbar'
import styles from '../styles/layout.module.scss'

export default function Layout({children}) {
    const [data, setData] = useState({})
  useEffect(async () => {
    const result = await axios.get('http://www.localhost:1337/home-page')
    setData(result?.data)
  }, [])
    return (
        <>
        <Head>
            <title>Next Js Blog</title>
        </Head>
        <Navbar data={data}/>
        <main className={styles.main}>
            {children}
        </main>
        </>
    )
}
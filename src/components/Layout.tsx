import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from './Navbar'

export default function Layout({ children }:any) {
    return (
        <>
            <Head>
                <title>Openforge Library</title>
            </Head>
            <Navbar/>
            <main>{children}</main>
        </>
    )
}
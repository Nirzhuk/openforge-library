import Head from 'next/head'
import React from 'react'
import styles from './layout.module.css'
import Navbar from './Navbar'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
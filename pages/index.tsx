import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Intro to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Link href="/listings">See all Listings</Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/jzxhuang/htn-next-js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Jeff
        </a>
      </footer>
    </div>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";
import styles from '../styles/Article.module.css'
import Link from 'next/link'
import {server} from '../config'

export default function Home({articles}) {
  return (
    <div className={styles.grid}>
      {articles?.map((articles) => (
        <div key={articles.id}>
        <Link href={`/data/${articles.id}`}>
          <a>
            <h3>{articles.title} &rarr;</h3>
          <p>{articles.body}</p>
          </a>
        </Link>
        </div>
      ))}
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
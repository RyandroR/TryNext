import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";
import styles from '../styles/Article.module.css'
import Link from 'next/link'

export default function Home() {
  const [data, setData] = useState();

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(data)
  return (
    <div className={styles.grid}>
      {data?.map((data) => (
        <div key={data.id}>
        <Link href={`/data/${data.id}`}>
          <a>
            <h3>{data.title} &rarr;</h3>
          <p>{data.body}</p>
          </a>
        </Link>
        </div>
      ))}
    </div>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import React, { useState } from "react";

const [data, setData] = useState();

fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });



export default function Home({ data }) {
  console.log(data)
  return (
    <div >
      
      <div>
        Welcome to next
      </div>
      {data?.map((data)=>(
      <div  key={article.id}>
        <h3>{article.title}</h3> 
      </div>
    ))}
    </div>
  )
}
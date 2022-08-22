import Head from 'next/head'
import Image from 'next/image'

export default function Home({articles}) {
  return (
    <div >
      <div>
        Welcome to next
      </div>
      {articles.map((article)=>{
        <h3>{article.title}</h3>
      })}
    </div>
  )
}

export const getStaticsProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/post?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

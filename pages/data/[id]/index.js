import {useRouter} from 'next/router'
import Link from 'next/link'
import {server} from '../../../config'

const Article = ({article}) => {
    const Router = useRouter();
    const {id} = Router.query
  return (
    <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Kooooo</Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return{
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map((id) => ({ params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default Article
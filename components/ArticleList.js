
const ArticleList = ({articles}) => {
  return (
    <div>
    {articles?.map((articles)=>(
      <div  key={article.id}>
        <a href="">
        <h3>{article.title}</h3> 
        </a> 
      </div>
    ))}
  </div>
  )
}

export default ArticleList
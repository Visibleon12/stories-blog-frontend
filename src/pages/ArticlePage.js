import React,{ useState,useEffect } from 'react'
import articles from './article-content'
import ListComponent from '../components/ListComponent';
import NotFoundPage from './NotFoundPage'
import CommentsList from '../components/CommentsList'
import UpvotesButton from '../components/UpvoteButton'
import AddCommentForm from '../components/AddCommentForm'

const ArticlePage=({ match })=>{
  const name=match.params.name;
  const article=articles.find(article=>article.name===name);
  
  const [articlesInfo,setArticlesInfo]=useState({ upvotes:0, comments:[] })
  useEffect(()=>{
    const fetchData= async ()=>{
      const result= await fetch(`/api/articles/${name}`)
      const body= await result.json()
      setArticlesInfo(body)
    }
    fetchData()
  },[name])
  if(!article){return (
   <NotFoundPage/>
  )}
  const otherArticles=articles.filter(article=>article.name!==name)
  return(
    <React.Fragment>
      <h1>{article.title}</h1>
      <UpvotesButton articleName={name} setArticleInfo={setArticlesInfo} upvotes={articlesInfo.upvotes}/>
      {article.content.map((paragraph,key)=>(
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articlesInfo.comments}/>
      <AddCommentForm articleName={name} setArticlesInfo={setArticlesInfo}/>
      <h3>Other Articles</h3>
      <ListComponent articles={otherArticles}/>
    </React.Fragment>
)}

export default ArticlePage
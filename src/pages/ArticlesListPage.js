import React from 'react'
import articles from './article-content'
import ListComponent from '../components/ListComponent'


const ArticlesListPage=()=>(
    <React.Fragment>
      <h1>Articles</h1>
      <ListComponent articles={articles}/>
    </React.Fragment>
)

export default ArticlesListPage
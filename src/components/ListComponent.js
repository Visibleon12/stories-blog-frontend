import React from 'react'
import {Link} from 'react-router-dom'

const ListComponent=({articles})=>(
  <>
    {articles.map((articles,key)=>(
        <Link key={key} to={`/article/${articles.name}`}>
          <h3>{articles.title}</h3>
          <p>{articles.content[0].substring(0,250)}...</p>
        </Link>
    ))}
  </>
)

export default ListComponent
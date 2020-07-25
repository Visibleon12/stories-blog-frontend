import React,{useState} from 'react'

const AddCommentForm=({articleName,setArticlesInfo})=>{
  const [userName,setUserName]=useState('')
  const [commentText,setCommentText]=useState('')
  const addComment=async ()=>{
    console.log(userName)
    const result=await fetch(`/api/articles/${articleName}/add-comment`,{
      method:'post',
      body: JSON.stringify({
        username:userName,
        text: commentText
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const body= await result.json()
    setArticlesInfo(body)
    setCommentText('')
    setUserName('')
  }
  return(
<>
<div id="add-comment-form">
  <h3>Add a Comment</h3>
  <label>
    Name:
    <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
  </label>
  <label>
    Comment:
    <textarea  cols="50" rows="4" value={commentText} onChange={(event)=>setCommentText(event.target.value)}></textarea>
  </label>
  <button onClick={addComment}>Add Comment</button>
</div>
</>
)}
export default AddCommentForm
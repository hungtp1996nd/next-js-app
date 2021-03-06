import {useState} from "react";

const CommentPage = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const handleLoadComments = async () => {
    const response = await fetch('http://localhost:3000/api/comments')
    const comments = await response.json()
    setComments(comments)
  }

  const handleAddComment = async () => {
    const response = await fetch('http://localhost:3000/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }) ,
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await response.json()
  }

  const handleDeleteComment = async commentId => {
    const response = await fetch(`http://localhost:3000/api/comments/${commentId}`, {
      method: 'DELETE'
    })
    const data = response.json()
    await handleLoadComments()
  }

  return (
    <div>
      <button onClick={handleLoadComments}>Load comments</button>
      <div>
        <input type="text" value={comment} onChange={(event => setComment(event.target.value))}/>
        <button onClick={handleAddComment}>Add comment</button>
      </div>
      {
        comments?.map(comment => <div key={comment.id}>{comment.id} - {comment.text} <button onClick={() => handleDeleteComment(comment.id)}>Delete</button></div>)
      }
    </div>
  )
}

export default CommentPage
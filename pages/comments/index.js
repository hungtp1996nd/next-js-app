import {useState} from "react";

const CommentPage = () => {
  const [comments, setComments] = useState([])
  const handleLoadComments = async () => {
    const response = await fetch('http://localhost:3000/api/comments')
    const comments = await response.json()
    setComments(comments)
  }
  return (
    <div>
      <button onClick={handleLoadComments}>Load comments</button>
      {
        comments?.map(comment => <div key={comment.id}>{comment.id} - {comment.text}</div>)
      }
    </div>
  )
}

export default CommentPage
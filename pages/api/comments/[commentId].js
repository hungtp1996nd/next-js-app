import { comments } from "../../../data/comment";

export default function handler(req, res) {
  const { commentId } = req.query
  if (req.method === 'GET') {
    const commentById = comments.find(comment => comment.id === parseInt(commentId))
    res.status(200).json(commentById)
  } else if (req.method === 'DELETE') {
    let deleteIndex = comments.findIndex(comment => comment.id === parseInt(commentId))
    comments.splice(deleteIndex, 1)
    res.status(200).json(comments)
  }
}
import { comments } from "../../../data/comment";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(comments)
  } else if (req.method === 'POST') {
    const comment = req.body.comment
    const currentMaxId = Math.max.apply(Math, comments.map(function(o) { return o.id; }))
    const newComment = {
      id: currentMaxId + 1,
      text: comment,
    }
    comments.push(newComment)
    res.status(201).json(comment)
  }
}
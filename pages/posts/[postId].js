const Post = ({ post }) => {
  return (
    <>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </>
  )
}

export default Post;

export async function getStaticPaths() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  // need to define paths array of postId we need calling and get response from dynamic this postId
  const paths = posts.map(post => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })
  return {
    paths,
    // fallback contain 3 values: false, true, blocking
    // when fallback set to false => if paths params is not exist => return 404 page, fallback false paths returned will be rendered to HTML file with corresponding "id"
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const post = await data.json()

  return {
    props: {
      post,
    }
  }
}

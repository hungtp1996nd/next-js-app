import { useRouter } from "next/router";
import { getPathFromLimit } from "../../lib/post";

const Post = ({ post }) => {
  const router = useRouter()
  if (router.isFallback) return <h2>Loading...</h2>
  return (
    <>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </>
  )
}

export default Post;

export async function getStaticPaths() {
  const paths = await getPathFromLimit(5)
  return {
    paths,
    // fallback contain 3 values: false, true, blocking
    // when fallback set to false => if paths params is not exist => return 404 page, fallback false paths returned will be rendered to HTML file with corresponding "id"
    fallback: true,
    // when fallback set to true => page fallback into line 6 will be showing to wait the full page has done by initial rendered.
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

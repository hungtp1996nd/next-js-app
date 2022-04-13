import Link from 'next/link'

const PostList = ({ posts }) => {
  return (
    <>
      <h2>Post List page</h2>
      {
        posts?.map(post => <Link key={post.id} href={`/posts/${post.id}`}><li>{post.title}</li></Link>)
      }
    </>
  )
}

export default PostList;

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  return {
    props: {
      posts,
    }
  }
}

const PostList = ({ posts }) => {
  return (
    <>
      <h2>Post List page</h2>
      {
        posts?.map(post => <li key={post.id}>{post.title}</li>)
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

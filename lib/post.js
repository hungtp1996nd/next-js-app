export const getPathFromLimit = async (limit) => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    const posts = await data.json()

    // need to define paths array of postId we need calling and get response from dynamic this postId
    return posts.map(post => {
      return {
        params: {
          postId: `${post.id}`
        }
      }
    })
  } catch (err) {
    console.log(err)
  }
}

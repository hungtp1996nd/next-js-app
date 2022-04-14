import {getPathItem} from "../../lib/item";
import { useRouter } from "next/router";

const Item = ({ item }) => {
  const router = useRouter()
  if (router.isFallback) return <h2>Loading...</h2>
  return (
    <h2>{item.title} - {item.price} - {item.description}</h2>
  )
}

export default Item

export async function getStaticPaths() {
  const paths = await getPathItem()
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:4000/items/${params.itemId}`);
  const item = await response.json()

  return {
    props: {
      item,
    },
    //When a request is made to a page that was pre-rendered at build time, it will initially show the cached page.
    //
    // Any requests to the page after the initial request and before 10 seconds are also cached and instantaneous.
    // After the 10-second window, the next request will still show the cached (stale) page
    // Next.js triggers a regeneration of the page in the background.
    // Once the page generates successfully, Next.js will invalidate the cache and show the updated page. If the background regeneration fails, the old page would still be unaltered.
    revalidate: 10,
  }
}
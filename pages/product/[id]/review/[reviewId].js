import {useRouter} from "next/router";

const Review = () => {
  const router = useRouter()
  const { id, reviewId } = router.query
  return (
    <div>Review {reviewId} for product {id}</div>
  )
}

export default Review
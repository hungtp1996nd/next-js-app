import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>Product Id page of {id}</div>
  )
}

export default ProductId
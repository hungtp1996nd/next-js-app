// using naming file to create dynamic routing, and it must both into "product" folder and export default
import {useRouter} from "next/router";

const ProductDetail = () => {
  const router = useRouter()
  const productId = router.query.productId
  return (
    <div>Product detail page {productId}</div>
  )
}

export default ProductDetail
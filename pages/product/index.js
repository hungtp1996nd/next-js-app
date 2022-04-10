// when product folder is created, index.js file will be presented with "/product" routing
import Link from 'next/link'
const Product = () => {
  return (
    <>
      <Link href={'/'}>Home page</Link>
      <div>Product page</div>
      <Link href={'/product/1'}>
        Product 1 page
      </Link>
    </>
  )
}

export default Product
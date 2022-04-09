// catch all routes
// using for only file into folder to many dynamic routing
import {useRouter} from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query
  // handle mock logic with params
  if (params.length === 2) {
    return <div>Using for feature {params[0]} of product {params[1]}</div>
  } else if (params.length === 1) {
    return <div>Using for only route --- for feature {params[0]}</div>
  }
  return (
    <div>Doc page for catch all routes</div>
  )
}

export default Doc;
// catch all routes
// using for only file into folder to many dynamic routing
import {useRouter} from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query
  console.log(params)
  return (
    <div>Doc page for catch all routes</div>
  )
}

export default Doc;
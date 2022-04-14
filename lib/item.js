export const getPathItem = async () => {
  const response = await fetch('http://localhost:4000/items')
  const data = await response.json()

  return data?.map(item => {
    return {
      params: {
        itemId: `${item.id}`
      }
    }
  })
}
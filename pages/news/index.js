const News = ({ news }) => {
  return (
    <div>
      <h2>Articles page from news sources</h2>
      {
        news?.map(newItem => <div key={newItem.id}>
          <h2>
            {newItem.id} - {newItem.title} - {newItem.category}
          </h2>
        </div>)
      }
    </div>
  )
}

export default News

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const news = await response.json()

  return {
    props: {
      news,
    }
  }
}

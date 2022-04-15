const Events = ({ events }) => {
  return (
    <div>
      <h1>List of events</h1>
      {
        events?.map(event => {
          return (
            <div key={event.id}>
              <h2>{event.id} - {event.title} - {event.date} | {event.category}</h2>
              <p>{event.description}</p>
              <hr/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Events

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/events')
  const events = await response.json()

  return {
    props: {
      events,
    }
  }
}

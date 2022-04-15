import { useState } from "react";

const Events = ({ eventList }) => {
  const [events, setEvents] = useState(eventList)
  const handleFilterSportCategory = async () => {
    const response = await fetch('http://localhost:4000/events?category=sports')
    const data = await response.json()
    setEvents(data)
  }
  return (
    <div>
      <h1>List of events</h1>
      <button onClick={handleFilterSportCategory}>Filter sport category</button>
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

export async function getServerSideProps(context) {
  const { query } = context
  const { category } = query
  const queryString = category ? 'category=sports' : ''
  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const events = await response.json()

  return {
    props: {
      eventList: events,
    }
  }
}

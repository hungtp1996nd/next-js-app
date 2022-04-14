const Items = ({ items }) => {
  return (
    <div>
      {
        items?.map(item => <p key={item.id}>{item.title} - {item.price} - {item.description}</p>)
      }
    </div>
  )
}

export default Items;

export async function getStaticProps() {
  const response = await fetch('http://localhost:4000/items');
  const items = await response.json();

  return {
    props: {
      items,
    }
  }
}
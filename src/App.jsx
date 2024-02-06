import './App.css'

const data = [
  {
    id: '1',
    title: 'Tiramisu',
    description: 'The best tiramisu in town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$4.50',
  },
  {
    id: '2',
    title: 'Popcorn',
    description: 'The best popcorn in town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$2.60',
  },
  {
    id: '3',
    title: 'Ceviche',
    description: 'The best ceviche in town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$8.00',
  },
]

function App() {
  const topDesserts = data.map((dessert) => {
    return (
      {
        content: `${dessert.title} - ${dessert.description}`,
        price: dessert.price,
        id: dessert.id
      }
    )
  })

  const rend = topDesserts.map(dessert => {
    return       (
      <div key={dessert.id}>
        <p>{dessert.content}</p>
        <p>{dessert.price}</p>
      </div>
    )
  })
  console.log(topDesserts)
  return (
    <>
      <div>{rend}</div>
    </>
  )
}

export default App

import './App.css'
import ListItem from './components/Container'

const data = [
  {
    id: '1',
    title: 'Tiramisu',
    description: 'The best tiramisu in town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$4.50',
    alt: 'Tiramisu',
  },
  {
    id: '2',
    title: 'Popcorn',
    description: 'The best popcorn in town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$2.60',
    alt: 'Popcorn',
  },
  {
    id: '3',
    title: 'Ceviche',
    description: 'The best ceviche in town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$8.00',
    alt: 'Ceviche',
  },
]

function App() {
  // const topDesserts = data.map((dessert) => {
  //   return {
  //     content: `${dessert.title} - ${dessert.description}`,
  //     price: dessert.price,
  //     id: dessert.id,
  //     image: dessert.image,
  //     alt: dessert.alt,
  //   }
  // })

  // const rend = data.map((dessert) => {
  //   return (
  //     <ListItem
  //       key={dessert.id}
  //       title={dessert.title}
  //       description={dessert.description}
  //       alt={dessert.alt}
  //       image={dessert.image}
  //     />
  //   )
  // })
  // console.log(rend)

  const data2 = ["perro", "gato", "pepito"]

  const data3 = [...data2]
  data2.push("Manzana")
  data3.push("caballo")
  console.log(data2)
  console.log(data3)

  const popp = data2.reverse()
  console.log(popp)
  return (
    <>
      {/* <ul>{rend}</ul> */}
      <p>Hola</p>
    </>
  )
}

export default App

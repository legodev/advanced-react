export default function ListItem({ data }) {
	const sorted = (a, b) => a.calories - b.calories

  const newDesserts = data.filter((dessert) => dessert.calories <= 500)
  newDesserts.sort(sorted)
	console.log(newDesserts)
  const dessertItem = newDesserts.map((element) => {
    return (
      <li
        key={element.createdAt}
      >{element.name} - {element.calories} cal</li>
    )
  })
  console.log(newDesserts)
  return (
    <ul>
      {dessertItem}
    </ul>
  )
}

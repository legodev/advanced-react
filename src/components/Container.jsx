export default function ListItem({ title, description, price, image, alt }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <img src={image} alt={alt} />
    </li>
  )
}

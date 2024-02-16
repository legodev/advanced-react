// import { useEffect, useState } from 'react'

export default function App() {
  // const [toggle, setToggle] = useState(false)

  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }

  // useEffect(() => {
  //   document.title = toggle ? 'Mostrando' : 'Oculto'
  // }, [toggle])

  console.log("Próximo cliente")

  fetch('https://randomuser.me/api//?results=1')
    .then(response => response.json())
    .then(data => console.log(data))

console.log('Congratulations')

  return (
    <div style={{ padding: '40px' }}>
      {/* <button onClick={handleToggle}>
        {toggle ? 'Hide message' : 'Show message'}
      </button>
      <p>{toggle && 'Que onda perri'}</p> */}
    </div>
  )
}

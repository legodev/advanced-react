import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true)

  async function request() {
    try {
      const f = await fetch('https://randomuser.me/api//?results=1')
      if (!f.ok) {
        throw new Error('Falló')
      }
      const data = await f.json()
      setData(data.results[0])
    } catch (error) {
      console.log(error)
    }
  }

  const keys = Object.entries(data)
  console.log(keys)

  const matriz = [
    [1, 2, 3],
    [4, [77, 11, [5], 99], 6],
    [7, 8, 9],
  ]
  const five = matriz[1][1][2][0]
  console.log(five)

  console.log(data)
  useEffect(() => {
    request()
  }, [])
  return Object.keys(data).length > 0 ? (
    <div style={{ padding: '40px' }}>
      {/* {loading ? <p>Data fetching</p> : `${data.gender}`} */}
      <p>{data.gender}</p>
    </div>
  ) : (
    <p>Data fetching</p>
  )
}

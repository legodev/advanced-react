import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

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
    } finally {
      setLoading(false)
    }
  }

  console.log(data)
  useEffect(() => {
    request()
  }, [])
  return (
    <div style={{ padding: '40px' }}>
      {loading ? <p>Data fetching</p> : `${data.gender}`}
    </div>
  )
}

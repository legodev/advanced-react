import { useState, useEffect } from 'react'

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (url.includes('desserts')) {
      setData(['cake', 'ice cream', 'pie', 'brownie'])
    } else {
      setData(['water', 'soda', 'juice'])
    }
  }, [])

  return render(data)
}

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => {
        return <p>{data.length} desserts</p>
      }}
    />
  )
}

const DrinksCount = () => {
  return (
    <DataFetcher
    url="https://littlelemon/drinks"
    render={(data) => {
      return (
        <h3>{data.length} drinks</h3>
      )
    }} />
  )
}

export default function App() {
  return (
    <>
      <h1>Hello React</h1>
      <DessertsCount />
      <DrinksCount />
    </>
  )
}

import React from 'react'

function App() {
  const [user, setUser] = React.useState([])

  const fetchData = () => {
    try {
      fetch('https://randomuser.me/api/?results=1')
        .then((res) => res.json())
        .then((data) => setUser(data.results[0]))
    } catch (error) {
      console.log(error)
    }
  }

  console.log(user)

  React.useEffect(() => {
    fetchData()
  }, [])

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: '40px' }}>
      <h1>Customer data</h1>
      <div>
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <picture>
          <img
            src={user.picture.large}
            width={200}
            alt={`${user.name.first} ${user.name.last} Image`}
          />
        </picture>
      </div>
    </div>
  ) : (
    <h1>Data pending...</h1>
  )
}

export default App

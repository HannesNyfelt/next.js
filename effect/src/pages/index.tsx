import React, { useEffect, useState } from "react"

export default function Home() {
  const [users, setUsers] = useState([])
  const [update, setUpdate] = useState(0)
  async function fetchData() {
    const res = await fetch('http://10.111.3.78:3000/api/users');
    const data = await res.json();
    setUsers(data)

  }
  useEffect(() => {
    fetchData()
    console.log('render');

  }, [update])
  return (
    <div>
      {users.map(user => (
        <div>
          <h1>{user.name}</h1>
        </div>

      ))}
      <button onClick={() => setUpdate(update + 1)}>render</button>
    </div>

  )
}

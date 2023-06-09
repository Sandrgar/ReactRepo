import React, {useState, useEffect} from 'react'


function GithubUser({username}) {
    const [users, setUsers] = useState()

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUsers(data)
            console.log(data)
        }
        fetchData()
    }, [username])

  return (
    <div>
        {users && <h2>Fullname: {users.name}</h2>}
        {users && <h2>Username: {users.login} </h2>}
       

    </div>
  )
}

export default GithubUser
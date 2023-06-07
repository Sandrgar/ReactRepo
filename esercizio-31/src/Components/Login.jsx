import { useState } from "react"


export function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange(event){
        const {name, type, value, checked} = event.target

        setData((data) => ({
            ...data,
            [name]: type === "checkbox" ? checked : value,
          }));
          console.log(data)
    }

    return (
        <form>
            <input onChange={handleInputChange} name="username" value={data.username}/>
            <input onChange={handleInputChange} name="password" value={data.password} type="password"/>
            <input onChange={handleInputChange} name="remember" value={data.remember} type="checkbox" />
        </form>
    )
}
import { useEffect, useState } from "react";
import User from './User';


const LoadUser = () => {
    const [users, setUsers] = useState([])

    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h1>User Loaded : {users.length}</h1>
            {
                users.map(user => <User name={user.name} phone ={user.phone}></User>)
            }
        </div>
    );
};

export default LoadUser;
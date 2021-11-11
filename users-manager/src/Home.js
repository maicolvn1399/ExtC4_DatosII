import {useState, useEffect } from 'react';
import UserList from './UsersList';

const Home = () => {
    //Variables reactivas 
    const [users,setUsers] = useState(null);

    //UseEffect Hook 
    useEffect(() => {
        fetch('http://localhost:3000/api/getUsuarios/')
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            setUsers(data);
        })
        .catch(err => {
            console.log(err.message);
        })
    },[]);

    return (
        <div className = "home">
            <h2>Mis Usuarios </h2>
            {users && <UserList users = {users} ></UserList>}
        </div>
    );
}
 
export default Home;


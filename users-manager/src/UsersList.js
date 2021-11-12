const UserList = ({users, handleRemoveUser}) => {

    return (  
        <div className="user-list">
            {users.map((user) => (
                <div className="user-preview" key= {user.code}>
                    <h2>Usuario</h2>
                    <p>Name: {user.name}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Age: {user.age}</p>
                    <p>Code: {user.code}</p>
                    <p>Country: {user.country}</p>
                    <button onClick = {() => handleRemoveUser(user.code)}>Remove User</button>
                </div>
            ))}
        </div>
    );
}
 
export default UserList;
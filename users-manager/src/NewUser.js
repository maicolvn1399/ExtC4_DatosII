import {useState} from 'react';

const  NewUser = () => {
    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [code,setCode] = useState(0);
    const [country, setCountry] = useState('');

    const handlePost = (e) => {
        e.preventDefault();
        const newUserObject = {name,lastName, age, code, country};
        fetch('http://localhost:3000/api/addUser/',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(newUserObject)
        })
        .then(() => {
            console.log('POSTED');
        })

    }


    return (
        <div className = "new-user" >
            <h2>Post a user</h2>
            <form onSubmit = {handlePost}>
                <label>
                    User Name: 
                    <input type = "text" required value={name} onChange = {(e) => setName(e.target.value)} />
                </label>
                <label>
                    LastName: 
                    <input type = "text" required value={lastName} onChange = {(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    Age: 
                    <input type = "number" required value={age} onChange = {(e) => setAge(e.target.value)} />
                </label>
                <label>
                    Code: 
                    <input type = "number" required value={code} onChange = {(e) => setCode(e.target.value)} />
                </label>
                <label>
                    Country: 
                    <input type = "text" required value={country} onChange = {(e) => setCountry(e.target.value)} />
                </label>
                <button>POST</button>
            </form>
        </div>
    );
}
 
export default NewUser;
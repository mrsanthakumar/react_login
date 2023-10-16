import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:8080/api3/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/api3/users/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    return (
        <>
        <nav>
          <ul>
          <li onClick={() => navigate("../user/list", {replace : true})}>
              <Link >List Users</Link>
            </li>
            <li onClick={() => navigate("../user/create", {replace : true})}>
              <Link >Create User</Link>
            </li>
            <li onClick={() => navigate("../product/create", {replace : true})}>
              <Link >Create Product</Link>
            </li>
            <li onClick={() => navigate("../product/", {replace : true})}>
              <Link>List Product</Link>
            </li>      
          </ul>
        </nav>
        <div>
            <h1>List Users</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Mobile</th>
                        <th>Mode of Payment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.country}</td>
                            <td>{user.mobile}</td>
                            <td>{user.payment}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
        </>
    )
}

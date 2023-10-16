import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/api3/users/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
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
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Address: </label>
                            </th>
                            <td>
                                <input type="text" name="address" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>City: </label>
                            </th>
                            <td> 
                                <input type="text" name="city" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Country: </label>
                            </th>
                            <td>
                                <input type="text" name="country" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mode of Payment: </label>
                            </th>
                            <td>
                                <input type="text" name="payment" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        </>
    )
}

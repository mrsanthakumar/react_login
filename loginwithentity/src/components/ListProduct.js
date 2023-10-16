import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListProduct() {
    const navigate = useNavigate();
    const [product, setProducts] = useState([]);
    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        axios.get('http://localhost:8080/api3/product/').then(function(response) {
            console.log(response.data);
            setProducts(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/api3/product/${id}/delete`).then(function(response){
            console.log(response.data);
            getProduct();
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
            <h1>List Product</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>   
                        <th>Product Made By</th>
                        <th>Department</th>
                        <th>Price</th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product, key) =>
                        <tr key={key}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.made}</td>
                            <td>{product.dept}</td>
                            <td>{product.price}</td>
                            
                            <td>
                                <Link to={`${product.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(product.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
        </>
    )
}

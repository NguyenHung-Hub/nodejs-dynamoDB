import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState(null);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function getData() {
      const result = await axios("http://localhost:8080/products");
      console.log(result);
      setProducts(result.data);
    }

    getData();
  }, []);

  console.log(products);

  const handleSave = () => {
    async function sendData() {
      const result = await axios.post("http://localhost:8080/products", {
        id,
        name,
        quantity,
        price,
      });
    }

    sendData();
  };

  return (
    <div className="container">
      <div className="form">
        <form action="">
          <input
            onChange={(e) => setId(e.target.value)}
            value={id}
            type="text"
            placeholder="Nhập id"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Nhập tên"
          />
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            type="number"
            placeholder="Nhập số lượng"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="Nhập giá"
          />
          <input type="file" />
          <input
            type="button"
            value="Save"
            className="btn-send"
            onClick={handleSave}
          />
        </form>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>image</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>

          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product?.price}</td>
              <td>image</td>
              <td>
                <input type="button" value="Delete" className="btn-action" />
              </td>
              <td>
                <input type="button" value="Update" className="btn-action" />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;

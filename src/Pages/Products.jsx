import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { json } from 'react-router-dom';

export default function Products() {

  const [products, setProducts] = useState([])

useEffect(()=>{
  axios.get(`https://dummyjson.com/products`).then(json=> setProducts(json.data.products))

},[])

  return (
    <>
      <div className="container">
        <div className="my-5 text-center">
          <h1>Products</h1>
          <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam architecto!</p>
        </div>
        <div className="row">
          {
            products.map((val,key)=>
            <div className="col-md-4" key={key}>
            <Link className='text-decoration-none' to={`/products/${val.id}`}>

              <div className="Card">
                <Card.Img className='object-fit-fill' variant="top" src={val.thumbnail}/>
            
            <div className="content">
            <Card.Body>
              <Card.Title>{val.title}</Card.Title>
              <Card.Text>
              {val.description}
              </Card.Text>
            </Card.Body>
            </div>
</div>
</Link>
            </div>
            )
          }
        </div>

      </div>
    </>
  )
}

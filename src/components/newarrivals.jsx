/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { PRODUCTS } from './products';
import { PRODUCTS1 } from './products';
import ReactStars from "react-rating-stars-component";

const newarrivals = () => {
  return <>
     <NavLink to="/shop">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
      {PRODUCTS1.slice(2, 6).map((product) => (
        <div className="col mb-5">
          <div key={product.id} className="card h-100 m-auto">
            <img src={product.image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className='mb-3'>{product.name} </h5>
              <h6>Location : {product.location}</h6>
              <p>Use for: {product.use}</p>
              <div className="card-footer bg-white m-auto text-center">
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </NavLink>
  </>;
}

export default newarrivals
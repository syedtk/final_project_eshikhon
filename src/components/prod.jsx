/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'
import { ShopContext } from './shopcontext'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Details from '../pages/details';


const prod = (props) => {
    const {id, name, price, image, brand, location, OrginalPrice, sellingPrice} = props.data;
    const { addToCart, cartItems, viewProductDetails} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
  return <>
 <div className="col mb-5">
            <Link key={id}  className="card h-100 m-auto">
            <img src={image} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">

                <h5>{name} </h5>
                <p> Location : {location}</p>
                <p>Buying Price : {OrginalPrice}</p>
                <p>Seling Price : {sellingPrice}</p>
                
                <ReactStars
                    count={5}
                    edit={false}
                    value={4}
                    size={24}
                    activeColor="#EA9D5A"
                />
                <div className="mb-3">
                  
                
                <Link to='/details' onClick={() => viewProductDetails(id)}>
                <p className="text-center"><button className='fs-4' id='clear-cart'>View Details</button></p>
                </Link>
                </div>
               <div className="d-flex justify-content-center">
               <button 
                  onClick={() => {
                    addToCart(id);
                    event.target.classList.toggle("red");
                  }}
                  className="myButton"
                >
                  Add To Cart
                  {cartItemAmount > 0 && `(${cartItemAmount})`}
                </button>
               
              
               </div>
              </div>
            </Link>

            
        </div>
  </>
}

export default prod
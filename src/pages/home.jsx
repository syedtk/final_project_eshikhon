/* eslint-disable no-unused-vars */
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';
import cauro1 from '../assets/images/caurosel/7501133.jpg'
import cauro2 from '../assets/images/caurosel/old00.jpg'
import cauro3 from '../assets/images/caurosel/old01.jpg'


const home = () => {
  return <>
    <div id="carouselExampleIndicators" class="carousel container  slide ww">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={cauro1} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={cauro2} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={cauro3} class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    {/* <section className="banner">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="d-flex flex-column justify-content-center ">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner py">
                  <div className='back-details'>

                    <h1 cla>Super Value Deals</h1>


                    <p className='mb-3 text-white'>Save More Today With Us</p>

                    <div className=''>
                      <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <Hero />

    <section className="featured-products p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Featured Products</h1>
            <p>All products are use  within 1 years</p>
          </div>
          <Featuredproducts />
        </div>
      </div>
    </section>

    <section className="repair-services p-5">
      <div className="container-xxl">
        <div className="row ">
          <div className="repair-details text-center align-items-center">
            <h5 className='mb-3 text-white'> Upload your Thinking</h5>
            <h2 className='mb-3 text-white'>  J<span className='text-black'>ust up</span> loadYour old product here</h2>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
    </section>

    <section className="new-arrivals p-4">
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>Last 15 days</h1>
            <p>Choose yours</p>
          </div>
          <Newarrivals />
        </div>
      </div>
    </section>
    <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card m-auto mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={banner} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Hot Deals</h5>
                    <h2 className="card-text mb-2">Buy One get One free.</h2>
                    <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits</small></p>
                    <Link to='blog'>
                      <button className='mt-4'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-6 d-flex">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={banner1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Season-In</h5>
                    <h2 className="card-text mb-2">All Weather Attire</h2>
                    <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                    <Link to='blog'>
                      <button className='mt-4'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="blogs p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3">What our customers say...</h1>
            <p className="mb-4">Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog1} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='about'>
                  <button className="mt-4">Learn more</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog2} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='about'>
                  <button className="mt-4">Learn more</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog3} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='about'>
                  <button className="mt-4">Learn more</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog4} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='about'>
                  <button className="mt-4">Learn more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Newsletter />
  </>;
}

export default home
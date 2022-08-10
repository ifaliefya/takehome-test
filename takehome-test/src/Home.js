import React from 'react';
import { Image, Carousel } from 'antd';
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="home">
      <div className="home-hero">
        <img className="home-hero-bg" src={process.env.PUBLIC_URL + '/assets/bg-mapping.png'} alt="hero-bg" />
        <div className="home-hero-logo">
          <img src={process.env.PUBLIC_URL + '/assets/author.jpg'} alt="hero-logo"/>
        </div>
        <div className="container-carousel hero-carousel-1">
        <div className="carousel-wrapper">
            <Carousel autoplay>
              <div className='image-wrapper'>
                <Link className="link-carousel" to="/jobs"> 
                  <img src={process.env.PUBLIC_URL + '/assets/graphic-design-trends.png'} alt="carousel-2" />
                </Link>
              </div>
              <div className='image-wrapper'>
                <Link className="link-carousel" to="/jobs"> 
                  <img src={process.env.PUBLIC_URL + '/assets/image-banner1.jpg'} alt="carousel-2" />
                </Link>
              </div>
              <div className='image-wrapper'>
                <Link className="link-carousel" to="/jobs"> 
                  <img src={process.env.PUBLIC_URL + '/assets/designer-2.jpg'} alt="carousel-2" />
                </Link>
              </div>
              <div className='image-wrapper'>
                <Link className="link-carousel" to="/jobs"> 
                  <img src={process.env.PUBLIC_URL + '/assets/image-banner2.jpg'} alt="carousel-2" />
                </Link>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="container-carousel hero-carousel-2">
          <div className="carousel-wrapper">
            <Carousel autoplay>
              <div className='image-wrapper'>
                <Link className="link-carousel" to="/jobs"> 
                  <img src={process.env.PUBLIC_URL + '/assets/make-it-personal.jpg'} alt="carousel-2" />
                </Link>
              </div>
              <div className='image-wrapper'>
                <Link className="link-carousel" to="/jobs"> 
                  <img src={process.env.PUBLIC_URL + '/assets/make-it-personal-2.jpg'} alt="carousel-2" />
                </Link>
              </div>
              <div className='image-wrapper'>
                <Link className="link-carousel" to="/jobs"> 
                  <img src={process.env.PUBLIC_URL + '/assets/designer-1.jpg'} alt="carousel-2" />
                </Link>
              </div>
              <div className='image-wrapper'>
                <Link className="link-carousel" to="/jobs"> 
                  <img src={process.env.PUBLIC_URL + '/assets/designer-2.jpg'} alt="carousel-2" />
                </Link>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="container-banner banner-1">
          <Image src={process.env.PUBLIC_URL + '/assets/image-banner1.jpg'}  />
        </div>
        <div className="container-banner banner-2">
          <Image src={process.env.PUBLIC_URL + '/assets/image-banner2.jpg'}  />
        </div>
      </div>
    </div>
  );
}
 
export default Home;

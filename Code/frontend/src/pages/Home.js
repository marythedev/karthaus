import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

function scrollRight() {
  document.getElementById('home-category-nav').scrollLeft += 50;
}

function scrollLeft() {
  document.getElementById('home-category-nav').scrollLeft -= 50;
}

function UncontrolledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={window.location.origin + '/images/placeholder-img.jpg'} alt="Placeholder img" className="img-fluid" />
        <Carousel.Caption>
          <h1>Tech Setup</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={window.location.origin + '/images/placeholder-img.jpg'} alt="Placeholder img" className="img-fluid" />
        <Carousel.Caption>
          <h1>Tech Setup</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={window.location.origin + '/images/placeholder-img.jpg'} alt="Placeholder img" className="img-fluid" />
        <Carousel.Caption>
          <h1>Tech Setup</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Home = () => {
  return (
    <div className="home-body">
      <div id="home-category-container"className="d-flex flex-row align-items-center">
        <button className="scroll-btn" id="prev" onClick={scrollLeft}>
          <img src={window.location.origin + '/icons/chevron-prev.png'} alt="previous" height={15}></img>
        </button>
        <ul id="home-category-nav" className="d-flex flex-row justify-content-between align-items-center">
          <li><a href="#">Tech</a></li>
          <li><a href="#">Outdoor Gear</a></li>
          <li><a href="#">Home Appliances</a></li>
          <li><a href="#">Women's</a></li>
          <li><a href="#">Men's</a></li>
          <li><a href="#">Kids'</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Other</a></li>
        </ul>
        <button className="scroll-btn" id="next" onClick={scrollRight}>
          <img src={window.location.origin + '/icons/chevron-next.png'} alt="next" height={15}></img>
        </button>
      </div>

      <div id="carousel">
        <UncontrolledCarousel />
      </div>

      <br></br>
      <br></br>
      <br></br>
    </div >
  );
}

export default Home;

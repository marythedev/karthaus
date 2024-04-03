import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={window.location.origin + '/images/placeholder-img.jpg'} alt="Placeholder img" class="img-fluid" />
        <Carousel.Caption>
          <h1>Tech Setup</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={window.location.origin + '/images/placeholder-img.jpg'} alt="Placeholder img" class="img-fluid" />
        <Carousel.Caption>
          <h1>Tech Setup</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={window.location.origin + '/images/placeholder-img.jpg'} alt="Placeholder img" class="img-fluid" />
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
      <ul id="home-category-nav">
        <li><a href="#">Tech</a></li>
        <li><a href="#">Outdoor&nbsp;Gear</a></li>
        <li><a href="#">Home&nbsp;Appliences</a></li>
        <li><a href="#">Women's</a></li>
        <li><a href="#">Men's</a></li>
        <li><a href="#">Kids'</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Shoes</a></li>
        <li><a href="#">Other</a></li>
      </ul>

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

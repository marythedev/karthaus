import React from 'react';
import './Home.css';

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
      
      <h1>Welcome to our online shop :)</h1>
    </div >
  );
}

export default Home;

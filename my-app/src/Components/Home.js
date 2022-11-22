import React from 'react'
import Earth from '../imgs/Earth.jpg'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="myContainer">

        <div className="description">
          <h1>Paquik</h1>
          <h3> Driven by People</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
          <button className="btn btn-info">
            Get The App
          </button>
        </div>
        <div className="img home-img">
          <img src={Earth} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import './../css/BackGround.css'

class BackGround extends Component {
  render () {
    return (
        <div className='background'>
        <ParticlesBg type="cobweb" bg={true} />
        </div>
    )
  }
}

export default BackGround;
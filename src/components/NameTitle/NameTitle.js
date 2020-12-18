import React from 'react'
import './NameTitle.css'
import profile from '../../profile.jpg'

const NameTitle = () => {
    return (
        <header>
            <figure>
            <img src={profile} alt="" />
            </figure>
            <article>
            <h2 className="bebas-font">Muhammad Idrees</h2>
<h5 className="bebas-font">Wordpress Developer</h5>
<p className="robo-font">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlaore et dolore magna aliqua. Ut enimminim veniam, quis nostrud exercitation ullamco laboris nutiquip Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlaore et dolore magna aliqua. Ut enim minim veniam,  
</p>
            </article>
        </header>
    )
}

export default NameTitle

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
I’m a full-stack developer, trainer, and base in Karachi from Pakistan and working as a Senior staff for Ossols Pvt Ltd
</p>
            </article>
        </header>
    )
}

export default NameTitle

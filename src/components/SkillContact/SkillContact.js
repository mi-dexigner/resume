import React from 'react'
import Heading from '../Heading/Heading'
import './SkillContact.css'

const SkillContact = () => {
    return (
        <div className="skillContact">
            <article>
            <Heading title="My Skill" />
                <ul>
                    <li>
                        <h4 className="bebas-font">Software skills</h4>
                    </li>
                    <li>
                        <h4 className="bebas-font">Personal skills</h4>
                    </li>
                    <li>
                        <h4 className="bebas-font">LANGUAGES</h4>
                    </li>
                    <li>
                        <h4 className="bebas-font">INTERESTS</h4>
                    </li>
                </ul>
            </article>
            <article><Heading title="Contact Me" /></article>
        </div>
    )
}

export default SkillContact

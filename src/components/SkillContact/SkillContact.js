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
                        <h4 className="rale-font">Software skills</h4>
                    </li>
                    <li>
                        <h4 className="rale-font">Personal skills</h4>
                    </li>
                    <li>
                        <h4 className="rale-font">LANGUAGES</h4>
                    </li>
                    <li>
                        <h4 className="rale-font">INTERESTS</h4>
                    </li>
                    <li>
                        <h4 className="rale-font">Awards</h4>
                    </li>
                </ul>
            </article>
            <article><Heading title="Contact Me" /></article>
        </div>
    )
}

export default SkillContact

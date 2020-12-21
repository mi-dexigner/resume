import React from 'react'
import Heading from '../Heading/Heading'
import ProgressBar from '../ProgressBar/ProgressBar'
import './SkillContact.css'

const SkillContact = () => {
    return (
        <div className="skillContact">
            <article>
            <Heading title="My Skill" />
                <ul>
                    <li>
                        <h4 className="rale-font">Skills</h4>
                        <ProgressBar title="Adobe Photoshop" completed="75" />
                        <ProgressBar title="Adobe Illustrator" completed="55" />
                        <ProgressBar title="HTML5" completed="95" />
                        <ProgressBar title="CSS3" completed="90" />
                        <ProgressBar title="JavaScript" completed="60" />
                        <ProgressBar title="jQuery" completed="65" />
                        <ProgressBar title="Bootstrap HTML Framework" completed="95" />
                        <ProgressBar title="WordPress Custom Theme" completed="80" />
                        <ProgressBar title="PHP" completed="70" />
                        <ProgressBar title="Python" completed="60" />
                        <ProgressBar title="Codeigniter" completed="50" />
                        <ProgressBar title="Shopify Theme" completed="75" />
                        <ProgressBar title="Flutter" completed="50" />
                        <ProgressBar title="React" completed="65" />
                        <ProgressBar title="React Native" completed="60" />
                    </li>
                    <li>
                        <h4 className="rale-font">Personal skills</h4>
                        <ProgressBar title="Team Work" completed="90" />
                        <ProgressBar title="Leadership" completed="95" />
                    </li>
                    {/*<li>
                        <h4 className="rale-font">LANGUAGES</h4>
                    </li>
                    <li>
                        <h4 className="rale-font">INTERESTS</h4>
                    </li>*/}
                   
                </ul>
            </article>
            <article>
                <Heading title="Contact Me" />
            <ul>
                <li> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M21.743,12.331l-9-10c-0.379-0.422-1.107-0.422-1.486,0l-9,10c-0.265,0.293-0.331,0.715-0.17,1.076 C2.247,13.768,2.605,14,3,14h2v7c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-7h2 c0.395,0,0.753-0.232,0.913-0.593C22.074,13.046,22.008,12.625,21.743,12.331z"></path></svg>
                    <h5 className="mont-font">Addres</h5>
                    <p className="mont-font">Flat No. D - 6, Staff colony, Dow University Of Health Science (OJHA Campus) Karachi, Pakistan</p>
                </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z"></path></svg>
                <h5 className="mont-font">Email</h5>
                   <a href="mailto:hello@midexigner.com"  className="mont-font">hello@midexigner.com</a>   
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" ><path d="M20,10.999h2C22,5.869,18.127,2,12.99,2v2C17.052,4,20,6.943,20,10.999z"></path><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5V8zM16.422 13.443c-.399-.363-1.015-.344-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c.388-.376.406-.991.043-1.391L6.859 3.513c-.363-.401-.98-.439-1.391-.087l-2.17 1.861C3.125 5.461 3.022 5.691 3.008 5.936c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008.245-.014.475-.117.648-.291l1.86-2.171c.353-.411.313-1.027-.086-1.391L16.422 13.443z"></path></svg>
                    <h5 className="mont-font">Phone</h5>
                    <a href="tel:+923242340583" className="mont-font">+92 324 23 40 583</a>
                </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12.857,17.417c-2.947,0-4.294-1.524-4.294-2.641c0-0.266,0.108-0.521,0.298-0.705 c0.19-0.183,0.447-0.279,0.71-0.264c1.261,0,0.931,1.92,3.286,1.92c1.203,0,1.91-0.736,1.91-1.425 c0-0.415-0.234-0.889-1.028-1.079l-2.629-0.673c-2.111-0.545-2.479-1.737-2.479-2.842c0-2.293,2.068-3.124,4.036-3.124 c1.814,0,3.97,1.016,3.97,2.391c0,0.592-0.488,0.91-1.055,0.91c-1.078,0-0.897-1.536-3.063-1.536c-1.077,0-1.645,0.513-1.645,1.23 c0,0.717,0.839,0.96,1.574,1.123l1.941,0.445c2.126,0.486,2.691,1.751,2.691,2.963c0,1.865-1.423,3.305-4.226,3.305 M20.993,13.473c0.086-0.49,0.128-0.986,0.128-1.482c0.01-2.495-1.071-4.866-2.952-6.474c-1.879-1.609-4.365-2.288-6.788-1.856 C10.638,3.226,9.794,2.998,8.935,3c-1.763,0.01-3.387,0.97-4.27,2.519C3.784,7.068,3.778,8.976,4.65,10.53 c-0.487,2.714,0.366,5.497,2.282,7.453c1.917,1.955,4.655,2.835,7.333,2.355c0.743,0.435,1.586,0.663,2.443,0.662 c1.764-0.011,3.386-0.97,4.269-2.518C21.859,16.934,21.866,15.027,20.993,13.473" transform="translate(-1)"></path></svg>
                <h5 className="mont-font">Skype</h5>
                    <a href="skype:midexigner?voicemail" className="mont-font">midexigner</a>
                    </li>
            </ul>
            </article>
        </div>
    )
}

export default SkillContact

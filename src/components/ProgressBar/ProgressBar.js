import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({title,completed }) => {
    return (
        <div className="progress__container">
       <h6 className="rale-font">{title}</h6>
      <div className="filler__progress" style={{width: `${completed}%`}}>
        <span className="robo-font">{`${completed}%`}</span>
      </div>
    </div>
    )
}

export default ProgressBar

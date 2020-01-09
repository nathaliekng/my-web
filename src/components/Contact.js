import React from 'react'
import linkedin from '../linkedin.png'
import git from '../github.png'
import email from '../mail.png'
import {Link, NavLink} from 'react-router-dom'

const Contact = (props) => {
  //  setTimeout(() => {
     //   props.history.push('/about')
   // }, 2000);
    return (
        <div className = "container">
            <h1 className="center">Contact</h1>
            <li><a href="https://www.linkedin.com/in/nathalie-ng-238139175/" target="_blank"><button type="button" class="btn, c" style={{width:300}}><img src={linkedin} alt="linkedin"/>Linkedin</button></a></li><br></br>
            <li><a href="https://github.com/nathaliekng" target="_blank"><button type="button" class="btn, c" style={{width:300}}><img src={git} alt="linkedin"/>gitHub</button></a></li><br></br>
            <li><button type="button" class="btn, c" style={{width:300}}><img src={email} alt="linkedin"/>nathalie.ng8@gmail.com</button></li>

        </div>
          
    )
}

export default Contact
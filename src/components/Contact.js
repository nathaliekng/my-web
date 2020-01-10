import React from 'react'
import linkedin from '../linkedin.png'
import git from '../github.png'
import email from '../mail.png'
import {Link, NavLink} from 'react-router-dom'


export default class YourComponent extends React.Component {
    constructor(props) {
        super(props)
     
        this.state = {
          copySuccess: false
        }
      }
     
      copyCodeToClipboard = (value) => {
        var tempInput = document.createElement("input");
        tempInput.value = value;
        document.body.appendChild(tempInput);
        tempInput.select()
        document.execCommand("copy")
        document.body.removeChild(tempInput);
        this.setState({copySuccess: true})
      }
   
    render() {
      return (
        <div className = "container">
        <h1 className="center">Contact</h1>
        <br></br><br></br>
        <h4>Clicking will redirect you to the coresponding site. Email will be copied to clipboard.</h4>
        <br></br><br></br>
        <li><a href="https://www.linkedin.com/in/nathalie-ng-238139175/" target="_blank"><button type="button" class="btn, c, myButton" style={{width:300}}><img src={linkedin} alt="linkedin"/>Linkedin</button></a></li><br></br>
        <li><a href="https://github.com/nathaliekng" target="_blank"><button type="button" class="btn, c, myButton" style={{width:300}}><img src={git} alt="linkedin"/>  gitHub</button></a></li><br></br>
        <li><button onClick={() => this.copyCodeToClipboard('nathalie.ng8@gmail.com')} type="button" class="btn, c, myButton" style={{width:300}}><img src={email} alt="linkedin"/>nathalie.ng8@gmail.com</button></li>
        <br></br>

        <div>
          {
            this.state.copySuccess ?
            <div style={{"color": "green"}}>
              Copied!
            </div> : null
          }
        </div>
        </div>
      )
    }
  }




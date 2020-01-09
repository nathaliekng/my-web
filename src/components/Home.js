import React from 'react'
import {NavLink} from 'react-router-dom'
import me from '../me.JPG'
import react from '../logo192.png'
import bootstrap from '../bootstrap.png'
import python from '../python.png'
import java from '../java.png'
import vue from '../vue.png'
import html from '../html.png'
import css from '../css.png'




const Home = () => {
    return (
        <div className = "container">
            <div>
                <h6>Hi! My name is Nathalie. I'm currently a second year Computer Science Co-op student at 
                Ryerson University looking for a Summer 2020 placement that will help me grow and learn as a programmer.
                </h6>
                <br></br>
                <img className="img-rounded" style={{width:"20%"}} src={me} alt="A photo of me"/>
                <br></br>
                <br></br>
                <a href="resume.pdf" target="_blank"><button type="button" className="btn, c">Resume</button></a>
            </div>
            <h4>Skills and Tools</h4>
            <div class="w3-panel w3-border w3-round-xlarge">
            <h6>These are some skills and tools I've used.</h6>
            <table align="center" className="w3-centered">
            <tr>
                <td ><img style={{width:"15%"}} src={css} alt="css"/></td>
                <td><img style={{width:"50%"}} src={html} alt="html"/></td>
                <td><img style={{width:"50%"}} src={bootstrap} alt="bootstrap"/></td>
            </tr>
            <tr>
                <td><img style={{width:"15%"}} src={java} alt="java"/></td>
                <td><img style={{width:"50%"}} src={python} alt="python"/></td>
                <td><img style={{width:"50%"}} src={react} alt="react"/></td>
            </tr>
            <tr>
            <td><img style={{width:"15%"}} src={vue} alt="vue"/></td>
            </tr>
            </table>
            </div>
            <h4>Courses I've taken at Ryerson University</h4><br></br>
            <table align="center" class="w3-panel w3-border w3-round-xlarge w3-centered">
                <tr>
                    <td>CPS530: Web Systems Development</td>
                    <td>MTH108: Linear Algebra</td>
                    <td>MTH110: Discrete Mathematics I</td>
                </tr>
                <tr>
                    <td>CPS393: Introduction to C and Unix</td>
                    <td>CPS305: Data Structures (python)</td>
                    <td>CPS109: Computer Science I (jython)</td>
                </tr>
                <tr>
                    <td>CPS209: Computer Science II (java)</td>
                    <td>CPS213 and CPS310: Computer Organization</td>
                    <td>MTH207: Calculus and Computational Methods</td>
                </tr>
            </table>
        </div>
    )
}

export default Home
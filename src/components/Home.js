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
import js from '../js.png' 
import c from '../C.png'
import resume from '../resume.pdf'
import { Tooltip } from '@material-ui/core';
import { Button } from 'reactstrap';


const Home = () => {
            
    return (
        <div className="container">
            <div>
                <h5>Hi! My name is Nathalie. I'm currently a second year Computer Science Co-op student at 
                Ryerson University looking for a Summer 2020 placement that will help me grow and learn as a programmer.
                </h5>
                <br></br>
                <img className="img-rounded" style={{width:"20%"}} src={me} alt="A photo of me"/>
                <br></br>
                <br></br>
                <a href={resume} target="_blank"><button type="button" className="btn, c, myButton">Resume</button></a>
            </div>

            <h4>Skills and Tools</h4>
            <h5>These are some languages and frameworks I have used.</h5>
            <div className="brdr">
            <table align="center" className="w3-centered, hello">
            <tr><th></th><th></th></tr>
            <tr>
                <td className="myButton2" ><img style={{width:"15%"}} src={css} alt="css"/></td>
                <td className="myButton2"><img style={{width:"15%"}} src={html} alt="html"/></td>
            </tr>

            <tr>
                <td className="myButton2"><img style={{width:"15%"}} src={java} alt="java"/></td>
                <td className="myButton2"><img style={{width:"15%"}} src={python} alt="python"/></td>
            </tr>
            
            <tr>
                <td className="myButton2"><img style={{width:"15%"}} src={vue} alt="vue"/></td>
                <td className="myButton2"><img style={{width:"15%"}} src={react} alt="react"/></td>
           
            </tr>

            <tr>
                <td className="myButton2"><img style={{width:"15%"}} src={js} alt="javascript"/></td>
                <td className="myButton2"><img style={{width:"15%"}} src={bootstrap} alt="bootstrap"/></td>
            </tr>
            <tr>
                <td className="myButton2"><img style={{width:"15%"}} src={c} alt="c"/></td>
                <td></td>
            </tr>
            </table>
            </div>
            
            <br></br>
            <h4>Relevant courses I've taken at Ryerson University </h4>
            <div class="brdr">
            <table align="center">
            <tr><th></th><th></th><th></th></tr>
                <tr>
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>This course presents the concepts and applications of the technologies to 
                    design and develop creative and successful web services. It covers design fundamentals and also programming 
                    languages for both server-side and client-side environments. Responsive design, search engine optimization and 
                    monetization strategies are also introduced.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS530: Web Systems Development</td></Tooltip>

                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>Systems of linear equations, matrices determinants, vectors, geometry, 
                    linear transformations, linear independence, basis, dimension, eigenvalues and eigenvectors, complex numbers, 
                    applications.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>MTH108: Linear Algebra</td></Tooltip>
                    
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>This course covers the fundamentals of discrete mathematics with a focus on 
                    proof methods. Topics include: propositional and predicate logic, notation for modern algebra, naive set theory, 
                    relations, functions and proof techniques.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>MTH110: Discrete Mathematics I</td></Tooltip>
                </tr>
                <tr>
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>The course introduces the UNIX operating system, and the C and C++ languages. 
                    UNIX topics include: I/O, redirection, processes, and shell scripts. C and C++ are introduced with an emphasis on 
                    differences from previously studied languages. C topics include pointers, structures, memory allocation, and paradigm 
                    differences. C++ topics include class formalisms, static and dynamic instantiation, inheritance, constructors and 
                    destructors, polymorphism with virtual functions, operator overloading, and time permitting, friends. Stream I/O may be 
                    introduced.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS393: Introduction to Unix, C and C++</td></Tooltip>
                    
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>Introduction to data structures and algorithms. Data structures covered will 
                    include stacks, queues, lists, trees, and graphs. Algorithm topics will include searching, sorting, hashing, algorithm 
                    design, greedy approaches, dynamic programming, recursion and complexity analysis.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS305: Data Structures (python)</td></Tooltip>
                    
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>Introduction to Jython. An introductory programming course designed to introduce 
                    fundamental Computer Science concepts such as abstraction, modelling and algorithm design. Emphasis is placed on 
                    producing correct software.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS109: Computer Science I (jython)</td></Tooltip>
                </tr>
                <tr>
                <Tooltip arrow="true" placement='top' 
                title={<div className="span" ><p></p><p>A continuation of CPS 109. Emphasis is placed on code structure, algorithm development, 
                    and Object Oriented design principles. Introduction to Java.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS209: Computer Science II (java)</td></Tooltip>
                    
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>This course introduces the students to the principles and fundamentals of digital 
                    system design. Topics covered include: Binary numbers, base conversions, signed numbers, Boolean algebra, logic gates, 
                    K-map method, combinational circuits, decoders/encoders, multiplexers, sequential circuits, flip-flops, state diagram, 
                    registers, counters and addressing techniques. Memory; CPU architecture and instruction set; the instruction processing 
                    sequence; generic assembler level programming illustrated for specific CPUs; I/O essentials including interrupts and DMA; 
                    characteristics of major peripherals interfaces; RISC and CISC architectures compared; parallel processing.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS213 and CPS310: Computer Organization</td></Tooltip>
                    
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>Calculus of functions of one variable and related numerical topics. 
                    Derivatives of algebraic, trigonometric and exponential functions. Differentiation techniques and applications of 
                    derivatives. Techniques of integration.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>MTH207: Calculus and Computational Methods</td></Tooltip>
                </tr>
            </table>
            </div>
            <br></br>
            <h4>Courses I'm currently taking</h4>
            <div class="brdr">
            <table align="center">
                <tr><th></th><th></th></tr>
                <tr>
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>Introduction to O/S (system calls, interrupts, synchronous and asynchronous traps, 
                    O/S structure), using processes (process communication and synchronization), primitive communications 
                    (signals and signal management calls), pipes, messages, semaphores, shared memory, memory management, file systems, 
                    and (time permitting) remote procedure calls.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS590: Operating Systems I</td></Tooltip>
                    
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>This course introduces the study of Object-Oriented software engineering. 
                    Topics include software project management, requirements gathering, requirements analysis, modeling, design, 
                    implementation and testing. UML diagrams and design patterns are also discussed. A major portion of the course is a 
                    team project, taking a system from the initial requirements to the final implementation.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS406: Introduction to Software Engineering</td></Tooltip>
                </tr>
                <tr>
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>Introduction to discrete structures and probability as they apply to design 
                    and analysis. Review of proof techniques: induction and recursion. Graphs and trees, and their applications in 
                    computing. Finite automata and computability. Counting: arithmetic and geometric progressions, permutations and 
                    combinations, modular arithmetic. Probability.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS420: Discrete Structures</td></Tooltip>
                    
                <Tooltip arrow="true" placement='top' 
                title={<div className="span"><p></p><p>A survey of major programming paradigms, with emphasis on the functional paradigm. 
                    Discussion of data typing, program decomposition, scoping rules, control structures parameter passing. Programming 
                    languages will likely include commercially important functional languages such as Haskell, Clojure and Erlang, with 
                    examples of others as time permits.</p></div>} 
                enterDelay={500} leaveDelay={200}><td>CPS506: Comparative Programming Languages</td></Tooltip>
                </tr>
            </table>
            </div>
            <a target="_blank" href="https://icons8.com/icons/set/vue-js">Vue Js</a>, <a target="_blank" href="https://icons8.com/icons/set/react">React</a> and other icons by <a target="_blank" href="https://icons8.com">Icons8</a>
            <a target="_blank" href="https://icons8.com/icons/set/menu">Menu icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
    )
}

export default Home
import React from 'react'

const About = () => {
    return (
        <div className="container">
            <h1 className="center">Projects</h1>
            <h4>Feel free to visit my <a style={{color:"green"}} href="https://github.com/nathaliekng" target="_blank">gitHub</a>!</h4><br></br>
            <div class="w3-panel w3-border w3-round-xlarge">
                <h4>Website made with Vue.js</h4>
                <p>This was a group project for my web development class. I was required to work on a website using Vue.js.</p>
                <p>Website can be accessed <a style={{color:"green"}} href="https://cps530project.netlify.com/" target="_blank">here</a></p>
                <iframe src="https://cps530project.netlify.com/"></iframe>
            </div>


        </div>
    )
}

export default About
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Navi extends Component{
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            scrollDetection: true,
            rect: null
        };
    }
    
    componentDidMount() {
        const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("click", this.handleClick);

        this.setState({
            rect: rect
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("click", this.handleClick)
    }

    handleScroll = () => {
        if (this.state.scrollDetection){
            const prevPos = this.state.prevScrollpos;

            const currPos = window.pageYOffset;
            const isVisible = prevPos > currPos;
    
            this.setState({
                prevScrollpos: currPos,
                visible: isVisible
            });
        }
    };

    handleClick = (e) => {
        if (!this.state.scrollDetection && e.clientY > this.state.rect.bottom - 1){
            this.setScrollDetection();
        }
    };

    setScrollDetection = () => {
        this.setState({
            scrollDetection: ! this.state.scrollDetection
        });
    }

    render(){
        return(
            <Navbar className="navibar" style={{backgroundColor: "#E8E8E8"}} expand="lg" id={ this.state.visible ? "navbar-show" : "navbar-hidden" } expanded={!this.state.scrollDetection} >
                <Navbar.Brand >
                    <Link to={process.env.PUBLIC_URL + "/"} id="navbar-brand" >
                        Nathalie Ng
                
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.setScrollDetection} />
                <Navbar.Collapse id="basic-navbar-nav naviopen">
                   <Nav className="mr-auto justify-content-end naviopen" style={{width: "98%"}} onSelect={this.setScrollDetection} >

                        <Link to={process.env.PUBLIC_URL + '/'} className="nav-link" id="navbar-common-item" style={{margin: "0 1.5%"}}>HOME</Link>
                        <Link to={process.env.PUBLIC_URL + "/about"} className="nav-link" id="navbar-common-item" style={{margin: "0 1.5%"}}>PROJECTS</Link>
                        <Link to={process.env.PUBLIC_URL + "/contact"} className="nav-link" id="navbar-common-item" style={{margin: "0 0 0 1.5%"}}>CONTACT</Link>
                    
                    </Nav>
                </Navbar.Collapse> 
            </Navbar>
        );
    }
}

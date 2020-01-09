import React, { Component } from 'react';

class Home extends Component{
    render(){
        //console.log(this.props);
        const {name}=this.props;
        return(
            <div className="home">
                <h1>{name} Ng</h1>
            </div>
        )
    }
}

export default Home
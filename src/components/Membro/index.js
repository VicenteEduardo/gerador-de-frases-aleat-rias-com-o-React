import React, { Component } from "react";

class Membro extends Component {

   
    render() {
        return (
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                
            </div>
        )
    }
}

export default Membro;
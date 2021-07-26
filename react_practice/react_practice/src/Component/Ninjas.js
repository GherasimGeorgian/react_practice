import React, { Component } from 'react';
import '../styles/NinjasStyle.css'
class Ninjas extends Component{
    render(){
        console.log(this.props)
        const {name,age,belt} = this.props;
        return(
            <div className="ninjas">
                <div>Name:{this.props.name}</div>
                <div>Age:{age}</div>
                <div>Belt:{belt}</div>
            </div>
        )
    }
}
export default Ninjas
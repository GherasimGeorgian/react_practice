import React, { Component } from 'react';
import NinjasListV2 from './NinjasListV2'
import NinjasList from './NinjasList'
import AddNinja from './AddNinja';
class Welcome extends React.Component {
    state={
        name:'Vasile',
        age:30,
        ninjas:[
            {name:'Ion',age:30,belt:"black",id:1},
            {name:'Vasile',age:12,belt:"black",id:2},
            {name:'Geo',age:13,belt:"black",id:3}
        ]
    }
    handleClick = (e) => {
        this.setState({
            name:'Yonel',
            age:14
        });
        console.log(this.state)
    }
    
    handleMouseOver = (e) =>{
        console.log(e.target,e.pageX)
    }
    handleCopy = (e) => {
        console.log('try being original for once!')
    }
    handleChange = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
    }
    addNinja = (ninja) => {
        // ninja.id =Math.random();
        // this.setState({
        //     ninjas:this.ninjas.push(ninja)
        // })
        //or
        let ninjas = [...this.state.ninjas,ninja] //creem o lista cu toti ninjas din state + ninja ce vreu sa-l adaugam
        ninja.id =Math.random();
        this.setState({
             ninjas:ninjas
         })
        
    }
    deleteNinja = (id) =>{
        console.log(id)
        let ninjas = this.state.ninjas.filter(ninja =>{
            return ninja.id != id
        })
        this.setState({
            ninjas: ninjas
        })
    }

    componentDidMount(){
        console.log('component mounted')
    }
    componentDidUpdate(prevProps,prevState){
        console.log('component updated')
        console.log(prevProps,prevState)
    }


    render() {
      return( 
    <div>
      <h1>Hello, {this.state.name} in varsta de {this.state.age}</h1>
      <button onClick={this.handleClick}>Click me</button>
      <button onMouseOver={this.handleMouseOver}>Hover me</button>
      <p onCopy={this.handleCopy}>let see you, are you strong?</p>
      <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
      </form>
      <NinjasListV2 deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja} />
    </div>
    )
    };
  }

export default Welcome
import React from 'react'

const Contact =  (props) =>{
    //dupa doua secunde de asteptare sunt redirectionat pe about page
    // setTimeout(() => {
    //     props.history.push('/about')
    // },2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you.</p>
        </div>
    )
}

export default Contact
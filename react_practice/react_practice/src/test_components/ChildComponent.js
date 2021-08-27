import React from 'react';

const ChildComponentApp = () => {
  return (
    <div> 
      <ChildComponent /> 
    </div> 
  )
}

const ChildComponent = () => {
  return (
    <div>
     <p> Child components</p>
    </div>
  )
}
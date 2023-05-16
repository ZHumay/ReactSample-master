
import React from 'react'
import ChildComponent from './ChildComponent';
function ParentComponent() {
    const message = "This is a message from the parent component";
  
    return (
      <div>
        <h2>Parent Component</h2>
        <ChildComponent messagee={message} />
      </div>
    );
  }

export default ParentComponent



import React, { Component } from 'react';
import ListGroup from './listGroup';
class ToDoList extends Component {
    state = {  } 
    render() { 
        return (<>
        <div className='main-container'>
            <div className="sub-container">
            <ListGroup/>
            </div>
        
        </div>
        
        </>);
    }
}
 
export default ToDoList;
import React, { Component } from 'react';
export class SaveButton extends Component {
    state = {  } 
    render() { 
        return (<>
        <button className='saveBtn' onClick={()=>{this.props.onSaveItem()}}>Save</button>
        </>);
    }
}

export class Edit extends Component {
    state = {  } 
    render() {
        return (<>
        <button className='editBtn' onClick={()=>{this.props.onEditing()}}>Edit</button>
        </>);
    }
}

export class Delete extends Component {
    state = {  } 
    render() { 
        return (<>
        <button className='deleteBtn' onClick={()=>{this.props.onDelete()}} >Delete</button>
        </>);
    }
}

export class Update extends Component {
    state = {  } 
    render() { 
        return (<>
        <button className='updateBtn' onClick={()=>{this.props.onUpdate()}}>Update</button>
        </>);
    }
}
 


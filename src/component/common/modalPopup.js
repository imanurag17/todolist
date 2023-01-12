import React, { Component } from 'react';
import { Update } from './button';
class ModalPopup extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        text: props.text,
        closeBtn: false
      } 
    }
    updateText = (event)=>{
        this.setState({text: event.target.value})
    }
    render() { 
        return (<>

    <div className="modal-container" id="modal-container">
        <div class="modal">
            <button className='close' onClick={this.props.closePopup}>&times;</button>
            <h2>want to update ?</h2>
            <textarea name="" id="popuptextArea" cols="50" rows="7" value={this.state.text} onChange={this.updateText} ></textarea><br />
            <Update onUpdate = {()=>{this.props.onUpdate(this.state.text)}}/>
        </div>
    </div>

        {/* <textarea name="" id="" cols="30" rows="5" value={this.state.text} onChange={this.updateText} ></textarea>
        <Update onUpdate = {()=>{this.props.onUpdate(this.state.text)}}/> */}

        </>);
    }
}
 
export default ModalPopup;
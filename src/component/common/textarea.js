import React, { Component } from 'react';
import { SaveButton } from './button';
import Header from './header';
class Textarea extends Component {
    constructor(props){
        super(props)
    }
    state = { 
        enterText: " ",
     } 
     text = (e)=>{
         this.setState({enterText: e.target.value})
     }
     addItem = ()=>{
         if(this.state.enterText != " "){
         let item = this.state.enterText;
         this.props.data.updateState(item) 
         this.setState({
             enterText: " "
         })
        }
     }
    render() { 
        console.log("textarea");
        return (<>
            <Header/>
            <div id='textAreaDiv'>
            <textarea name="" id="textArea" cols="50" rows="6" value={this.state.enterText} onChange={this.text}></textarea>
            <SaveButton
            onSaveItem = {this.addItem}
            />
            </div>
        </>);
    }
}
 
export default Textarea;
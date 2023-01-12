import React, { Component } from 'react';
import Textarea from './common/textarea';
import ModalPopup from './common/modalPopup';
import { Edit } from './common/button';
import { Delete } from './common/button';

class ListGroup extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        enteredText: [],
        //editMode: false,
        currentid: 0
    }

    updateState = (data) => {
        const text = this.state.enteredText
        const newField = {
            id: this.state.currentid,
            text: data,
            isEditMode: false,
        }
        text.push(newField)
        this.setState({
            ...this.state,
            enteredText: text,
            currentid: this.state.currentid + 1
        })

    }

    isEditMode = (id) => {
        const enteredText = this.state.enteredText
        enteredText.map((field) => {
            if (field.id == id) {
                field.isEditMode = true;
            }
            return field
        })
        this.setState({ ...this.state, enteredText: enteredText })
    }

    closeEditDialog = (id) => {
        const enteredText = this.state.enteredText
        enteredText.map((field) => {
            if (field.id == id) {
                field.isEditMode = false;
            }
            return field
        })
        this.setState({ ...this.state, enteredText: enteredText })
    }
    onUpdate = (id, data) => {
        const enteredText = this.state.enteredText
        enteredText.map((field) => {
            if (field.id == id) {
                field.isEditMode = false;
                field.text = data
            }
            return field
        })
        this.setState({ ...this.state, enteredText: enteredText })
    }
    onDelete = (id) => {
        const enteredText = this.state.enteredText.filter((a) => { return a.id != id })
        this.setState({ ...this.state, enteredText: enteredText })
    }
    render() {
        console.log("listGroup", this.state.enteredText);
        return (<>
            <Textarea data={
                { updateState: this.updateState.bind(this) }
            } />
            {
                this.state.enteredText.map((x) => {
                    return x.isEditMode ?
                        <>
                    <div className='listContent'>
                        <div className='listTextDiv'>
                            <li className='listText'>{x.text}</li>
                        </div>
                        <div>
                            <Edit onEditing={() => { this.isEditMode(x.id) }} />
                            <Delete onDelete={() => { this.onDelete(x.id) }} />
                        </div>
                    </div>
                        <div>
                            <ModalPopup
                                text={x.text}
                                closePopup={() => this.closeEditDialog(x.id)}
                                onUpdate={(data) => { this.onUpdate(x.id, data) }} />
                        </div>
                        </>
                        :
                        <>
                            <div className='listContent'>
                                <div className='listTextDiv'>
                                    <li className='listText'>{x.text}</li>
                                </div>
                                <div>
                                    <Edit onEditing={() => { this.isEditMode(x.id) }} />
                                    <Delete onDelete={() => { this.onDelete(x.id) }} />
                                </div>

                            </div>
                        </>

                })
            }
            {/* {
                this.state.enteredText.map((x) => {
                    return x.isEditMode ?

                        <div>
                            <ModalPopup
                                text={x.text}
                                closePopup={() => this.closeEditDialog(x.id)}
                                onUpdate={(data) => { this.onUpdate(x.id, data) }} />
                        </div>
                        :
                        <>
                            <div className='listContent'>
                                <div className='listTextDiv'>
                                    <li className='listText'>{x.text}</li>
                                </div>
                                <div>
                                    <Edit onEditing={() => { this.isEditMode(x.id) }} />
                                    <Delete onDelete={() => { this.onDelete(x.id) }} />
                                </div>

                            </div>
                        </>

                })
            } */}



        </>);
    }
}

export default ListGroup;
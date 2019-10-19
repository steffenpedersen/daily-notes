import React, { Component } from 'react'

// Use class based component, 
// because we want a local state
class CreateNote extends Component {
    state = {
        title: '',
        content: ''
    }
    // Function for onChange event handler
    handleChange = (e) => {
        this.setState({
            // Get the id of the input field with the value
            [e.target.id]: e.target.value
        })
    }
    // Function for onSubmit event handler
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Note</h5>

                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleChange} />
                        <label htmlFor="title">Note Title</label>
                    </div>

                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Note Content</label>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateNote

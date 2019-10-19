import React, { Component } from 'react'

// Use class based component, 
// because we want a local state
class SignIn extends Component {
    state = {
        email: '',
        password: ''
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
                    <h5 className="grey-text text-darken-3">Sign In</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn

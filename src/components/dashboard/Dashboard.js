import React, { Component } from 'react'
import NoteList from '../notes/NoteList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

// React Component classes have additional features  
class Dashboard extends Component {
    render() {
        // Use destructuring
        const { projects } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <NoteList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

// We're mapping the state to the props
// This is done, so we can access the
// notes inside this component
const mapStateToProps = (state) => {
    return {
        notes: state.note.notes
    }
}

// We're connecting the Dashboard component
// to the Redux store with function connect()
export default connect(mapStateToProps)(Dashboard)
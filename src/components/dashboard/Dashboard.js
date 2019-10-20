import React, { Component } from 'react'
import NoteList from '../notes/NoteList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

// React Component classes have additional features  
class Dashboard extends Component {
    render() {
        // Use destructuring
        const { notes } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <NoteList notes={notes} />
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
        notes: state.firestore.ordered.notes
    }
}

// We're connecting the Dashboard component
// to the Redux store with function connect()
export default compose(
    connect(mapStateToProps),
    // Sync up the Firestore collection
    firestoreConnect([
        { collection: 'notes' }
    ])
)(Dashboard)
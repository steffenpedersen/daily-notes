import React, { Component } from 'react'
import NoteList from '../notes/NoteList'
import Notifications from './Notifications'

// React Component classes have additional features  
class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <NoteList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
import React, { Component } from 'react'

//Рендер одной строки сотрудника

class Line extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { user } = this.props
        return (
            <div className="table-line" style={{ flex: 1, flexDirection: 'row' }}>
                <p className="line-name">{user.firstName} {user.lastName} {user.middleName}</p>
                <p className="line-surname">{user.organisationId}</p>
                <p className="line-surname">{user.email}</p>
                <div className="line-icons">
                    <img src="./images/pencil-icon.svg" onClick={this.editEmployee} alt="icon" className="edit-icon"></img>
                    <img src="./images/close.svg" onClick={this.deleteEmployee} alt="icon" className="delete-icon"></img>
                </div>
            </div>
        )
    }

    editEmployee = () => {
        console.log('edit_', 'clicked')
    }

    deleteEmployee = () => {
        console.log('delete_', 'clicked')
    }
}

export default Line
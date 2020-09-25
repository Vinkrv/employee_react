import React, { Component } from 'react'
import Line from './Line'
import ModalExampleControlled from './Modal'

//Рендер таблицы с сотрудниками

class EmplList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render() {
        const usArr = this.props.props.users;
        return (
            <div className="empl-list">
                <div className="empl-container">
                    <div className="empl-table">
                        <div className="table-header">
                            <div className="table-name">Пользователь</div>
                            <div className="table-name">Организация</div>
                            <div className="table-name">E-mail</div>
                            <p className="line-none"></p>
                        </div>
                        <div>
                            {usArr.map((user) => {
                                return (
                                    <Line user={user} key={user.id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div><ModalExampleControlled /></div>
            </div>
        )
    }

    addEmployee = () => {
        console.log('add-', 'clicked')
        this.setState({
            isOpen: true
        })
    }
}

export default EmplList
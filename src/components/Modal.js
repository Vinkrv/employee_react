import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

// Компонент формы добавления сотрудника

export default class ModalExampleControlled extends Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={<button className="button table-button" onClick={this.handleOpen} style={{ position: "absolute", marginLeft: "45%" }}>Добавить сотрудника</button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <div className="popup popup__create">
                    <div className="popup__content">
                        <p className="popup-title">Пользователь</p>
                        <p className="popup-ref" onClick={this.handleClose}>Назад к списку</p>
                        <form className="popup__form popup__form_create" name="new">
                            <input placeholder="Фамилия" className="popup__input"></input>
                            <input placeholder="Имя" className="popup__input"></input>
                            <input placeholder="Отчество" className="popup__input"></input>
                            <input placeholder="E-mail" className="popup__input"></input>
                            <select className="popup__input" placeholder="Организация">
                                <option value="1">Томский государственный университет</option>
                                <option value="2">ћосковский государственный университет имени ћ.¬.Ћомоносова</option>
                                <option value="3">Rubius Group</option>
                            </select>
                            <button className="button popup__button">Сохранить</button>
                        </form>
                    </div>
                </div>
            </Modal>
        )
    }
}
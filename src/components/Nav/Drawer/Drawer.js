import React from 'react'
import './Drawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

class Drawer extends React.Component {
    clickHandler = () => {
        this.props.onClose()
    }

    iconsShower() {

    }

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key = {index}> 
                    <NavLink 
                        to = {link.to} 
                        exact = {link.exact} 
                        activeClassName = {'active'}
                        onClick = {this.clickHandler}
                    >
                       

                        {link.icons}
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = ['Drawer']
        if(!this.props.isOpen) {
            cls.push('close')
        }

        const links = [
            {to: '/', label: 'Список тестов', exact: true, icons: <i className="fa fa-window-maximize myIco" aria-hidden="true"></i>}
        ]

        if(this.props.isAuth) {
            links.push({to: '/quiz-creator', label: 'Создать тест', exact: false, icons: <i className="fa fa-pencil-square-o myIco" aria-hidden="true"></i> })
            links.push({to: '/about', label: 'О проекте', exact: false, icons: <i className="fa fa-th myIco" aria-hidden="true"></i>})
            links.push({to: '/logout', label: 'Выйти', exact: false, icons: <i className="fa fa-window-close myIco" aria-hidden="true"></i>})
        } else {
            links.push({to: '/auth', label: 'Авторизация', exact: false, icons:  <i className="fa fa-user-circle myIco" aria-hidden="true"></i>})
            links.push({to: '/about', label: 'О проекте', exact: false, icons: <i className="fa fa-th myIco" aria-hidden="true"></i>})
        }

        return (
            <React.Fragment>
                <nav className = {cls.join(' ')}> 
                    <ul>
                        <h1>Разделы</h1>
                        <hr/>
                        
                        { this.renderLinks(links) }
                    </ul>

                </nav>
                { this.props.isOpen ? <Backdrop onClick = {this.props.onClose}/> : null }
            </React.Fragment>
        )
    }
}

export default Drawer
import React from 'react';
import './Layout.css'
import MenuToggle from '../../components/Nav/MenuToggle/MenuToggle'
import Drawer from '../../components/Nav/Drawer/Drawer'
import { connect } from 'react-redux'

class Layout extends React.Component {
    

    state = {
        menu: false
    }


    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCLoseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className ={'Layout'}>

                <Drawer
                    isOpen = {this.state.menu}
                    onClose = {this.menuCLoseHandler}
                    isAuth = {this.props.isAuth}
                />

                <MenuToggle
                    onToggle = {this.toggleMenuHandler}
                    isOpen = {this.state.menu}
                />
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: !!state.auth.token
    }

}

export default connect(mapStateToProps)(Layout)
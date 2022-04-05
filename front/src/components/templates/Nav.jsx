import './Nav.css'
import React from 'react'
import NavItem from './NavItem'



export default props =>{
    return(
<aside className="menu-area">
    <nav className='menu'>
        <NavItem reference="/" icon="home" page="Início"/>
        <NavItem reference="/users" icon="users" page="Usuários"/>
    </nav>
</aside>
    )

}
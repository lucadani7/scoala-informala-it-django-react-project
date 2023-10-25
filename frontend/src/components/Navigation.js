import React from 'react';
import {Navbar, NavLink} from 'react-bootstrap';
import logo from '../static/logo.png'
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from "cdbreact";


const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
                <Navbar.Brand className="app-logo" href="/">
                    <img
                        src={logo}
                        width="40"
                        height="50"
                        className="d-inline-block align-center"
                        alt="React Bootstrap logo"
                    />{' '}
                    Note App Clone
                </Navbar.Brand>
            </Navbar>
            <div className='sidebar'>
                <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars"/>}>
                        Navigation
                    </CDBSidebarHeader>
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/note" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="list">Notes List</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/manage" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Manage Notes</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </div>
    );
};

export default Navigation;
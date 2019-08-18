import React, { lazy } from 'react';

const NavbarHeader = lazy(() => import('../commonComponents/NavbarHeader.react'));
const DashboardFooter = lazy(() => import('../commonComponents/DashboardFooter.react'));

const Sidebar = lazy(() => import('../commonComponents/Sidebar.react'));

export default class DashboardLayout extends React.Component {
    render() {
        return (
            <section id="container">
                <NavbarHeader></NavbarHeader>
                <main role="main" style={{ marginTop: "60px" }}>
                    <div className="container-fluid wrapper pl-0 pr-0">
                        <Sidebar></Sidebar>
                        {this.props.children}
                    </div>
                </main>
                <DashboardFooter></DashboardFooter>
            </section >
        )
    }
}
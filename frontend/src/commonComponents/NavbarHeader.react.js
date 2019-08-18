import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { createBrowserHistory } from 'history';
const cookies = new Cookies();
const history = createBrowserHistory()
export class NavbarHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.logout = this.logout.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    logout = () => {
        cookies.remove('access_Token', { path: '/' });
        cookies.remove('refresh_Token', { path: '/' });
        cookies.remove('user_sid', { path: '/' });
        cookies.remove('account_usersid', { path: '/' });
        cookies.remove('email_address', { path: '/' });
        cookies.remove('accounts', { path: '/' });
        cookies.remove('default_account', { path: '/' });
        history.push(`/`);
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
                    <button type="button" id="sidebarCollapse" className="btn btn-link btn-nav">
                        <div className="humberg">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </button>
                    <div className="mr-auto logo" style={{ color: 'white' }} >Logo</div>
                    <button type="button" className="btn btn-link btn-header"><i className="fa fa-comment"></i></button>
                    <button type="button" className="btn btn-link btn-header"><i className="fa fa-cog"></i></button>
                    <button type="button" className="btn btn-link btn-header"><i className="fa fa-address-book"></i></button>

                    <div className="nav-item dropdown user-dropdown">
                        <a className="dropdown-toggle user-img text-white" href={'/'} id="dropdown01" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false"><img src="dist/images/user.png" alt="user" /> CMS</a>
                        <div className="dropdown-menu pull-left" aria-labelledby="dropdown01">
                            <a className="dropdown-item" href={'/'}>Action</a>
                            <Link to={`/`} className="dropdown-item" onClick={() => this.logout()}><i className="fa fa-sign-out" style={{ color: "red" }}></i></Link>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

function mapStateToProps(state) {
    //const { logindata, profile } = state;
    return {
    };
}

export default withRouter(connect(mapStateToProps)(NavbarHeader));
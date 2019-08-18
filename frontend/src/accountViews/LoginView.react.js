import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userLoginAction from '../actions/accountActions';

export class LoginView extends React.Component {
    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.state = {
            userName: "",
            password: ""
        };
        this.userLoginAction = bindActionCreators(userLoginAction, dispatch);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    handleInputChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit() {
        this.userLoginAction.userLogin({
            grant_type: "password",
            "emailaddress": "accountusertest@hypeteq.com",
            "password": "password1!"/* 
            emailaddress: this.state.userName,
            password: this.state.password */
        }).then((response) => {
            this.props.history.push('/asset-management');
        })
    }

    render() {
        return (
            <div className="login-sect">
                <div className="login-inner-box">
                    <form className="form-signin">
                        <h1 className="text-center">Logo</h1>
                        <h1 className="h4 mb-3 font-weight-normal text-center">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="userName" className="form-control" placeholder="Email address" onChange={this.handleInputChange} ></input>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Password" required onChange={this.handleInputChange}></input>
                        <div className="text-right">
                            <button type="button" className="btn btn-link">Forgot Password</button>
                        </div>
                        <div className="checkbox mb-3">
                            <label><input type="checkbox" value="remember-me" /> Remember me</label>
                        </div>
                        <button type="button" className="btn btn-primary btn-block btn-flat" onClick={this.handleSubmit}>Sign In</button>
                        <div className="mt-3">
                            <h3 className="h6 text-center">Dont's have an Account?</h3>
                            <button className="btn btn-lg btn-danger btn-block" type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { userLogin } = state;
    return {
        userLogin
    };
}

export default withRouter(connect(mapStateToProps)(LoginView))
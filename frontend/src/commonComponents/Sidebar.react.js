import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import $ from 'jquery';

export class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    componentDidMount() {
        $('#content').on('click', function () {
            if ($('#sidebar').hasClass('active')) {
                $('#sidebar').removeClass('active');
                $('#content').removeClass('active');
                $('.humberg').removeClass('active');
                $('#sidebar').find('.sub-menu').removeClass('show');
            }
        });

        $('#sidebarCollapse').on('click', function () {
            if ($('#sidebar').hasClass('active')) {
                $('#sidebar').removeClass('active');
                $('#content').removeClass('active');
                $('#sidebar').find('.sub-menu').removeClass('show');
                $('.humberg').removeClass('active');

            } else {
                $('#sidebar').addClass('active');
                $('#content').addClass('active');
                $('.humberg').addClass('active');

            }
        });

        $('.navClose-main').on('click', function () {
            $(this).parent().parent().removeClass('active');
            $('#content').removeClass('active');
            $('.humberg').removeClass('active');
            $('.sub-menu').removeClass('show');
        });

        $('.navClose').on('click', function () {
            var $thisParent = $(this).parent().parent().parent().parent('#sidebar');
            var $contenParent = $(this).parent().parent().parent().parent().parent().find('#content');
            if ($('#sidebar').hasClass('active')) {
                $thisParent.removeClass("active");
                $contenParent.removeClass('active');
                $('.sub-menu').removeClass('show');
                $('.humberg').removeClass('active');

            }
        });
    }

    onclickCMS() {
        if ($('#sidebar').hasClass('active')) {
        } else {
            $('#sidebar').addClass('active');
            $('#content').addClass('active');
            $('.humberg').addClass('active');
        }
    }

    componentWillMount() {
    }

    render() {
        return (
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li className="navClose-main">
                        <a title="CSM" href="#pageSubmenu" onClick={() => this.onclickCMS()} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <span className="navText">CSM</span>
                        </a>
                        <ul className="collapse list-unstyled sub-menu" id="pageSubmenu">

                            <li className="navClose">
                                <span>
                                    <Link to={`/`} title="/content-types">
                                        <span className="navText">Content Types</span>
                                    </Link>
                                </span>
                            </li>
                            <li className="navClose">
                                <span>
                                    <Link to={`/`} title="/entry">
                                        <span className="navText">Entry</span>
                                    </Link>
                                </span>
                            </li>
                            <li className="navClose">
                                <span>
                                    <Link to={`/`} title="/assest">
                                        <span className="navText">Assets</span>
                                    </Link>
                                </span>
                            </li>
                            <li className="navClose">
                                <span>
                                    <Link to={`/`} title="/setting">
                                        <span className="navText">Setting</span>
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    //const { logindata, profile } = state;
    return {
    };
}

export default withRouter(connect(mapStateToProps)(Sidebar));


/*

<li>
    <a title="admin-master" href="#pageSubmenu" onClick={() => this.onclickAdminNav()} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-adminMaster">
        <span className="navText">Admin Master</span>
    </a>

    <ul className="collapse list-unstyled sub-menu" id="pageSubmenu">

        <li className="navClose">
            <span>
                <Link to={`/user-registration`} title="/user-registration">
                    <span className="navText">User Registration</span>
                </Link>
            </span>
        </li>
        <li className="navClose">
            <span>
                <Link to={`/user-excel-upload`} title="/user-excel-upload">
                    <span className="navText">User Excel Upload</span>
                </Link>
            </span>
        </li>
        <li className="navClose">
            <span>
                <Link to={`/rate-master`} title="rate-master">
                    <span className="navText">Rate Master</span>
                </Link>
            </span>
        </li>

        <li className="navClose">
            <span>
                <Link to={`/smtp-mail`} title="smtp-mail">
                    <span className="navText">Smtp-Mail Master</span>
                </Link>
            </span>
        </li>
    </ul>
</li> */
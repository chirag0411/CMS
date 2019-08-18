import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as userProfileActions from '../../actions/userProfileActions';

export class UserProfile extends React.Component {

    constructor(props) {
        super(props)
        let { dispatch } = this.props;
        this.state = {

        }
        this.userProfileActions = bindActionCreators(userProfileActions, dispatch);

    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    componentDidMount() {
    }

    componentWillMount() {
    }
    render() {
        return (
            <div>
                <main role="main" className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 col-sm-12">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>

                        <div className="col-md-6 col-sm-12 text-right">
                            <div className="ml-auto">
                                <button type="button" className="btn btn-outline-dark"><i className="fa fa-th"></i></button>
                                <button type="button" className="btn btn-outline-dark mx-2"><i className="fa fa-th-list"></i></button>
                                <button type="button" className="btn btn-outline-dark"><i className="fa fa-cog"></i></button>
                                <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target="#addTask">Add Task</button>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm">
                        <table className="table table-striped list-table-show">
                            <thead>
                                <tr>
                                    <th scope="col">Preview</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Dimension</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Updated</th>
                                    <th scope="col">By</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cover Image</td>
                                    <td>14.0x2.02</td>
                                    <td>Image JPG</td>
                                    <td>06/18/2019</td>
                                    <td>Username1</td>
                                    <td>Draft</td>
                                    <td><button type="button" className="btn btn-outline-primary btn-action"><i
                                        className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-outline-primary btn-action"><i
                                            className="fa fa-pencil"></i></button>
                                        <button type="button" className="btn btn-outline-primary btn-action"><i
                                            className="fa fa-download"></i></button>
                                        <button type="button" className="btn btn-outline-primary btn-action"><i
                                            className="fa fa-trash-o"></i></button>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cover Image</td>
                                    <td>14.0x2.02</td>
                                    <td>Image JPG</td>
                                    <td>06/18/2019</td>
                                    <td>Username1</td>
                                    <td>Draft</td>
                                    <td><button type="button" className="btn btn-outline-primary btn-action"><i
                                        className="fa fa-eye"></i></button>
                                        <button type="button" className="btn btn-outline-primary btn-action"><i
                                            className="fa fa-pencil"></i></button>
                                        <button type="button" className="btn btn-outline-primary btn-action"><i
                                            className="fa fa-download"></i></button>
                                        <button type="button" className="btn btn-outline-primary btn-action"><i
                                            className="fa fa-trash-o"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>

                <div className="modal fade" tabIndex="-1" role="dialog" id="addTask">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Asset</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="btn-plus">+</div>
                            </div>
                            <div className="modal-footer justify-content-start">
                                <button type="button" className="btn btn-primary">Upload</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    const { userLogin } = state;
    return {
        userLogin
    };
}


export default withRouter(connect(mapStateToProps)(UserProfile));

import 'datatables.net';
import 'datatables.net-bs4';
import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Cookies from 'universal-cookie';
import * as assetManagementAction from '../../actions/assetManagementAction';
import LoadingSpinner from '../../commonComponents/LoadingSpinner.react';
import AddAssetModal from './AddAssetModal.react';
import { AssetTableView } from './AssetTableView.react';
import { AssetTailsView } from './AssetTailsView.react';

const cookies = new Cookies();

export class AssetManagement extends React.Component {
    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.state = {
            showAddAsset: false,
            assetDescription: '',
            assetName: '',
            assetFile: '',
            assetStatus: '',
            isTabular: true
        };
        this.assetManagementAction = bindActionCreators(assetManagementAction, dispatch);
        this.addAsset = this.addAsset.bind(this);
        this.deleteAsset = this.deleteAsset.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.getBase64 = this.getBase64.bind(this);
        this.changeView = this.changeView.bind(this);
        this.onClickAssetPrevNextPage = this.onClickAssetPrevNextPage.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.assetManagement.onUpdate) {
            this.setState({
                showAddAsset: false
            });
            this.onClickAssetPrevNextPage(1, 12);
        }

        if (this.props.assetManagement.onDelete) {
            this.onClickAssetPrevNextPage(1, 12);
        }
        this.props = nextProps;
    }

    componentDidMount() {
    }

    componentWillMount() {
        this.onClickAssetPrevNextPage(1, 12)
    }

    onOpenAddAssetModal = () => {
        this.setState({ showAddAsset: true });
    };

    onCloseAddAssetModal = () => {
        this.setState({ showAddAsset: false });
    };

    handleInputChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    addAsset = () => {
        if (cookies.get('default_account') && cookies.get('user_sid')) {
            let default_account = cookies.get('default_account');
            let user_sid = cookies.get('user_sid')
            this.assetManagementAction.addAsset({
                name: this.state.assetName,
                description: this.state.assetDescription,
                filename: this.state.assetFile,
                assetStatus: this.state.assetStatus
            }, user_sid, default_account.account_sid).then(() => {
                this.setState({
                    showAddAsset: false
                });
            });

        }
    }

    deleteAsset = (assetID) => {
        if (cookies.get('default_account') && cookies.get('user_sid')) {
            let default_account = cookies.get('default_account');
            let user_sid = cookies.get('user_sid')
            this.assetManagementAction.deleteAsset(assetID, user_sid, default_account.account_sid)
        }
    }

    handleFileChange(e) {
        var file = e.target.files[0];

        if (!file) return;

        if (file.size > 5242880) {
            return
        }
        this.getBase64(file, this);
    }

    getBase64(file, ref) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            ref.setState({
                assetFile: reader.result,
            });
        };
        reader.onerror = function (error) {
            return error;
        };
    }

    changeView() {
        this.setState({
            isTabular: !this.state.isTabular
        }, () => {
            if (this.state.isTabular) {
                this.initJqueryDataTable()
            }
        })
    }

    initJqueryDataTable() {
        $('#example').DataTable({
            "paging": false,
            "info": false,
            "searching": true,
            "ordering": true,
            "scrollY": '80vh',
            "scrollCollapse": true,
            "scrollX": true,
            "responsive": {
                breakpoints: [
                    { name: 'desktop', width: Infinity },
                    { name: 'tablet', width: 1024 },
                    { name: 'fablet', width: 768 },
                    { name: 'phone', width: 480 }
                ]
            },
            "retrieve": true,
            "language": {
                "zeroRecords": "Nothing found - sorry",
                "infoEmpty": "No records available",
                "search": "",
                "searchPlaceholder": "Search records"
            },

        });
    }

    onClickAssetPrevNextPage(pageNo, pageSize) {
        if (cookies.get('default_account')) {
            let default_account = cookies.get('default_account');
            this.assetManagementAction.getAllAsset(default_account.account_sid, pageNo, pageSize).then(() => {
                this.initJqueryDataTable()
            });
        }
    }

    render() {
        return (
            <div id="content" style={{ overflowX: 'hidden' }}>
                <div className="bg-white conten-pd">
                    <div className="title-box">
                        <div className="row">
                            <div className="col-md-6">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2 search-input" type="text" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-primary btnDatatable" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </form>
                            </div>
                            <div className="col-md-6 text-right text-xs-left">
                                <div className="ml-auto">
                                    {(this.state.isTabular) ?
                                        <button type="button" className="btn btn-outline-dark btnDatatable" onClick={this.changeView}><i className="fa fa-th"></i></button>
                                        :
                                        <button type="button" className="btn btn-outline-dark mx-2 btnDatatable" onClick={this.changeView}><i className="fa fa-th-list"></i></button>
                                    }
                                    <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target="#addTask" onClick={this.onOpenAddAssetModal}>Add Asset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    {this.props.assetManagement.onLoad ?
                        <LoadingSpinner />
                        :
                        <div>
                            {this.state.isTabular &&
                                <AssetTableView allAsset={this.props.assetManagement.allAsset} deleteAsset={(assetID) => this.deleteAsset(assetID)} />
                            }
                            {
                                !this.state.isTabular &&
                                <AssetTailsView allAsset={this.props.assetManagement.allAsset} deleteAsset={(assetID) => this.deleteAsset(assetID)} />
                            }
                            <div className="row">
                                <div className="col mt-5 clearfix">
                                    <button className="btn btn-outline-primary float-right ml-3"
                                        onClick={() => this.onClickAssetPrevNextPage(this.props.assetManagement.getAllAssetMeta && this.props.assetManagement.getAllAssetMeta.page + 1, this.props.assetManagement.getAllAssetMeta && this.props.assetManagement.getAllAssetMeta.page_size)}
                                        disabled={this.props.assetManagement.getAllAssetMeta && this.props.assetManagement.getAllAssetMeta.next_page_url == null ? true : false}>Next</button>
                                    <button className="btn btn-outline-primary float-left"
                                        onClick={() => this.onClickAssetPrevNextPage(this.props.assetManagement.getAllAssetMeta && this.props.assetManagement.getAllAssetMeta.page - 1, this.props.assetManagement.getAllAssetMeta && this.props.assetManagement.getAllAssetMeta.page_size)}
                                        disabled={this.props.assetManagement.getAllAssetMeta && this.props.assetManagement.getAllAssetMeta.previous_page_url == null ? true : false}>Prev</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <AddAssetModal
                    show={this.state.showAddAsset}
                    inputChange={this.handleInputChange}
                    fileChange={this.handleFileChange}
                    onSubmit={() => this.addAsset()}
                    assetStatus={this.state.assetStatus}
                    onHide={() => this.onCloseAddAssetModal()}
                    onLoad={this.props.assetManagement.onLoad} />
            </div >
        );
    }
}

function mapStateToProps(state) {
    const { assetManagement } = state;
    return {
        assetManagement
    };
}

export default withRouter(connect(mapStateToProps)(AssetManagement));
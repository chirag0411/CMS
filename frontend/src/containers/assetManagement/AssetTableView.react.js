import 'datatables.net';
import 'datatables.net-bs4';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class AssetTableView extends React.Component {

    showImagePrev(fileType, file) {
        if (fileType === '.jpg' || fileType === '.png') {
            return (<img src={file} className="img-fluid" alt="" style={{ width: '30px', height: '30px' }} />);
        } else if (fileType === '.doc' || fileType === '.docx') {
            return (<i className='fa fa-file-word-o' style={{ fontSize: "28px" }}></i>)
        } else if (fileType === '.xls' || fileType === '.xlsx') {
            return (<i className='fa fa-file-excel-o' style={{ fontSize: "28px" }}></i>)
        } else if (fileType === '.pdf') {
            return (<i className='fa fa-file-pdf-o' style={{ fontSize: "28px" }}></i>)
        } else if (fileType === '.ppt' || fileType === '.pptx') {
            return (<i className='fa fa-file-powerpoint-o' style={{ fontSize: "28px" }}></i>)
        } else if (fileType === '.zip' || fileType === '.tar') {
            return (<i className='fa fa-file-zip-o' style={{ fontSize: "28px" }}></i>)
        } else if (fileType === '.mp4') {
            return (<i className='fa fa-file-movie-o' style={{ fontSize: "28px" }}></i>)
        } else if (fileType === '.mp3') {
            return (<i className='fa fa-file-audio-o' style={{ fontSize: "28px" }}></i>)
        } else if (fileType === '.html' || fileType === '.css' || fileType === '.js' || fileType === '.josn' || fileType === '.java') {
            return (<i className='fa fa-file-code-o' style={{ fontSize: "28px" }}></i>)
        } else {
            return (<i className='fa fa-file-o' style={{ fontSize: "28px" }}></i>)
        }
    }

    deleteAsset = (assetId) => {
        this.props.deleteAsset(assetId)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table id="example" className="display group-grid table table-bordered compact hover" style={{ "width": '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ width: "10%" }}>Preview</th>
                                <th style={{ width: "22%" }}>Name</th>
                                <th style={{ width: "10%" }}>Dimension</th>
                                <th style={{ width: "7%" }}>Type</th>
                                <th style={{ width: "13%" }}>Updated</th>
                                <th style={{ width: "13%" }} >Create By</th>
                                <th style={{ width: "10%" }} >Status</th>
                                <th style={{ width: "15%" }} >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.allAsset.map((asset) =>
                                <tr key={asset.asset_sid}>
                                    <td style={{ width: "10%" }}><center>{this.showImagePrev(((asset.file_uri + '').substring((asset.file_uri + '').lastIndexOf("."))), asset.file_uri)}</center></td>
                                    <td style={{ width: "22%" }}>{asset.name}</td>
                                    <td style={{ width: "10%" }}>TBD</td>
                                    <td style={{ width: "7%" }}>{((asset.file_uri + '').substring((asset.file_uri + '').lastIndexOf(".") + 1)).length < 5 ? ((asset.file_uri + '').substring((asset.file_uri + '').lastIndexOf("."))) : 'TBD'}</td>
                                    <td style={{ width: "13%" }}>TBD TBD T</td>
                                    <td style={{ width: "13%" }}>TBD TBD TBD</td>
                                    <td style={{ width: "10%" }}>{asset.asset_status}</td>
                                    <td style={{ width: "15%" }}>
                                        <button type="button" className="btn btn-outline-primary btn-action btnDatatable">
                                            <i className="fa fa-eye"></i>
                                        </button>
                                        <button type="button" className="btn btn-outline-primary btn-action btnDatatable">
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <a href={asset.file_uri}>
                                            <button type="button" className="btn btn-outline-primary btn-action btnDatatable">
                                                <i className="fa fa-download"></i>
                                            </button>
                                        </a>
                                        <button type="button" className="btn btn-outline-primary btn-action btnDatatable" onClick={() => this.deleteAsset(asset.asset_sid)}>
                                            <i className="fa fa-trash-o"></i>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(AssetTableView));
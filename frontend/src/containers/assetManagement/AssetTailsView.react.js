import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class AssetTailsView extends React.Component {
    showImagePrev(fileType, file) {
        if (fileType === '.jpg' || fileType === '.png') {
            return (<img src={file} className="img-fluid img-size" alt="" />);
        } else if (fileType === '.doc' || fileType === '.docx') {
            return (<i className='fa fa-file-word-o icon-fluid' ></i>)
        } else if (fileType === '.xls' || fileType === '.xlsx') {
            return (<i className='fa fa-file-excel-o icon-fluid' ></i>)
        } else if (fileType === '.pdf') {
            return (<i className='fa fa-file-pdf-o icon-fluid' ></i>)
        } else if (fileType === '.ppt' || fileType === '.pptx') {
            return (<i className='fa fa-file-powerpoint-o icon-fluid' ></i>)
        } else if (fileType === '.zip' || fileType === '.tar') {
            return (<i className='fa fa-file-zip-o icon-fluid' ></i>)
        } else if (fileType === '.mp4') {
            return (<i className='fa fa-file-movie-o icon-fluid' ></i>)
        } else if (fileType === '.mp3') {
            return (<i className='fa fa-file-audio-o icon-fluid' ></i>)
        } else if (fileType === '.html' || fileType === '.css' || fileType === '.js' || fileType === '.josn' || fileType === '.java') {
            return (<i className='fa fa-file-code-o icon-fluid' ></i>)
        } else {
            return (<i className='fa fa-file-o icon-fluid' ></i>)
        }
    }
    deleteAsset = (assetId) => {
        this.props.deleteAsset(assetId)
    }

    render() {
        return (
            <div className="upload-box mt-3">
                <div className="row">
                    {this.props.allAsset.map((asset) =>
                        <div key={asset.asset_sid} className="col-md-3 img-box">
                            <div className="default-img">
                                {this.showImagePrev(((asset.file_uri + '').substring((asset.file_uri + '').lastIndexOf("."))), asset.file_uri)}
                            </div>
                            <div className="edit-sect">
                                <button type="button" className="btn btn-link"><i className="fa fa-eye"></i></button>
                                <button type="button" className="btn btn-link"><i className="fa fa-pencil"></i></button>
                                <a href={asset.file_uri}>
                                    <button type="button" className="btn btn-link"><i className="fa fa-download"></i></button>
                                </a>
                                <button type="button" className="btn btn-link" onClick={() => this.deleteAsset(asset.asset_sid)}> <i className="fa fa-trash-o"></i></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(connect(AssetTailsView));
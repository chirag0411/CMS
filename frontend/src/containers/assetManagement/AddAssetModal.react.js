import React from 'react';
import { Modal } from 'react-bootstrap';
import LoadingSpinner from '../../commonComponents/LoadingSpinner.react';

export default class AddAssetModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }

    onCloseAddAssetModal = () => {
        this.props.onHide()
    }

    addAsset = () => {
        this.props.onSubmit()
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={() => this.onCloseAddAssetModal()} className="modal fade modal-dialog">
                {this.props.onLoad ?
                    <LoadingSpinner />
                    : null}
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title className="modal-title">ADD ASSET</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="form-group">
                        <label htmlFor="assetName">Asset Name</label>
                        <input type="text" className="form-control" id="assetName" placeholder="Enter Asset Name" onChange={this.props.inputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="assetDescription">Asset Description</label>
                        <input type="text" className="form-control" id="assetDescription" placeholder="Enter Description" onChange={this.props.inputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="assetStatus">Asset Status</label>
                        <select id="assetStatus" className="form-control" value={this.props.assetStatus} onChange={this.props.inputChange}>
                            <option value=""> Select Asset Status </option>
                            <option value="Archived">Archived</option>
                            <option value="Published">Published</option>
                            <option value="Approved">Approved</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="assetUpload">Asset Upload</label>
                    </div>
                    <div className="upload-btn-wrapper">
                        <div className="btn-plus">+</div>
                        <input type="file" name="myfile" id="assetFile" onChange={this.props.fileChange} />
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer justify-content-start">
                    <button type="button" className="btn btn-secondary" variant="secondary" onClick={() => this.onCloseAddAssetModal()}>
                        Close
                     </button>
                    <button type="button" className="btn btn-primary" variant="primary" onClick={() => this.addAsset()}>
                        Upload
                      </button>
                </Modal.Footer>
            </Modal>
        );
    }
}
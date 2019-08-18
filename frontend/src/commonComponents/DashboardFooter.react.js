import React from 'react';
import { connect } from 'react-redux';

export class DashboardFooter extends React.Component {

    constructor(props) {
        super(props);
        //let { dispatch } = this.props;
        this.state = {
        };
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    //const { logindata, profile } = state;
    return {
    };
}

export default connect(mapStateToProps)(DashboardFooter);

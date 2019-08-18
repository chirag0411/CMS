import React from 'react';
import { TraceSpinner } from "react-spinners-kit";

export default class LoadingSpinner extends React.Component {
    render() {
        return (
            <div className="loading">
                <TraceSpinner size={75} FrontColor="#00ff89" BackColor="#4b4c56"></TraceSpinner>
            </div>
        );
    }
}

import React from 'react'
import { Link } from 'react-router-dom';

const RollPermissionError = () => {
    return (
        <div className="error">
            <div className="access-error-code">Access Denied </div>
            <div className="error-content">
                <div className="error-message">We couldn't find it...</div>
                <div className="error-desc mb-4">
                    You don't have permission to access this page. <br/>
                    If you believe this is an error, please contact support.
                </div>
                <div>
                    <Link to="/" className="btn btn-success px-3">Go Home</Link>
                </div>
            </div>
        </div>
    );
}

export default RollPermissionError;
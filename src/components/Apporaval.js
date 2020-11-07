import React from 'react';
import faker from 'faker'

function Apporaval(props) {
    return (
        <div>
            <div className="ui cards">
                <div className="ui card">
                    <div className="content">
                        <div className="description">{props.children}</div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <button className="ui green basic button">Approve</button>
                            <button className="ui red basic button">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apporaval;
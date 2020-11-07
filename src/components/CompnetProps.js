import React from 'react';
import Facker from 'faker';
import 'semantic-ui-css/semantic.min.css'

function CompnetProps(props) {
    return (
        <div>
            <br/>
            <div className="ui cards">
                <div className="ui card">
                    <div className="content">
                        <div className="header">{props.Headcontent}</div>
                        <div className="description">{props.content}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompnetProps;
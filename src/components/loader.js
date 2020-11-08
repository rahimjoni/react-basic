import React from 'react';

function Loader(props) {
    return (
        <div>
            <div>
                <div className="ui active dimmer">
                    <div className="content">
                        <div className="ui big text loader">Loading...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
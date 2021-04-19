import * as React from "react"

import './video-banner.css'

export default class VideoBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="video-banner">
                <video loop muted autoPlay playsInline>
                    <source src={this.props.src} type={this.props.type} />
                    Your browser does not support this tag.
                </video>
            </div>
        )
    }
}
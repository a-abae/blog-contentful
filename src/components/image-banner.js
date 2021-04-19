import * as React from "react"

import './image-banner.css'

export default class ImageBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="image-banner" style={{
                backgroundImage: `url(${this.props.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <h1>
                    {this.props.title}
                </h1>
            </div>
        )
    }
}
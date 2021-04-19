import * as React from "react"

import './call-now.css'

export default class CallNowButton extends React.Component {
    render() {
        return (
            <div className="call-now">
                <a href="tel:">
                    Call Now
                </a>
            </div>
        )
    }
}
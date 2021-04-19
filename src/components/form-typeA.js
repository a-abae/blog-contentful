import * as React from "react"

import * as rbs from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import './form-typeA.css'

export default class FormTypeA extends React.Component {
    render() {
        return (
            <rbs.Form className="form-typeA">
                <rbs.Row md={5} sm={1} xs={1}>
                <rbs.Col>
                    <rbs.FormControl type="name" placeholder="Name" />
                </rbs.Col>
                <rbs.Col>
                    <rbs.FormControl type="email" placeholder="Email" />
                </rbs.Col>
                <rbs.Col>
                    <rbs.FormControl type="tel" placeholder="Phone" />
                </rbs.Col>
                <rbs.Col>
                    <rbs.FormControl type="textarea" placeholder="Message" />
                </rbs.Col>
                <rbs.Col>
                    <rbs.Button className="form-submit" variant="primary" type="submit">
                    Submit
                    </rbs.Button>
                </rbs.Col>
                </rbs.Row>
            </rbs.Form>
        )
    }
}
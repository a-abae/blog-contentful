import * as React from "react"
import { Link } from "gatsby"

import './footer.css'

const menuItems = [
    {title: 'Home', slug: '/'},
    {title: 'About Us', slug: '/about'},
    {title: 'Blog', slug: '/blog'},
];

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className="footer-area1">
                    { menuItems.map((menuItem) => {
                        if (menuItem.slug == '/blog') {
                            return (
                                <Link to={menuItem.slug} activeClassName="current" partiallyActive={true}>
                                    {menuItem.title}
                                </Link>
                            )
                        }
                        else {
                            return (
                                <Link to={menuItem.slug} activeClassName="current">
                                    {menuItem.title}
                                </Link>
                            )
                        }
                    })}
                </div>
            </footer>
        )
    }
}
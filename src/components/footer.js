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
                    { menuItems.map((menuItem) => 
                        <Link id={menuItem.slug.includes("blog") ? 'current' : ''} className="footer-link" to={menuItem.slug}>
                            {menuItem.title}
                        </Link>
                    )}
                </div>
            </footer>
        )
    }
}
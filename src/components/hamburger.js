import * as React from "react"
import { Link } from "gatsby"

import './hamburger.css'

const menuItems = [
    {title: 'Home', slug: '/'},
    {title: 'About Us', slug: '/about'},
    {title: 'Blog', slug: '/blog'},
];

export default class Hamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          width: 0,
        };
    }
    handleToggle = () => {
        let prev = this.state.open;
        this.setState({
            open: !prev,
        });
    }
    handleResize = () => {
        this.setState({
            width: window.innerWidth,
        })
    }
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize' , this.handleResize);
    }
    render() {
        return (
            <div className="hamburger">
                {(this.state.width < 768) &&
                    <div className={this.state.open ? "open-close change" : "open-close"} onClick={this.handleToggle}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                }
                {(this.state.open || (this.state.width >= 768)) && 
                    <div className="hamburger-menu">
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
                }
            </div>
        )
    }
}

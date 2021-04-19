import * as React from "react"
import { Link } from "gatsby"

import './header.css'
import logo from '../images/logo-icon.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      class: '',
      open: false,
    };
  }
  handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5) {
      this.setState({
        scrolled: true,
        class: 'scrolled',
      });
    }
    else {
      this.setState({
        scrolled: false,
        class: '',
      });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <header className={this.state.class}>
        <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="The Edge Treatment Center" />
            </Link>
        </div>
    </header>
    )
  }
}

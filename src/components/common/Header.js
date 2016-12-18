import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/products" activeClassName="active">Products</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
					</ul>
				</div>
			</nav>
  );
};

export default Header;

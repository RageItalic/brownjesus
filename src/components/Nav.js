import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/brownJesusLogo.svg'
import ResumePDF from '../assets/ParthPatelResumeOfficial2022.pdf'
import '../App.css'

class Nav extends Component {
	render() {
		return (
			<header>
				<nav className="nav">
					<Link to="/">
						<Logo className="logo"/>
					</Link>
					<ul>
						<li><a href={ResumePDF} target="_blank" className="link">Resume.</a></li>
						<li><Link to="/work" className="link">Work.</Link></li>
						<li><Link to="/about" className="link">About.</Link></li>
						<li><Link to="/blog" className="link">Blog.</Link></li>
					</ul>
				{/*
					<div className="desktopNavLinks">
						<Link to="/resume" className="link">Resume.</Link>
						<Link to="/work" className="link">Work.</Link>
						<Link to="/blog" className="link">Blog.</Link>
					</div>
				*/}
					<div className="mobileNavLinks">
						<label for="toggleResponsiveNav">&#9776;</label>
						<input type="checkbox" id="toggleResponsiveNav"/>
						<ul>
							<li><a href={ResumePDF} target="_blank" className="link">Resume.</a></li>
							<li><Link to="/work" className="link">Work.</Link></li>
							<li><Link to="/about" className="link">About.</Link></li>
							<li><Link to="/blog" className="link">Blog.</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}

export default Nav
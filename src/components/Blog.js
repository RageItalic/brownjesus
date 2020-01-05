import React, {Component} from 'react'

class Blog extends Component {
	render() {
		return (
			<div className="blogContainer">
				<div className="centerHeader">
					<h1>Blog Coming Soon.</h1>
				</div>
				<br />
				<div className="textContainer">
					<p>
						There are a lot of things I dont know how to do. 
						Sometimes they are tiny little detail oriented things (like the logo you see in the Navbar). 
						Other times, they are much bigger and more important things 
						(like using JWTs for authentication when your frontend and backend are seperate projects).
					</p>
					<br />
					<p>
						My goal for this blog is to write about 
						and explain the things I didn’t know how to do myself. 
						It’ll be mission accomplished if even one person doesn’t 
						have to go through the same struggles I did.
					</p>
				</div>
				<br />
				<br />
				<br />
			</div>
		)
	}
}

export default Blog
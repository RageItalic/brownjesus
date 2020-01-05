import React, {Component} from 'react'
import face from '../assets/face_img.svg'
import '../App.css'

class Home extends Component {
	render() {
		return (
			<div className="landing">
				<div className="landingWrapper">
					<div className="landingLeft">
						<h1>Hi,</h1>
						<br />
						<h2>
							I am a <span>Full Stack Web <br />
							Developer</span>, <span>Pizza <br/>
							Enthusiast</span> and <span>Life Long <br />
							Beginner</span>.
						</h2>
						<br />
						<h2>
							Welcome to my little <br />
							corner of the Interwebs.
						</h2>
					</div>
					<div className="landingRight">
						<img src={face} alt="Parth Patel Img"/>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
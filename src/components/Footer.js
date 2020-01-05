import React, {Component} from 'react'
import Modal from 'react-awesome-modal'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import '../App.css'

class Footer extends Component {
	state = {
  	visible: false
  }

  openModal() {
    this.setState({
      visible: true
    })
  }

  closeModal() {
    this.setState({
      visible: false
    })
  }

	render() {
		return (
			<div className="footer">
				<div className="externalLinks">
					<a 
						href="https://www.github.com/rageitalic"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={github} alt="github logo"/>
					</a>
					<a 
						href="https://www.linkedin.com/in/parth-patel-83997913b/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={linkedin} alt="linkedin logo"/>
					</a>
				</div>
				{this.state.visible 
					? <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
	            <div className="centerText" style={{margin: '10px', marginTop: '50px'}}>
	                <p>
	                	My hair is much longer and more wavy than in the picture. 
	                	One day, I had it open in front of my friends and thus, the name
	                	Brown Jesus was coined. Because I look like Jesus, if he was brown.
	                </p>
	                <br />
	                <p>
	                	Also, while I can barely buy my own food, <code>parthpatel.com</code> costs over $6000.
	                </p>
	            </div>
	          </Modal>
	        : <div className="middle">
							<p style={{cursor: "pointer"}} onClick={() => this.openModal()}>Why Brown Jesus?</p>
						</div>
      	}
				<div className="contact">
					<a href="mailto:parthpatelgee@gmail.com?Subject=Hello, Brown Jesus">
						<h5>Contact Me.</h5>
					</a>
				</div>
			</div>
		)
	}
}

export default Footer
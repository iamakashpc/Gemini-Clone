
import { assets } from "../../assets/assets"
import "./main.css"
const Main = () => {
  return (
		<div className="main">
			<div className="nav">
				<p>Gemini</p>
				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				<div className="greet">
					<p>
						<span>Hello , Dev </span>
					</p>
					<p>How Can i Help You Today?</p>
				</div>
				<div className="cards">
					<div className="card">
						<p>Suggest Some Place To Visit In Kerala </p>
						<img src={assets.compass_icon} alt="" />
					</div>
					<div className="card">
						<p>Brainstorm team bonding activities for our work retreat </p>
						<img src={assets.message_icon} alt="" />
					</div>
					<div className="card">
						<p>Settle a debate: how should you store bread?</p>
						<img src={assets.bulb_icon} alt="" />
					</div>
					<div className="card">
						<p>Settle a debate: how should you store bread? </p>
						<img src={assets.code_icon} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main
import React from "react";
import { Link } from "react-router-dom";
import '../css/home.css';



export const Home = () => {
	return (

		<div>
			<div className="home">
				<div id="bg"></div>
				<div id="main">
					{/* <!-- Header --> */}
					<header id="header">
						<h2 className="titre">SYSTEME INFORMATIQUE DE <br /> GESTION DES INFORMATIONS FORESTIERES</h2>
						{/* <p>Security Chief &nbsp;&bull;&nbsp; Cyborg &nbsp;&bull;&nbsp; Never asked for this</p> */}
						<nav>
							<ul>
								<div className="sigif">
									<a href="http://sigif2.cm/sigif/" target="_blank" rel="noreferrer">
										<img src="./dossiericon/ressources/images/LogoSIGIF_540x540.png" className="App-logo" alt="logo" />
									</a>
								</div>
								<li><Link to="#" className="icon brands fa fa-twitter" aria-hidden="true"><span className="label">Twitter</span></Link></li>
								<li><Link to="#" className="icon brands fa fa-facebook-f"><span className="label">Facebook</span></Link></li>
								<li><Link to="#" className="icon solid fa fa-envelope"><span className="label">Email</span></Link></li>
							</ul>
						</nav>
					</header>

				</div>
			</div>
		</div>
	);
}
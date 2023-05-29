/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import './App.css';

function App() {
	//sumber: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
	function getAge(dateString: string) {
		let today = new Date();
		let birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}	

	return (
		<>
			<title>Portofolio</title>
			<div className="container">
				<header>
					<h1>Rafi Athallah</h1>
					<nav>
						<ul>
							<li><a href="#about">About</a></li>
							<li><a href="#projects">Projects</a></li>
							<li><a href="#sertifikat">Certificates</a></li>
							{/* <li><a href="#post">Posts</a></li> */}
						</ul>
					</nav>
				</header>
				<main>
					<img id="about" src="fotosaya.jpg" alt="Rafi Athallah" />
					<h2>About Me</h2>
					<p>Hi there! My name is Rafi Athallah I'm {getAge("2006-05-26")} years old and I'm a software engineer based in Pontianak, Indonesia. I have experience working with HTML, CSS, JavaScript, Typescript, Python, C#, and various web frameworks such as React and NextJS. I'm passionate about creating user-friendly that provide a great user experience. When I'm not coding, I enjoy playing game, you can see my CV <a href='/project/cv.pdf'>here!</a></p>
					<br />
					<div>
						<a className='SocialMedia' style={{ color: "#171515" }} href="https://github.com/rafiathallah3" target="_blank" rel="noreferrer"><FaGithub /></a>
						<a className='SocialMedia' style={{ color: "purple" }} href="https://www.instagram.com/dhyrbfy/" target="_blank" rel="noreferrer"><FaInstagram /></a>
						<a className='SocialMedia' style={{ color: "red" }} href="https://www.youtube.com/channel/UCjvN4chMZcwe0mMPKVDoWoA/" target="_blank" rel="noreferrer"><FaYoutube /></a>
					</div>

					<hr />
					<h2>Projects</h2>
					<div className="project-container">
						<div className="project">
							<div className="project-content">
								<div className="project-image">
									<img src="project/lemparbola.png" alt="Gambar Project" />
								</div>
								<div className="project-details">
									<h3>Lempar Bola</h3>
									<p>Lempar Bola is a recreation game called <i>Balls?</i> created by Dani. This game was made in Unity Engine and created at May 11th 2021</p>
									<a href="/project/Bolav3.apk">Download game link (.APK)</a>
								</div>
							</div>
						</div>

						<div className="project">
							<div className="project-content">
								<div className="project-image">
									<img src="project/autoclicker.png" alt="Gambar Project" />
								</div>
								<div className="project-details">
									<h3>Auto Clicker</h3>
									<p>Auto clicker is to automate the clicking using python, this project was made in python and created at Janury 5th 2022</p>
									<a href="https://github.com/rafiathallah3/Membuat-Auto-clicker">Github</a>
								</div>
							</div>
						</div>
						
						<div className="project">
							<div className="project-content">
								<div className="project-image">
									<img src="project/macro.png" alt="Gambar Project" />
								</div>
								<div className="project-details">
									<h3>Macro Recorder</h3>
									<p>Macro recorder is to records macros for playback at a later time, this project was made in python and created at February 3th 2022</p>
									<a href="https://github.com/rafiathallah3/Membuat-Macro-Recorder">Github</a>
								</div>
							</div>
						</div>

						<div className="project">
							<div className="project-content">
								<div className="project-image">
									<img src="project/raport.png" alt="Gambar Project" />
								</div>
								<div className="project-details">
									<h3>Grade Report</h3>
									<p>All my grade from 10th grade to 12th grade, this website was made in React and created at August 2nd 2022</p>
									<a href="https://nilai-raport.netlify.app/">Website</a>
								</div>
							</div>
						</div>

						<div className="project">
							<div className="project-content">
								<div className="project-image">
									<img src="project/brochess.png" alt="Gambar Project" />
								</div>
								<div className="project-details">
									<h3>BroChess</h3>
									<p>Brochess is a chess game but in roblox, this project was made in Roblox Studio and Typescript as the language and created at December 2nd 2022</p>
									<a href="https://www.roblox.com/games/11738872153/BroChess">Game</a>
								</div>
							</div>
						</div>

						<div className="project">
							<div className="project-content">
								<div className="project-image">
									<img src="project/otomatismakan.png" alt="Gambar Project" />
								</div>
								<div className="project-details">
									<h3>Pet food automation</h3>
									<p>Pet food automation is an arduino project that will drop a pet food into a bowl in a certain time. This was created at February 3rd 2023</p>
									<a href="https://www.youtube.com/watch?v=zFCCdXAJvU0">Video</a>
								</div>
							</div>
						</div>
						
						<div className="project">
							<div className="project-content">
								<div className="project-image">
									<img src="project/calculator.jpg" alt="Gambar Project" />
								</div>
								<div className="project-details">
									<h3>Calculator</h3>
									<p>Calculator is fun arduino project that work like a normal calculator but bigger. This was created at February 5th 2023</p>
									<a href="#">Unavailable for now</a>
								</div>
							</div>
						</div>

						<div className="project">
							<div className="project-content">
								<div className="project-image">
									<img src="project/soalkoding.png" alt="Gambar Project" />
								</div>
								<div className="project-details">
									<h3>Soalkoding</h3>
									<p>Soalkoding is a website to practice your programming skill by solving coding question, this project was made in NextJS, MongoDB and created at August 17th 2022 and finished at 22nd April 2023</p>
									<a href="https://github.com/rafiathallah3/soalkoding">Github</a>
								</div>
							</div>
						</div>
					</div>
					{/* <h2 id="project">Projects</h2>
					<ul className="projects">
						<li>
							<a href="#">
							<img src="project1.jpg" alt="Project 1" />
							<h3>Project 1</h3>
							</a>
						</li>
						<li>
							<a href="#">
							<img src="project2.jpg" alt="Project 2" />
							<h3>Project 2</h3>
							</a>
						</li>
						<li>
							<a href="#">
							<img src="project3.jpg" alt="Project 3" />
							<h3>Project 3</h3>
							</a>
						</li>
					</ul> */}
					<hr/>
					<h2 id="sertifikat">Certificates</h2>
					<section id="certificates">
						<div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
							<div className="certificate">
								<div className="certificate-image">
									<img src="sertifikat/csharp.png" className='certificate-image' alt="Gambar Sertifikat"/>
								</div>
							</div>
							<div className="certificate">
								<div className="certificate-image">
									<img src="sertifikat/javascript.png" className='certificate-image' alt="Gambar Sertifikat"/>
								</div>
							</div>
							<div className="certificate">
								<div className="certificate-image">
									<img src="sertifikat/restapi.png" className='certificate-image' alt="Gambar Sertifikat"/>
								</div>
							</div>
							<div className="certificate">
								<div className="certificate-image">
									<img src="sertifikat/problemsolving.png" className='certificate-image' alt="Gambar Sertifikat"/>
								</div>
							</div>
							<div className="certificate">
								<div className="certificate-image">
									<img src="sertifikat/python.png" className='certificate-image' alt="Gambar Sertifikat"/>
								</div>
							</div>
							<div className="certificate">
								<div className="certificate-image">
									<img src="sertifikat/JS_Intermediate.png" className='certificate-image' alt="Gambar Sertifikat"/>
								</div>
							</div>
							<div className="certificate">
								<div className="certificate-image">
									<img src="sertifikat/JSAlgoritmaFCC.png" className='certificate-image' alt="Gambar Sertifikat"/>
								</div>
							</div>
							<div className="certificate">
								<div className="certificate-image">
									<img src="sertifikat/SL_PythonIntermediate.png" className='certificate-image' alt="Gambar Sertifikat"/>
								</div>
							</div>
						</div>
					</section>
					{/* <hr />
					<h2 id="post">Posts</h2>
					<div className='blog-container'>
						<section className="blog-post">
							<h2>My Blog Post Title</h2>
							<p>Posted on March 18, 2023 by Rafi Athallah</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam sed metus tincidunt commodo at a felis. Duis lobortis vestibulum velit, eget commodo ante ultrices vel. Donec scelerisque, dolor non consectetur auctor, nibh nibh mollis sem, sit amet convallis est libero ac velit.</p>
							<p>Integer vel nunc orci. Nam quis ipsum ac magna eleifend rhoncus vel vitae est. Fusce laoreet eros vitae elit vulputate, in convallis neque lobortis. In sit amet sapien quam.</p>
						</section>
					</div> */}
				</main>
				<footer>
					<p style={{ color: "white" }}>&copy; 2023 Rafi Athallah</p>
				</footer>
			</div>
		</>
	);
}

export default App;

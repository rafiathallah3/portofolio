import React from 'react';
import './App.css';

function App() {
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
					<p>Hi there! My name is Rafi Athallah I'm 16 years old and I'm a software engineer based in Pontianak, Indonesia. I have experience working with HTML, CSS, JavaScript, Typescript, Python, C#, and various web frameworks such as React and NextJS. I'm passionate about creating user-friendly that provide a great user experience. When I'm not coding, I enjoy playing game and go outside with my friends.</p>
					<hr />
					<h2>Projects</h2>
					<div className="project-container">
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

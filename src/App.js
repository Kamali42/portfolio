import './App.css';
import Nav from './nav';
import About from './about';
import Home from './home';
import Service from './services';
import Skill from './skills';
import Edu from './education';
import Project from './project';
import Contact from './contact';
function App() {
//   const ball = document.querySelector('.ball');

// let mouseX = 0;
// let mouseY = 0;

// let ballX = 0;
// let ballY = 0;

// let speed = 0.1;

// // Update ball position
// function animate() {
// 	//Determine distance between ball and mouse
// 	let distX = mouseX - ballX;
// 	let distY = mouseY - ballY;
	
// 	// Find position of ball and some distance * speed
// 	ballX = ballX + (distX * speed);
// 	ballY = ballY + (distY * speed);
	
// 	ball.style.left = ballX + "px";
// 	ball.style.top = ballY + "px";
	
// 	requestAnimationFrame(animate);
// }
// animate();

// // Move ball with cursor
// document.addEventListener("mousemove", function(event) {
// 	mouseX = event.pageX;
// 	mouseY = event.pageY;
// });

//scroll
// const scrollline = document.querySelector('.scroll-line');

//       function fillscrollline(){
//         const windowHeight = window.innerHeight;
//         const fullHeight = document.body.clientHeight;
//         const scrolled = window.scrollY;
//         const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

//         scrollline.style.width = percentScrolled + '%';
//       };

//       window.addEventListener('scroll', fillscrollline);
  return (
    <div className="App">
      {/* <div className="scroll-line"></div> */}
      <Nav/>
      <Home/>
      <About/>
      <Service/>
      <Skill/> 
      <Edu/>
      <Project/>
      <Contact/>
        {/* <div className='ball'></div>   */}
    </div>
  );
}

export default App;
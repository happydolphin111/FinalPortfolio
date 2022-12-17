import './Pages.css';


export default function Jamble() {
    function changeIn(e) {
        e.target.style.background = 'rgb(224, 15, 127)';
        e.target.style.color = 'white'
    }
    
    function changeOut(e) {
        e.target.style.removeProperty('background');
        e.target.style.removeProperty('color');
    }
    
    // Change gto go back to home screen
    const navigateHome = () => {
        // Add
      };
    
    
        return (
    
            <div className="Personas">
    
    
            <div className="menubar"> 
            <div className='mininame'>
              my name
            </div>
    
            <div className="menuPic"> 
            <img src='assets/images/brain.png' height="100px" alt="Brain Pic" />
            </div>
            
            <div className='menuinfo'>
    
            <button className="ProjButton" 
            onClick={navigateHome} 
            onMouseOver={changeIn}
            onMouseLeave={changeOut}>
              HOME 
            </button>        
    
            </div> 
            </div>
    
    
            <div className="PageHeader"> Iterative Design </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> What? </div>
            <div className="DescriptionText"> In teams, practice designing an application for a Startup, in our case Jamble, by only knowing their business objective. </div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> Why? </div>
            <div className="DescriptionText"> As a designer you often get to work with clients that don't have much of an idea of what they would like their website
            or application to look like, and which leaves total creative freedom to us. At the same time, the business' objective should be the center of the interface
            that we design, so it's important to know how to balance both what the company wants for functionality while still keeping creative
            freedom which could also allow for other ideas to flow and make the interface even better.  </div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> How? </div>
            <div className="DescriptionText"> This project consists on 4 different parts: 
            Sketching and wireframing, where we sketched a few brainstormed ideas for what Jamble's app could look like and combined the best ideas into one low fidelity wireframe.
            Mockups, in this part we put together a high fidelity prototype in Figma with interactive features to move around in the app. In addition to that, we also obtained and implemented feedback for that Figma prototype. 
            User testing, after creating our testing plan we submitted our Figma alongside some instructions for random users to test it and provide feedback on the difficulty of the task for potential changes they would do as users.  
            Contact the startup, where we emailed the startup Jamble to hear what they though about our proposal!
            </div>
            </div>
            
            <div className="DescriptionHeader"> Take A Look: </div>
            <iframe src="https://cs1300-iterative-design-7ne.pages.dev" width='1000vw' height='900vw'  ></iframe>
    
    
            <div className="Description">
            <div className="DescriptionHeader"> My Take On It </div>
            <div className="DescriptionText"> It was great working as a team to observe how other designers work. In addition to that, it was also great to tackle the challenge of building an idea 
            absolutely from scratch and with only a few ideas for features to add.  </div>
            </div>
    
            </div>
        )
    }
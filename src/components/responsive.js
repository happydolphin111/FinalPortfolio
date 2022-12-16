import './Pages.css';


export default function Responsive() {

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
    
    
            <div className="PageHeader"> Responsive Redesign </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> What? </div>
            <div className="DescriptionText"> Practice redesigning websites by using Diagnostico Maipu's as an example. </div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> Why? </div>
            <div className="DescriptionText"> A lot of the work that goes into being a UI/UX designer is redesigning already existing interfaces, 
            updating them to better fit how the users are able to interact with it in line with what the organization wants.</div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> How? </div>
            <div className="DescriptionText"> This project consists on 3 different parts: 
            The website and its flaws, in which I explained why I chose this interface and went into analyzing the usability and accessibility aspects of it to support my choice.
            Visual redesign, where I showed low and high fidelity prototypes and proposed a visual design style guide to better guide the programmers potentially building the website. 
            Getting to work, where I showcased the website I'd redesigned for Diagnistico Maipu using my ideas and pointers from part two. 
            </div>
            </div>
            
            <div className="DescriptionHeader"> Take A Look: </div>
            // Embedded Page
            // https://happydolphin111.github.io/-ResponsiveRedesign/
    
    
            <div className="Description">
            <div className="DescriptionHeader"> My Take On It </div>
            <div className="DescriptionText"> Having had used this interface myself, it felt great to be able to redesign it to fit my needs as a patient of Diagnostico Maipu. 
            At the same time, it was also another opportunity to continue being exposed to the need as a designer to constantly be going back and forth between the big picture and the small picture in order to 
            consider everything one needs to: the users needs (interactions and accessibility) but also the needs of the people who hired you to design their website. </div>
            </div>

            <div className="Description">
            <div className="DescriptionHeader"> Note! </div>
            <div className="DescriptionText"> After having finished this assignment, I went back to Diagnostico Maipu's website and to my surprise they had completely redesigned it. After looking at it, I realized
            the ideas they had implemented were very similar to the ones I proposed in this project! Take a look below</div>
            </div>
            
            <div className="responsiveEvidence">
            <img src='assets/images/responsive.png' alt="Github Icon" width='30vw'/>
            <h2> VS. </h2>
            <img src='assets/images/newMaipu.png' alt="Email Icon" width='30vw'/>
            </div>
            <a href="https://www.diagnosticomaipu.com">Link to new page!</a>
    
            </div>
        )
    }
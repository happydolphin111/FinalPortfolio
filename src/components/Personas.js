import './Pages.css';



export default function PersonasFunc() {


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


        <div className="PageHeader"> Personas and Storyboarding </div>

        <div className="Description">
        <div className="DescriptionHeader"> What? </div>
        <div className="DescriptionText"> Practice working with Personas to model potential users for an interface. </div>
        </div>

        <div className="Description">
        <div className="DescriptionHeader"> Why? </div>
        <div className="DescriptionText"> Users are the center of UI/UX design, making it essential to know how to study and conduct research to be informed on who you are designing for.</div>
        </div>

        <div className="Description">
        <div className="DescriptionHeader"> How? </div>
        <div className="DescriptionText"> This project consists on 4 different parts: 
        Preparation, where all the background work of choosing the interface and crafting the questions for the interviews happen.
        Recording observations, where I gather my conclusions after having observed users interact with my the pool table, as well as a recap of the interviews I conducted. 
        Personas, where I built two persona maps for two different types of users for my interface.
        Storyboards, where I drew two storyboards to represent how the users interact with the pool table interface.
        </div>
        </div>
        
        <div className="DescriptionHeader"> Take A Look: </div>
        // Embedded Page


        <div className="Description">
        <div className="DescriptionHeader"> My Take On It </div>
        <div className="DescriptionText"> After completing this project I can confidently say I learnt a lot of what goes behind the initial user research 
        for a particular interface, including what questions to ask to potential users as well as creating hypothetical models of different qualities users can have and how that shapes the way they interact with the interface. </div>
        </div>

        </div>
    )
}
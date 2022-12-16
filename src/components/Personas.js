import './Personas.css';



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
const handleClickScroll = () => {
  };


    return (

        <div className="Personas">

        // same nav bar
            // button to go back
            // dropdown menu w/ other projects

        <div className="menubar"> 
        <div className='mininame'>
          my name
        </div>

        <div className="menuPic"> 
        <img src='assets/images/brain.png' height="100px" alt="Brain Pic" />
        </div>
        
        <div className='menuinfo'>

        <button className="ProjButton" 
        onClick={handleClickScroll} 
        onMouseOver={changeIn}
        onMouseLeave={changeOut}>
          HOME 
        </button>        

        </div> 
        </div>


        <div className="PageHeader"> Personas and Storyboarding </div>

        <div className="Description">
        <div className="DescriptionHeader"> Why? </div>
        <div className="DescriptionText"></div>
        </div>

        <div className="Description">
        <div className="DescriptionHeader"> How? </div>
        <div className="DescriptionText"></div>
        </div>

        <div className="Description">
        <div className="DescriptionHeader"> What? </div>
        <div className="DescriptionText"></div>
        </div>

        <div className="Description">
        <div className="DescriptionHeader"> My Take On It </div>
        <div className="DescriptionText"></div>
        </div>

        // Section with reflection of what Ilearnt by doing the assignment. 
        <div className="Reflection"> hello </div>
        
        // Embedded Page


        </div>
    )
}
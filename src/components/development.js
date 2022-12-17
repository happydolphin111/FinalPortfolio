import './Pages.css';


function Development() {

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
    
    
            <div className="PageHeader"> Development </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> What? </div>
            <div className="DescriptionText"> I made a website where people can see the teams who participated in the round of 16 in the world cup and learn more about them by using the features of filtering and sorting. </div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> Why? </div>
            <div className="DescriptionText"> Practice working with react, specially the ideas of state and components.  </div>
            </div>
    
            <div className="Description">
            <div className="DescriptionHeader"> How? </div>
            <div className="DescriptionText"> The users can filter countries by continent and/or main language spoken as well as sorting by ascending or descending alphabetical order. 
            People using this website can also add a team to the favorites section once (or remove them), where there is a state keeping track and showing the cumulative number of cups the teams in favorites have together. 
            </div>
            </div>
            
            <div className="DescriptionHeader"> Take A Look: </div>
            <iframe src="https://happydolphin111.github.io/DevelopmentReact/" width='100%' height='600vw' ></iframe>
    
    
            <div className="Description">
            <div className="DescriptionHeader"> My Take On It </div>
            <div className="DescriptionText"> I learned a lot about working with react, which a the time I started with the project I hadn't felt very confident about. </div>
            </div>
    
            </div>
        )
    }

export default Development
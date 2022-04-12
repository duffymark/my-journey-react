import hawaii from './assets/hawaii.png'

const TwentyEighteen = () => {
    return (
         <div id="scrollStart" class="twentyEighteen">
             
            <h2>2018</h2>
            <div className="imageContainer">
            <img class="beachImg" src={hawaii} alt="Hawaiian Beach"/>
            <p>- while working in insurance my wife received an offer to teach at the University of Hawaii in Honolulu.</p>
            </div>
            <p class="pTwo">- left my career to move abroad and become a stay-at-home-father for our 2 year old daughter.</p>
        </div>
       
    )
}

export default TwentyEighteen;


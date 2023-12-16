import ExplorasiBudaya from "../Components/Home/ExplorasiBudaya";
import Navbar from "../Components/Navbar";
import Footer from "../Components/bundle/Footer";
import CardSlideDestinasi from "../Elements/Home/CardSlideDestinasi";
import CardSlideFour from "../Elements/Home/CardSlideFour";

const PageDestinasi = () =>{
    return(<>
        <Navbar />
        <div className="nav-gap" style={{height:"120px"}}>
        </div>
        <ExplorasiBudaya/>
        <CardSlideFour/>
        <Footer />
    </>);
}

export default PageDestinasi
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Content from "./component/Content";

function Home() {
    return ( 
        <div className="h-full bg-white100">
            <Header/>
            <Content/>
            <Footer/>
        </div>
     );
}

export default Home;
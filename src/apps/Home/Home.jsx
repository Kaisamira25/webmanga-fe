import Header from "../../components/Header";
import Body from "./component/Content";

function Home() {
    return ( 
        <div className="h-screen bg-green400">
            <Header/>
            <Body/>
        </div>
     );
}

export default Home;
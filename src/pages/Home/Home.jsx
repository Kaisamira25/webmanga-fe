import Body from "../../apps/Home/Body";
import Header from "../../components/Header/Header";
import style from './Home.module.scss'
function Home() {
  return (
    <div className="h-full bg-white100">
      <Header />
      <Body />
    </div>
  );
}

export default Home;

import Header from "./components/Header";
import MHeader from "./components/MHeader";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Lang from "./components/Lang";
import Project from "./components/projects/Project";
import Client from "./components/Client";
import MobileMenu from "./components/MobileMenu";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container__x">
      <Header />
      <MHeader></MHeader>
      <Banner></Banner>
      <Experience></Experience>
      <Lang></Lang>
      <Project></Project>
      <Client></Client>
      <Contact></Contact>
      <MobileMenu></MobileMenu>
    </div>
  );
}

export default App;

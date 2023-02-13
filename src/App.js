import { useState } from "react";
import Banner from "./modules/Banner";
import Explore from "./modules/Explore";
import Footer from "./modules/Footer";
import Header from "./modules/Header";
import HowItWork from "./modules/HowItWork";
import LiveAction from "./modules/LiveAction";
import Popular from "./modules/Popular";
import ReadyEmail from "./modules/ReadyEmail";
import TopCreater from "./modules/TopCreater";

function App() {
  const [showOnTop, setShowOnTop] = useState(false);
  const handleOnTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setShowOnTop(true);
    } else {
      setShowOnTop(false);
    }
  });
  return (
    <div className="App">
      {/* <div className="overlay"></div> */}

      <div className="layout">
        <div
          className={`onTop ${showOnTop ? "show" : ""}`}
          onClick={handleOnTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </div>
        <Header></Header>
        <Banner></Banner>
        <div className="client__logo"></div>
        <LiveAction></LiveAction>
        <HowItWork></HowItWork>
        <Popular></Popular>
        <Explore></Explore>
        <TopCreater></TopCreater>
        <ReadyEmail></ReadyEmail>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

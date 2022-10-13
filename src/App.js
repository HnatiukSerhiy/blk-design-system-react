import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import Introduction from "components/Introduction.js";
import Meteorite from "./components/SpaceObjects/Meteorite";
import Comet from "./components/SpaceObjects/Comet";
import Meteoroid from "./components/SpaceObjects/Meteoroid";
import Asteroid from "./components/SpaceObjects/Asteroid";
import BlackHole from "./components/SpaceObjects/BlackHole";
import Nebula from "./components/SpaceObjects/Nebula";
import ContactUs from "./components/ContactUs";

const App = () => {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");

    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Introduction />
          <div id="content">
            <Meteorite />
            <Meteoroid />
            <Asteroid />
            <Comet />
            <BlackHole />
            <Nebula />
          </div>
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
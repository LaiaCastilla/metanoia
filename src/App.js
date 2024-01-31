import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

import "./styles/App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Hypnotherapie from "./components/Hypnotherapie";
import Reiki from "./components/Reiki";
import Footer from "./components/Footer";

function App() {
  let [page, setPage] = useState("home");

  return (
    <div className="App">
      <NavigationBar page={page} setPage={setPage} />
      {page === "home" ? (
        <Home page={page} setPage={setPage} />
      ) : page === "about" ? (
        <div>
          <Contact />
          <Footer />
        </div>
      ) : page === "hypno" ? (
        <div>
          <Hypnotherapie />
          <Footer />
        </div>
      ) : page === "reiki" ? (
        <div>
          <Reiki />
          <Footer />
        </div>
      ) : null}

      <div className="container-fluid"></div>
    </div>
  );
}

export default App;

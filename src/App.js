import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

import "./styles/App.css";
import Home from "./components/Home";
import About from "./components/About";
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
          <About />
          <Footer />
        </div>
      ) : page === "hypno" ? (
        <Hypnotherapie />
      ) : page === "reiki" ? (
        <Reiki />
      ) : null}

      <div className="container-fluid"></div>
    </div>
  );
}

export default App;

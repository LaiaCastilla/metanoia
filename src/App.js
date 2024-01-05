import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

import "./styles/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Hypnotherapie from "./components/Hypnotherapie";
import Reiki from "./components/Reiki";

function App() {
  let [page, setPage] = useState("home");

  return (
    <div className="App">
      <NavigationBar page={page} setPage={setPage} />
      {page === "home" ? (
        <Home page={page} setPage={setPage} />
      ) : page === "about" ? (
        <About />
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

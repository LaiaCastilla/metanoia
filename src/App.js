import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

import "./styles/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Hypnotherapie from "./components/Hypnotherapie";

function App() {
  let [page, setPage] = useState("home");

  return (
    <div className="App">
      <NavigationBar page={page} setPage={setPage} />
      {page === "home" ? (
        <Home />
      ) : page === "about" ? (
        <About />
      ) : page === "hypno" ? (
        <Hypnotherapie />
      ) : null}

      <div className="container-fluid"></div>
    </div>
  );
}

export default App;

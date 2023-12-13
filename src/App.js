import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

import "./styles/App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  let [page, setPage] = useState("home");

  return (
    <div className="App">
      <NavigationBar page={page} setPage={setPage} />
      {page === "home" ? <Home /> : page === "about" ? <About /> : null}

      <div className="container-fluid"></div>
    </div>
  );
}

export default App;

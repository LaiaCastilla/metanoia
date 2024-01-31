import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";

function Home(props) {
  return (
    <div className="Home">
      <Hero page={props.page} setPage={props.setPage} />
      <About/>
    </div>
  );
}

export default Home;

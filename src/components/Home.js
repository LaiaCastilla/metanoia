import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";

function Home(props) {
  return (
    <div className="Home">
      <Hero page={props.page} setPage={props.setPage} />
      <Contact />
    </div>
  );
}

export default Home;

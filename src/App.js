import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <div className="container-fluid"></div>
    </div>
  );
}

export default App;

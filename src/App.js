import NavigationBar from "./components/NavigationBar";

import "./styles/App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />

      <div className="container-fluid"></div>
    </div>
  );
}

export default App;

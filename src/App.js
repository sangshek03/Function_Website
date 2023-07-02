import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <div>
      <Navbar title="Auto-Fun" home="Home" about="About_Us" />
      <div className="container my-3">
        <TextForm />
      </div>
    </div>
  );
}

export default App;

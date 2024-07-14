import "./App.css";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";

function App() {
  return (
    <>
      {/* navbar component*/}
      <Navbar title="TextPros" />
      <div className="container my-3">
        <TextForm heading="Your text to Be Modified" />
      </div>
    </>
  );
}

export default App;

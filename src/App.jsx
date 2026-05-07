import "./App.css";
import Header from "./components/Header";
import KeyboardInput from "./components/KeyboardInput";
import Paragraph from "./components/Paragraph";
function App() {
  return (
    <div className="app-container">
      <Header />
      <Paragraph />
      <KeyboardInput />
    </div>
  );
}

export default App;

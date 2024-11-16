import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <BrowserRouter basename="/arun-kumar-bitcot">
    <Routes>
      <Route path="/" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;

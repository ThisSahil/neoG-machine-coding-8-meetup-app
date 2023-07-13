import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Navbar from "./Navbar/Navbar";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;

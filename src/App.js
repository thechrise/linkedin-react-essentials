import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home, About, Events, Contact} from "./pages";

function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <h1>Hello React Testing Library</h1>
      </div>
    )
}

export default App;

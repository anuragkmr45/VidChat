import { Routes, Route } from "react-router-dom";

import Lobby from './screens/Lobby';
import Room from './screens/Room'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;

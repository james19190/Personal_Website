import Navbar from "./components/Navbar/navbar"; 
import {Routes, Route, useLocation} from 'react-router-dom'
import AnimatedRoutes from "./components/AnimatedRoutes/animatedroutes";

function App() {
  const location =useLocation()
  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />

    </div>
  );
}

export default App;


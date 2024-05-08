import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import WhatsApp from "./components/Whatsapp.jsx";
import Footer from "./components/Footer.jsx";
import Scrollup from "./components/scrollup.jsx";
import AnimatedRoutes from "./Animatedroutes.jsx";

function App() {
  return (
    <Router>
      <NavBar />

      <AnimatedRoutes />

      <WhatsApp />
      <Scrollup />
      <Footer />
    </Router>
  );
}

export default App;

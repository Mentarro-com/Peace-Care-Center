import NavBar from './components/NavBar'
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import GalleryPage from "./pages/GalleryPage"
import ContactPage from "./pages/ContactPage"
import WhatsApp from './components/Whatsapp.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
        <NavBar />

        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ServicePage" element={<ServicePage />} />
        <Route path="/GalleryPage" element={<GalleryPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>

        <WhatsApp />

        <Footer />

    </Router>
    
  );
}

export default App;

import NavBar from "./components/NavBar";
import { Helmet } from 'react-helmet';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import WhatsApp from "./components/Whatsapp.jsx";
import Footer from "./components/Footer.jsx";
import Scrollup from "./components/scrollup.jsx";
import AnimatedRoutes from "./Animatedroutes.jsx";
import Phone from "./components/Phone.jsx";


function App() {
  return (
    <Router>
      <Helmet>
        <title>Peace Life Care Center - De-Addiction Center in Chennai</title>
        <meta name="description" content="Peace Life Care Center in Anakaputtur, Chennai offers comprehensive services including alcohol and drug de-addiction, psychiatric services, yoga, and more." />
        <meta name="keywords" content="de addiction center in Chennai, drug de addiction in Pammal, de addiction in Palavaram, addiction center, nearby addiction center, alcohol de addiction, drug de addiction, psychiatric services, smoking de addiction, ayurveda, homeopathy, yoga, meditation, medically qualified doctor team, lifestyle management, dietary management, psychologist support, rehabilitation center in Chennai, alcohol rehabilitation in Chennai, drug rehabilitation in Chennai, alcohol recovery center Chennai, drug recovery center Chennai, substance abuse treatment Chennai, drug rehab center Chennai, alcohol rehab center Chennai, addiction treatment center Chennai, detox center Chennai, rehabilitation services Chennai, addiction recovery Chennai, alcohol detoxification Chennai, drug detoxification Chennai, inpatient rehab Chennai, outpatient rehab Chennai, rehab facility Chennai, addiction help Chennai, alcohol addiction help Chennai, drug addiction help Chennai, mental health services Chennai, rehab for alcohol addiction Chennai, rehab for drug addiction Chennai, Chennai addiction recovery center, Chennai alcohol treatment center, Chennai drug treatment center, best rehab center in Chennai, top rehab center in Chennai, comprehensive rehab services Chennai, holistic rehab center Chennai" />
        <meta name="author" content="Peace Life Care Center" />
        <link rel="canonical" href="https://www.peacelifecarecenter.com" />
        {/* Structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "MedicalOrganization",
              "name": "Peace Life Care Center",
              "url": "http://www.peacelifecarecenter.com",
              "logo": "http://www.peacelifecarecenter.com/path/to/logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9789053645",
                "contactType": "Customer Service"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No.3, 12th Street, Balaji Nagar",
                "addressLocality": "Anakaputtur",
                "addressRegion": "Chennai",
                "postalCode": "600070",
                "addressCountry": "IN"
              },
              "description": "Peace Life Care Center offers comprehensive rehabilitation services in Anakaputtur, Chennai. Our experienced staff provides personalized care including alcohol and drug de-addiction, psychiatric services, smoking de-addiction, ayurveda, homeopathy, yoga, meditation, lifestyle management, and psychological support."
            }
          `}
        </script>
      </Helmet>
      <NavBar />

      <AnimatedRoutes />

      <WhatsApp />
      <Phone />
      <Scrollup />
      <Footer />
    </Router>
  );
}

export default App;

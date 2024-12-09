import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './public/components/TopNav';
import Navbar from './public/components/Navbar';
import Carousel from './public/components/Carousel';
import PlanSlider from './public/components/PlanSlider';
import ServiceCards from './public/components/ServiceCards';
import TeamMember from './public/components/TeamMember';
import EInvoicingCard from './public/components/EInvoicingCard';
import DocumentUnderstanding from './public/components/DocumentUnderstanding';
import Footer from './public/components/Footer';
import Home from './Home';
import ContactUs from './public/components/ContactUs';
import DigitalTransFormation from './public/services/DigitalTransFormation';
import CursorAnimation from './public/components/CursorAnimation';
import BlogList from './public/services/BlogList';
import AboutUs from './public/services/AboutUs';
import RoboticProcessAutomation from './public/services/RoboticProcessAutomation';
import ChatBots from './public/services/ChatBots';
import ERPPractice from './public/services/ERPPractice';
import CustomDevelopment from './public/services/CustomDevelopment';
import DigitalWorkforce from './public/services/DigitalWorkforce';

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Poppins' }}>
      <CursorAnimation />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/plans" element={<PlanSlider />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/services" element={<ServiceCards />} />
          <Route path="/team" element={<TeamMember />} />
          <Route path="/einvoicing" element={<EInvoicingCard />} />
          <Route path="/digitaltrasformation" element={<DigitalTransFormation />} />
          <Route path="/RoboticProcessAutomation" element={<RoboticProcessAutomation />} />
          <Route path="/ChatBots" element={<ChatBots />} />
          <Route path="/ERPPractice" element={<ERPPractice />} />
          <Route path="/CustomDevelopment" element={<CustomDevelopment />} />
          <Route path="/DigitalWorkforce" element={<DigitalWorkforce />} />
          <Route path="/BlogList" element={<BlogList />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/document-understanding" element={<DocumentUnderstanding />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import MenuPage from "./pages/Menu";
import EventsPage from "./pages/Events";
import ContactsPage from "./pages/Contacts";
import BookingsPage from "./pages/Bookings";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="mellows-theme">
        {!isSplashComplete && (
          <SplashScreen onComplete={() => setIsSplashComplete(true)} />
        )}
        
        <div className={`min-h-screen flex flex-col ${isSplashComplete ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </ThemeProvider>
    </Router>
  );
}

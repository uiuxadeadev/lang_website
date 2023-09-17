import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { Link, Box, Text, Image } from "@chakra-ui/react";
import {
  Header,
  Home,
  Session,
  Library,
  Review,
  FAQ,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Session" element={<Session />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/FAQ" element={<FAQ />} />
            {/* <Route path="/*" element={<NotFound/>} /> */}
          </Routes>
          <Footer />
          {/* <Alert /> */}
        </Router>
      </main>
    </div>
  );
}

export default App;

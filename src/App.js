import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { Link, Box, Text, Image } from "@chakra-ui/react";
import {
  Header,
  Session,
  Library,
  Review,
  FAQ,
  Hero1,
  Hero2,
  Footer,
  Hero5,
  Hero3FreeSection,
  Hero4FreeSection,
  Hero6,
  Hero7,
  Hero8,
  Hero9,
  Hero10,
  Hero11,
  Hero12,
  Hero13,
  Hero14,
} from "./components";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path="/Session" element={<Session />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/Review" element={<Review />} />
            <Route path="/FAQ" element={<FAQ />} />
            {/* <Route
              path="/ReservationConfirmed"
              element={<ReservationConfirmed />}
            /> */}
          </Routes>
          <Hero1 />
          <Hero2 />
          <Hero3FreeSection />
          <Hero4FreeSection />
          <Hero5 />
          <Hero6 />
          <Hero7 />
          <Hero8 />
          <Hero9 />
          <Hero10 />
          <Hero11 />
          <Hero12 />
          <Footer />
          {/* <Alert /> */}
        </Router>
      </main>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { Link, Box, Text, Image } from "@chakra-ui/react";
import { Header, Session, Library, Review, FAQ, Footer } from "./components";

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
          <Box p={4} display={{ md: "flex" }}>
            <Box flexShrink={0}>
              <Image
                borderRadius="lg"
                width={{ md: "500px", lg: "750px", xl: "1000px" }}
                src="https://bit.ly/2jYM25F"
                alt="Woman paying for a purchase"
              />
            </Box>

            {/* <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Marketing
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
        </Box> */}
          </Box>
          <Box flexShrink={0}>
            <Image
              borderRadius="lg"
              width={{ md: "500px", lg: "750px", xl: "1000px" }}
              src="https://bit.ly/2jYM25F"
              alt="Woman paying for a purchase"
            />
          </Box>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          var<p>test</p>
          <p>test</p>
          <Footer />
          {/* <Alert /> */}
        </Router>
      </main>
    </div>
  );
}

export default App;

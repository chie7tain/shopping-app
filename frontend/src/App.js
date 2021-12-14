import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" exact component={HomeScreen} />
            {/* <HomeScreen /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

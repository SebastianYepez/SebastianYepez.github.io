import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Workshops from "./pages/Workshops";
import Workshop1 from "./pages/WS1_VSJup";
// import Workshop3 from "./pages/WS3_Git";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="/workshops" replace />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshop1" element={<Workshop1 />} />
            {/* <Route path="/workshop3" element={<Workshop3 />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Aims from "./pages/Aims";
import Testimonials from "./pages/Testimonials";
import Newsletter from "./pages/Newsletter";
import Join from "./pages/Join";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/history" element={<Navigate to="/committee" replace />} />
            <Route path="/aims" element={<Aims />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CustomNavbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx" // 1. Import the new footer
import HomePage from "./pages/HomePage.jsx"
import ProjectsPage from "./pages/ProjectsPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ServicesPage from "./pages/ServicesPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <CustomNavbar />
        <main style={{ flex: "1 0 auto" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer /> {/* 2. Add the footer here */}
      </div>
    </Router>
  )
}

export default App

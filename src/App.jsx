import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CustomNavbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProjectsPage from "./pages/ProjectsPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ServicesPage from "./pages/ServicesPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import "./assets/styles/globals.css"

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <CustomNavbar />
        <main className="app-main">
          <Suspense
            fallback={<div className="loading-fallback">Loading...</div>}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="*"
                element={<div className="not-found">Page not found</div>}
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

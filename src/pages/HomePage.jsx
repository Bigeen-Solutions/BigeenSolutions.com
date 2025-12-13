import React from "react"
import Hero from "../components/Hero.jsx"
import Clients from "../components/Clients.jsx"
import Features from "../components/Features.jsx"
import Testimonials from "../components/Testimonials.jsx"

function HomePage() {
  return (
    <div>
      <Hero />
      <Clients />
      <Features />
      <Testimonials />
    </div>
  )
}

export default HomePage

import React from "react"
import Hero from "../components/Hero.jsx"
import Clients from "../components/Clients.jsx"
import Features from "../components/Features.jsx"
import Faq from "../components/Faq.jsx"

function HomePage() {
  return (
    <div>
      <Hero />
      <Clients />
      <Features />
      <Faq />
    </div>
  )
}

export default HomePage

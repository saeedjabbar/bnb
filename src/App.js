import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import {data} from  "./data"

console.log(data);

export default function App() {
  // <Hero />
  const experiences = data.map(experience => 
    <Card
      key={experience.id}
      experience={experience}
    />)
    return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
          {experiences}
      </section>
    </>
  )
}
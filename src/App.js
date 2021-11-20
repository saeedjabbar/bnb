import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"


export default function App() {
  // <Hero />
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2660264-media_library/original/afdb188c-80b4-48ab-bb65-2b0a99a7dbc3.jpeg?im_w=1440"
        rating="5.0"
        reviewCount={116}
        title="Circus Show"
        price={137}
      />
      <Card
        img="https://a0.muscache.com/im/pictures/e9c993c4-9de7-46b9-b8ea-f8872f474997.jpg?im_w=720"
        rating="4.0"
        reviewCount={16}
        title="Ski Trip"
        price={19}
      />
    </div>
  )
}
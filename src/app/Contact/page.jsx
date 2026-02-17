"use client";
import React from 'react'
import ScrambledText from '../../components/ScrambledText'; 
import WorldMap from "../../components/world-map";
import Footer from '../../components/Footer';
import { motion } from "motion/react";
import Nav from '../../components/Nav';
import  PillNav  from "@/components/PillNav";


const Page = () => {
  return (
    <>
    <PillNav
        logo={"https://html.theme-village.com/transhub/images/logo.svg"}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/Services' },
        { label: 'Contact', href: '/Contact' },
        { label: 'About', href: '/About' }
      ]}
      activeHref="/"
      className="custom-nav w-full text-center"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      onMobileMenuClick={() => console.log('Mobile menu clicked')}
      initialLoadAnimation={false}
    />
    <Nav/>
      <div>
        <img src="./contact.jpg" alt="Contact Us" className="w-full h-[20vh] md:h-[25vh] " />
        </div>
      <div className='absolute top-[10%] pl-10  text-white h-auto '>
        <h2 className='md:text-6xl text-lg font-bold font-mono  font-stretch-extra-expanded tracking-wide  uppercase'> <ScrambledText>Contact Us</ScrambledText></h2>
        <ScrambledText
          className="font-mono  font-stretch-extra-expanded tracking-wide text-sm md:text-2xl pt-4 pl-4"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
          >
          home/contact-us
        </ScrambledText>
      </div>

      
   
      <div className=" py-8  bg-white w-full ">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
    {/* <Spline scene="https://prod.spline.design/QbNdNev2OLd7Pxr6/scene.splinecode" /> */}

     <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div>
          <p className="text-orange-500 font-semibold mb-2">Get in touch</p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Feel free to talk to our representative at any time
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Please use our contact form on our website or one of our contact
            numbers. We’re always happy to help and answer your questions.
          </p>

          <p className="text-gray-500 leading-relaxed mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            convallis ligula. Integer tincidunt ligula a purus volutpat
            gravida.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-orange-500 text-xl">📍</span>
              <p className="text-gray-700">
                The vehicle fleet consists of over 70
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-orange-500 text-xl">📞</span>
              <p className="text-gray-700">+386 40 222 455</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-orange-500 text-xl">✉️</span>
              <p className="text-gray-700">mail@companyname.com</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-gray-50 p-10 rounded-xl shadow-lg w-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Contact us
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="text"
              placeholder="Subject*"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              placeholder="Message*"
              rows="5"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
    <hr />
    <Footer />
    </>

  )
}

export default Page

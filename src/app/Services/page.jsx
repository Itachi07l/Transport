"use client"
import React from 'react'
import { Tabs } from '@/components/Tab';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { motion } from "framer-motion";
import ShippingForm from '../../components/Form';
import TrackingEmial from '../../components/TrackByEmail';
import { ContainerScroll } from "../../components/container-scroll-animation";
import  PillNav  from "@/components/PillNav";

const page = () => {

  const tabs = [
    {
      title: "warehouse ",
      value: "warehouse service",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>warehouse service</p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Transportation",
      value: "Transportation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Transportation tab</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent4 />
        </div>
      ),
    },

  ];
  const features = [
    {
      title: "24/7 Customer Support",
      icon: "🎧",
      desc:
        "Dedicated 24/7 customer support with one of our 120+ logistics agents ensures your business moves seamlessly, anytime, anywhere."
    },
    {
      title: "Customs Clearance",
      icon: "📦",
      desc:
        "Our B2B freight shipping services include expert customs clearance, ensuring your shipments arrive smoothly and without delay."
    },
    {
      title: "Credit Line",
      icon: "💳",
      desc:
        "We offer a credit line with monthly billing statements for easy and stress-free container transport."
    }
  ];
  const trailers = [
    {
      type: "Flatbed",
      length: "53ft",
      width: "8.5ft",
      height: "8.5ft",
      cost: "$2.45",
    },
    {
      type: "Landoll",
      length: "74ft",
      width: "8.5ft",
      height: "8.5ft",
      cost: "$3.75",
    },
    {
      type: "Lowboy",
      length: "29ft",
      width: "8.5ft",
      height: "8.5ft",
      cost: "$3.45",
    },
    {
      type: "Container Trailer",
      length: "20ft – 40ft",
      width: "8.5ft",
      height: "8.5ft",
      cost: "$3.20",
    },
    {
      type: "Side Lifter",
      length: "20ft – 40ft",
      width: "8.5ft",
      height: "8.5ft",
      cost: "$2.85",
    },
  ];



  return (
    <>
    <PillNav
        logo={"https://html.theme-village.com/transhub/images/logo.svg"}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/Service' },
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
      theme="light"
      initialLoadAnimation={false}
    />
      <Nav />
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col  px-20 w-full  items-start justify-start my-20">
        <Tabs tabs={tabs} />
      </div>



      

      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 transition-colors hover:text-gray-800">
              Everything You Need for
              <br />
              Overweight Container
              <br />
              Shipping
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4 transition-colors hover:text-gray-900">
              When you need overweight container shipping services, you need a
              company that understands the logistics for safe container moving.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10 transition-colors hover:text-gray-800">
              Container Transport has everything you need for efficient overweight
              container hauling and on-time delivery.
            </p>

            <p className="font-semibold text-gray-900 mb-4">
              Moving overweight containers involves:
            </p>

            {/* Bullet List */}
            <ul className="space-y-3 mb-10">
              {[
                "Getting the required permits for overweight container transportation.",
                "Getting the required paperwork.",
                "Getting the right trailers.",
                "Securing loading and offloading services."
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-start gap-3 text-gray-600 hover:text-gray-900 cursor-default"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>



            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
              >
                📞 (800) 570-8239
              </motion.a>


            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Soft background accent */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-orange-200 rounded-xl z-0" />

            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              src="https://www.containertransport.com/wp-content/uploads/2025/11/500x300-Watermarks-All-Sites-31.webp"
              alt="Overweight container transport"
              className="relative z-10 w-full rounded-xl shadow-xl object-cover"
            />
          </motion.div>

        </div>
      </section>

      <section className=" py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            A Better B2B Shipping Experience
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-gray-700 leading-relaxed mb-20"
          >
            Container Transport offers all business container shipping solutions.
            Transport your valuable business assets locally, nationwide, or even
            overseas. As a family-owned business, we understand the importance of
            ensuring every detail is done correctly. We treat your container move
            as if it were our own.
          </motion.p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-6 text-orange-500">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              📞 (800) 570-8239
            </motion.a>

          </div>
        </div>
      </section>
      <div>
        <img src="./s1.png" alt="" />
        <img src="./s2.png" alt="" />
        <hr />
      </div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                   with Container Transport
                </span>
              </h1>
            </>
          }
        >
          <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
            Container Trailers
          </h2>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-4 font-semibold">Trailer Type</th>
                  <th className="px-6 py-4 font-semibold">Length Capacity</th>
                  <th className="px-6 py-4 font-semibold">Width Capacity</th>
                  <th className="px-6 py-4 font-semibold">Height Capacity</th>
                  <th className="px-6 py-4 font-semibold">
                    Cost Per Mile (over 500 miles)
                  </th>
                </tr>
              </thead>

              <tbody>
                {trailers.map((row, index) => (
                  <motion.tr
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className={`${index % 2 === 0
                        ? "bg-[#fff4e9]"
                        : "bg-[#fffaf5]"
                      } transition`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {row.type}
                    </td>
                    <td className="px-6 py-4">{row.length}</td>
                    <td className="px-6 py-4">{row.width}</td>
                    <td className="px-6 py-4">{row.height}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {row.cost}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* CTA */}
          <div className="mt-14 flex items-center gap-6">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-7 py-3 rounded-md shadow hover:bg-blue-800 transition"
            >
              📞 (800) 570-8239
            </motion.a>
          </div>

        </div>
      </section>
        </ContainerScroll>
      </div>
      <ShippingForm />
      <TrackingEmial />
      {/* <Spline scene="https://prod.spline.design/4OiFmHJYyAzPLSl0/scene.splinecode" />   */}
      <Footer />
    </>
  )
}


const DummyContent1 = () => {
  return (
    <img
      src="./tab1.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[94%] absolute -bottom-10 inset-x-0 w-full rounded-4xl mx-auto p-4"
    />
  );
};


const DummyContent2 = () => {
  return (
    <img
      src="./tab2.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[94%] absolute -bottom-10 inset-x-0 w-full rounded-4xl mx-auto p-4"
    />
  );
};
const DummyContent3 = () => {
  return (

    <img
      src="./tab1.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[94%] absolute -bottom-10 inset-x-0 w-full rounded-4xl mx-auto p-4"
    />
  );
};
const DummyContent4 = () => {
  return (
    <img
      src="./tab1.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[94%] absolute -bottom-10 inset-x-0 w-full rounded-4xl mx-auto p-4"
    />
  );
};

export default page
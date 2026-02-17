"use client";
import * as React from "react";
import { cn } from '@/lib/utils';
import { ZoomParallax } from "@/components/zoom-parallax";
import { Skiper30 } from "@/components/ui/skiper-ui/skiper30";
import { Skiper19 } from "@/components/ui/skiper-ui/skiper19";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Nav from '../components/Nav';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { MacbookScroll } from "@/components/macbook-scroll";
import Footer from "@/components/Footer";
import { PinContainer } from "@/components/3d-pin";
import { motion } from "framer-motion";
import  PillNav  from "@/components/PillNav";
export default function Home() {



	const images = [
		{
			src: 'https://imgs.search.brave.com/5IOcqlFyFAji9CBbZGhor_U5Dpek0RL5JpCTBTPTzGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/NTE4LzI4NS9zbWFs/bC9nbG9iYWwtc2hp/cHBpbmctcm91dGVz/LWZpbGxlZC13aXRo/LWNhcmdvLXRydWNr/cy1lbnN1cmluZy10/aW1lbHktZGVsaXZl/cmllcy1mcmVlLXBo/b3RvLmpwZw',
			alt: 'Modern architecture building',
		},
		{
			src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Urban cityscape at sunset',
		},
		{
			src: 'https://imgs.search.brave.com/KvQLgaIwxJioQiSuASRRIzxU3SZMvwLDaCOQjemkn8g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/cmFuc3BvcnQtbG9n/aXN0aWNzLXByb2R1/Y3RzXzIzLTIxNTE1/NDE4MzAuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw',
			alt: 'Abstract geometric pattern',
		},
		{
			src: 'https://imgs.search.brave.com/li_g4uak97MRrIUwlz-4YoeUcuZNKqjCpm6MvQL1G_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VhcmF0ZXMuY29t/L2Rlc2lnbi9pbWFn/ZXMvaW5kZXgvc2xp/ZGVyL3NsaWRlNC9p/bWcteDJfMzYwLndl/YnA_OA',
			alt: 'Mountain landscape',
		},
		{
			src: 'https://imgs.search.brave.com/i6qAoImqrKmgwK142nEDW1DLSdMEuwl_nYw2k8FI4ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/ODM4MTQ0NC9waG90/by9sb2dpc3RpY3Mt/YW5kLXRyYW5zcG9y/dGF0aW9uLWludGVn/cmF0ZWQtd2FyZWhv/dXNpbmctYW5kLXRy/YW5zcG9ydGF0aW9u/LW9wZXJhdGlvbi1z/ZXJ2aWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1weGtL/Vk1rcWxrN1J5SmRz/VHlhZE1FM2dRRlJC/NFpFcTFybUZSVmx6/WF9rPQ',
			alt: 'Minimalist design elements',
		},
		{
			src: 'https://imgs.search.brave.com/zT51bMFAKhxpgQnk3Dtu8mmGfVYFcF6jdMDb1-w5Dys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NjYwNTc1OC9waG90/by9hZXJpYWwtdG9w/LXZpZXctY29udGFp/bmVyLXNoaXAtZnVs/bC1zcGVlZC13aXRo/LWJlYXV0aWZ1bC13/YXZlLXBhdHRlcm4t/Zm9yLWxvZ2lzdGlj/cy1pbXBvcnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWtR/VWp3ZTBZYlY3eTBK/TG9sWVJBRjZWWVVk/ZGFUSUdiNHNxeGxT/c3U3Rzg9',
			alt: 'Ocean waves and beach',
		},
		{
			src: 'https://imgs.search.brave.com/-FNIFwAhROqK0rpX6i96cWXmyyKxJ8Ck1DCynP-pZNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/OTA4MzgxMC9waG90/by9wYXJjZWxzLW9u/LWNvbnZleW9yLWJl/bHQtaW4tYS13YXJl/aG91c2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU5mRjNs/aUNXUDVkNkJ0bTFw/MGtvWTMwbXNMYTZL/X2t5Q1RFMnhMOHpP/VW89',
			alt: 'Forest trees and sunlight',
		},
	];


	const products = [
		{
			title: "Moonbeam",
			link: "https://gomoonbeam.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
		},
		{
			title: "Cursor",
			link: "https://cursor.so",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/cursor.png",
		},
		{
			title: "Rogue",
			link: "https://userogue.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/rogue.png",
		},

		{
			title: "Editorially",
			link: "https://editorially.org",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/editorially.png",
		},
		{
			title: "Editrix AI",
			link: "https://editrix.ai",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/editrix.png",
		},
		{
			title: "Pixel Perfect",
			link: "https://app.pixelperfect.quest",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
		},

		{
			title: "Algochurn",
			link: "https://algochurn.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/algochurn.png",
		},
		{
			title: "Aceternity UI",
			link: "https://ui.aceternity.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
		},
		{
			title: "Tailwind Master Kit",
			link: "https://tailwindmasterkit.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
		},
		{
			title: "SmartBridge",
			link: "https://smartbridgetech.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
		},
		{
			title: "Renderwork Studio",
			link: "https://renderwork.studio",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/renderwork.png",
		},

		{
			title: "Creme Digital",
			link: "https://cremedigital.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
		},
		{
			title: "Golden Bells Academy",
			link: "https://goldenbellsacademy.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
		},
		{
			title: "Invoker Labs",
			link: "https://invoker.lol",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/invoker.png",
		},
		{
			title: "E Free Invoice",
			link: "https://efreeinvoice.com",
			thumbnail:
				"https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
		},
	];



	const testimonials = [
		{
			quote:
				"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
			name: "Charles Dickens",
			title: "A Tale of Two Cities",
		},
		{
			quote:
				"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
			name: "William Shakespeare",
			title: "Hamlet",
		},
		{
			quote: "All that we see or seem is but a dream within a dream.",
			name: "Edgar Allan Poe",
			title: "A Dream Within a Dream",
		},
		{
			quote:
				"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
			name: "Jane Austen",
			title: "Pride and Prejudice",
		},
		{
			quote:
				"Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
			name: "Herman Melville",
			title: "Moby-Dick",
		},
	];
	const Badge = ({ className }: { className?: string }) => {
		return (
			<svg
				width="24"
				height="24"
				viewBox="0 0 56 56"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
			>
				<path
					d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
					fill="#00AA45"
				></path>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
					fill="#219653"
				></path>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
					fill="#24292E"
				></path>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
					fill="white"
				></path>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
					fill="#24292E"
				></path>
			</svg>
		);
	};


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
			<Nav />
			<section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://shthemes.net/demosd/logio/wp-content/uploads/2020/06/03.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Red Geometric Overlay */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-0 top-0 h-full w-[45%] bg-red-600/70 clip-path-diagonal"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-10 md:px-24">
        <div className="max-w-4xl text-white">
          {/* Small Tag */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 inline-block text-sm tracking-widest text-gray-200"
          >
            SINCE 2007
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light leading-tight"
          >
            <motion.span
              whileHover={{ letterSpacing: "0.15em" }}
              transition={{ duration: 0.3 }}
              className="block cursor-pointer"
            >
              TRANSPORT
            </motion.span>

            <motion.span
              whileHover={{ letterSpacing: "0.15em" }}
              transition={{ duration: 0.3 }}
              className="block cursor-pointer"
            >
              & LOGISTICS
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-gray-200"
          >
            We provide reliable transport, logistics, and distribution solutions
            across regions with a strong focus on quality, safety, and efficiency.
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 rounded-full bg-white px-8 py-3 font-medium text-black shadow-lg hover:bg-gray-200 transition"
          >
            Explore Services →
          </motion.button>
        </div>
      </div>
    </section>
			<div className="h-[200vh] w-auto bg-white">
				<Skiper19 />
			</div>
			<HeroParallax products={products} />
			{/* <ThumbnailsCarousel /> */}
			{/* <AnimatedThemeToggler /> */}
			{/* <div>
				<TextRoll className="text-6xl text-center mt-5 font-bold">Hover me</TextRoll>

				<TextRoll className="text-4xl text-center mt-7 mb-10 font-extrabold" center>
					Centered Animation
				</TextRoll>
			</div> */}

			{/* <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        badge={
          <a href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div> */}

			<main className="max-h-screen w-full">
				<div className="relative flex items-center justify-center">
					<div
						aria-hidden="true"
						className={cn(
							'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
							'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
							'blur-[30px]',
						)}
					/>
					<h1 className="text-center text-4xl text-orange-600  md:text-5xl mt-10 font-bold">
						Our Service Packages
					</h1>
				</div>
				<ZoomParallax images={images} />
			</main>
			<Skiper30 />

  <div className='text-center mt-20 mb-10'>
     <h1 className='font-mono text-4xl text-yellow-400 mb-5'>Professional Team</h1>
     <p className='font-mono text-2xl '>Meet our dedicated team</p>
    </div>

			<div className="h-[40rem] w-full flex items-center justify-center ">
				<PinContainer title="/ui.aceternity.com"
					href="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					className=" m"
					containerClassName={'m1-1'}
				>
					<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem] ">
						<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
							Sarah Chen
						</h3>
						<div className="text-base !m-0 !p-0 font-normal">
							<span className="text-slate-500 ">
								Product Manager at TechFlow
							</span>
						</div>
						<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" ><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" className="rounded-2xl object-cover" /></div>
					</div>
				</PinContainer>
				<PinContainer title="/ui.aceternity.com"
					href="https://twitter.com/mannupaaji"
					className=" m"
					containerClassName={'mt1-1'}
				>
					<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem] ">
						<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
							Michael Rodriguez
						</h3>
						<div className="text-base !m-0 !p-0 font-normal">
							<span className="text-slate-500 ">
								CTO at InnovateSphere
							</span>
						</div>
						<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" ><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-2xl object-cover" /></div>
					</div>
				</PinContainer>
				<PinContainer title="/ui.aceternity.com"
					href="https://twitter.com/mannupaaji"
					className=" m"
					containerClassName={'m1t-1'}
				>
					<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem] ">
						<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
							Emily Watson
						</h3>
						<div className="text-base !m-0 !p-0 font-normal">
							<span className="text-slate-500 ">
								Operations Director at CloudScale
							</span>
						</div>
						<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" ><img src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-2xl" /></div>
					</div>
				</PinContainer>
				<PinContainer title="/ui.aceternity.com"
					href="https://twitter.com/mannupaaji"
					className="m"
					containerClassName={'m11t-1'}

				>
					<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[26rem] ">
						<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
							James Kim
						</h3>
						<div className="text-base !m-0 !p-0 font-normal">
							<span className="text-slate-500 ">
								Engineering Lead at DataPro
							</span>
						</div>
						<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" ><img src="https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-2xl" /></div>
					</div>
				</PinContainer>
			</div>

			<div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
				<section className="relative py-32 bg-white overflow-hidden">
					<div className="max-w-6xl mx-auto px-6 text-center">

						{/* Section Label */}
						<div className="flex items-center justify-center gap-4 mb-6">
							<span className="h-[2px] w-12 bg-orange-500"></span>

							<p
								className="relative text-orange-500 font-semibold tracking-wide 
            transition-all duration-300 hover:tracking-widest cursor-default"
							>
								Our Testimonials
							</p>

							<span className="h-[2px] w-12 bg-orange-500"></span>
						</div>

						{/* Main Heading */}
						<h2
							className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 
          leading-tight transition-all duration-500 hover:text-gray-700"
						>
							<span className="inline-block hover:-translate-y-1 transition-transform duration-300">
								Satisfied People’s Say
							</span>
							<br />
							<span className="inline-block hover:translate-y-1 transition-transform duration-300">
								About Our Service
							</span>
						</h2>
					</div>

					{/* Decorative Background Text */}
					<span
						className="absolute inset-0 flex items-center justify-center 
        text-[200px] font-black text-gray-100 opacity-30 pointer-events-none">04
					</span>
				</section>
				<InfiniteMovingCards
					items={testimonials}
					direction="right"
					speed="fast"
				/>
			</div>
			<Footer />

		</>
	);
}


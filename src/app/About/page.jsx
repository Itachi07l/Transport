"use client";
import React from 'react'
import ScrambledText from '../../components/ScrambledText';
import Nav from '../../components/Nav';
import { motion } from "framer-motion";
import PixelTransition from '../../components/PixelTransition';
import Timeline from '../../components/Timeline';
import AnimatedTestimonials from '../../components/AnimatedTestimonials';
import Footer from '@/components/Footer';
import  PillNav  from "@/components/PillNav";

const Page = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://imgs.search.brave.com/i6qAoImqrKmgwK142nEDW1DLSdMEuwl_nYw2k8FI4ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/ODM4MTQ0NC9waG90/by9sb2dpc3RpY3Mt/YW5kLXRyYW5zcG9y/dGF0aW9uLWludGVn/cmF0ZWQtd2FyZWhv/dXNpbmctYW5kLXRy/YW5zcG9ydGF0aW9u/LW9wZXJhdGlvbi1z/ZXJ2aWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1weGtL/Vk1rcWxrN1J5SmRz/VHlhZE1FM2dRRlJC/NFpFcTFybUZSVmx6/WF9rPQ"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/CViqd534r1V1mmmdVPFYgk1PJTZ_8I8xywOqE6K0PQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/ODgyMTAzNS9waG90/by9nbG9iYWwtYnVz/aW5lc3MtbG9naXN0/aWNzLWltcG9ydC1l/eHBvcnQtYmFja2dy/b3VuZC1hbmQtY29u/dGFpbmVyLWNhcmdv/LWZyZWlnaHQtc2hp/cC10cmFuc3BvcnQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTZCcXFLV1JSTGNm/cE94UFJxZHBJRmtn/QnBWYlBvTkhFS29f/WXhkcmJManM9"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/kLF9nmb_FSkh0DSjIRh9yFBAkqpIlorZ7l8Wqe4Uc7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvbmF2aV9tdW1i/YWkvdDEvMDIycHh4/MjIueHgyMi4yNTAy/MjExOTE2MzAubDV0/MS9jYXRhbG9ndWUv/YWRpdHlhLXByaXlh/LWxvZ2lzdGljcy1s/aW1pdGVkLWthbGFt/Ym9saS1uYXZpLW11/bWJhaS10cmFuc3Bv/cnRlcnMtNWc2YXVy/b3kwYS0yNTAuanBn/P3c9NjQwJnE9NzU"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/3EzE3B7g0tc3Rr17-Tst17XV2BVbVwCql2b2acwHrPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/NTM4MzQ5Mi9waG90/by9sb2dpc3RpY3Mt/YW5kLXRyYW5zcG9y/dGF0aW9uLW9mLWNv/bnRhaW5lci1jYXJn/by1zaGlwLWFuZC1j/YXJnby1wbGFuZS13/aXRoLXdvcmtpbmct/Y3JhbmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXJPUFRl/Sm1hNXVVQ2lLNFNY/alBrSl9ma1poTHUy/T2Y1S2h2enM2X0hr/QUk9"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://imgs.search.brave.com/rFa8ECjp_ZWdHzWJIRecwumJmixSOJq3-7qCHfSNCFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWtv/dHNsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMi8w/eUlxMlVwSmdQRWxr/TjgtNDUyeDMyNC5w/bmc"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/zT51bMFAKhxpgQnk3Dtu8mmGfVYFcF6jdMDb1-w5Dys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NjYwNTc1OC9waG90/by9hZXJpYWwtdG9w/LXZpZXctY29udGFp/bmVyLXNoaXAtZnVs/bC1zcGVlZC13aXRo/LWJlYXV0aWZ1bC13/YXZlLXBhdHRlcm4t/Zm9yLWxvZ2lzdGlj/cy1pbXBvcnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWtR/VWp3ZTBZYlY3eTBK/TG9sWVJBRjZWWVVk/ZGFUSUdiNHNxeGxT/c3U3Rzg9"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/5IOcqlFyFAji9CBbZGhor_U5Dpek0RL5JpCTBTPTzGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/NTE4LzI4NS9zbWFs/bC9nbG9iYWwtc2hp/cHBpbmctcm91dGVz/LWZpbGxlZC13aXRo/LWNhcmdvLXRydWNr/cy1lbnN1cmluZy10/aW1lbHktZGVsaXZl/cmllcy1mcmVlLXBo/b3RvLmpwZw"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/DAnjjAv7Xj9ybTgmbrJB3xoBoPVwdpa2dEXCpAGrpd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUwLzU5Lzcz/LzM2MF9GXzc1MDU5/NzM3NV9xbG9UVkJN/U3hjc09UdkJuZW9R/U2RLNk1jcThuT05G/ei5qcGc"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://imgs.search.brave.com/-FNIFwAhROqK0rpX6i96cWXmyyKxJ8Ck1DCynP-pZNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/OTA4MzgxMC9waG90/by9wYXJjZWxzLW9u/LWNvbnZleW9yLWJl/bHQtaW4tYS13YXJl/aG91c2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU5mRjNs/aUNXUDVkNkJ0bTFw/MGtvWTMwbXNMYTZL/X2t5Q1RFMnhMOHpP/VW89"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/li_g4uak97MRrIUwlz-4YoeUcuZNKqjCpm6MvQL1G_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VhcmF0ZXMuY29t/L2Rlc2lnbi9pbWFn/ZXMvaW5kZXgvc2xp/ZGVyL3NsaWRlNC9p/bWcteDJfMzYwLndl/YnA_OA"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/ytyS_bAfJp--wVo-EawpoCYXJPUvLvzCf2qolRNQMFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90Y2ls/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNS9jb3Jw/b3JhdGUtbW92aWUu/anBn"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/sPlp0-fztwlX47JpxbUl0ix7ZDtYu01xbKcfuqaxnRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/Mzg4Mzc2MC9waG90/by93YXJlaG91c2Ut/ZGlzdHJpYnV0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1HVzBXdTFBMXlj/SURNTHYtakhuc2pR/b1QtUVpmbDdGYnhL/bUl6ajlrVWVBPQ"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
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
      initialLoadAnimation={false}
    />
      <Nav />
      <div>
        <img src="./contact.jpg" alt="Contact Us" className="w-full h-[25vh] md:h-[30vh] " />
      </div>
      <div className='absolute top-[10%] pl-10  text-white h-auto '>
        <h2 className='md:text-6xl text-lg font-bold font-mono  font-stretch-extra-expanded tracking-wide  uppercase'> <ScrambledText>About Us</ScrambledText></h2>
        <ScrambledText
          className="font-mono  font-stretch-extra-expanded tracking-wide text-sm md:text-2xl pt-4 pl-4"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          home/About-us
        </ScrambledText>
      </div>

      {/* <div>
        <img src="./about1.png" alt="" />
      </div> */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* About label */}
            <div className="flex items-center gap-3 mb-6 group">
              <span className="h-[2px] w-10 bg-orange-500 transition-all duration-300 group-hover:w-14" />
              <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight transition-colors duration-300 hover:text-gray-800">
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide  "
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Modern & Trusted
              </ScrambledText>
              <br />
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide  "
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Logistics Company
              </ScrambledText>
            </h2>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide text-gray-700 leading-relaxed transition-colors duration-300 hover:text-gray-900 "
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is
                there anyone who loves.
              </ScrambledText>

              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide text-gray-500 leading-relaxed transition-colors duration-300 hover:text-gray-700"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis quasi architecto beatae.
              </ScrambledText>

            {/* Decorative divider */}
            <div className="h-[1px] w-full bg-gradient-to-r from-orange-400/40 to-transparent" />
          </motion.div>

        </div>
      </section>

      <hr className='w-full h-1/12 border-t-4 border-t-gray-200' />
      <section className="bg-white py-24 px-6 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide "
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Our Mission
              </ScrambledText>
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide  "
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum
                labore et dolore magna aliqua ad minim veniam, nostrud quis cing
                eiusmod tempor elementum ut labore.
              </ScrambledText>
              <br />
              lorm ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore
            </p>

            <button className="group flex items-center gap-2 text-sm font-medium text-gray-900">
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
              <span className="relative">
                MORE DETAILS
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-900 transition-all group-hover:w-full" />
              </span>
            </button>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">

              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide "
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum
                labore et dolore magna aliqua ad minim veniam, nostrud quis cing
                eiusmod tempor elementum ut labore.
              </ScrambledText>
              <br />
              lorm ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore
            </p>

            <button className="group flex items-center gap-2 text-sm font-medium text-gray-900">
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
              <span className="relative">
                MORE DETAILS
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-900 transition-all group-hover:w-full" />
              </span>
            </button>
          </motion.div>

          {/* Services Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-gray-50 p-10 rounded-xl shadow-lg border border-gray-100"
          >
            <p className="text-gray-500 text-sm mb-2">
              Professional Services
            </p>

            <h3 className="text-3xl font-semibold text-gray-900 mb-8">
              24 Hours Support
            </h3>

            <ul className="space-y-4">
              {[
                "Magna risus veh augue",
                "Facilisis magna risus",
                "Dolor sit ametconse ctetur",
                "Ametconse ctetur adipis",
                "Facilisis magna risus",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-md bg-black text-white text-xs">
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>
      <hr className='w-full h-1/12 border-t-4 border-t-gray-200' />

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            {/* <img
            src="./image-left-1.jpg"
            alt="Company leadership"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          /> 
       */}
            <PixelTransition
              firstContent={
                <img
                  src="./image-left-1.jpg"
                  alt="default pixel transition content, a cat!"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 "
                />
              }

            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 relative inline-block group">
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide  pt-4 pl-4"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Our company core values
              </ScrambledText>
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </h2>


            <ScrambledText
              className=" font-stretch-extra-expanded tracking-wide  pt-4 pl-4 text-gray-600 text-sm md:text-lg leading-relaxed mb-6 transition-colors hover:text-gray-900"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Sit amet adipisicing eiusmod tempor elementum ut labore et dolore
              magna aliqua ad minim veniam, quis nostrud exercitation.
            </ScrambledText>


            <ScrambledText
              className="  font-stretch-extra-expanded tracking-wide text-sm md:text-lg pt-4 pl-4 text-gray-500 leading-relaxed mb-10 transition-colors hover:text-gray-800"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut
              labore et dolore magna aliqua ad minim veniam, quis nostrud
              exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod tempor
              elementum ut labore et dolore.
            </ScrambledText>

            {/* Signature Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-between max-w-md"
            >
              <div>
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">
                  Chief Executive Officer
                </p>
              </div>

              <motion.img
                src="./signature.jpg"
                alt="CEO Signature"
                className="h-12 object-contain"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <hr className='w-full h-1/12 border-t-4 border-t-gray-200' />

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
      <hr className='w-full h-1/12 border-t-4 border-t-gray-200' />

      <div className='text-center mt-20 mb-10'>
        <h1 className='font-mono text-4xl text-yellow-400 mb-5'>Professional Team</h1>
        <p className='font-mono text-2xl '>Meet our dedicated team</p>
      </div>

      <AnimatedTestimonials testimonials={testimonials} />
      <hr className='w-full h-1/12 border-t-4 border-t-gray-200' />

      <section className="bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug mb-6 group">
              <span className="transition-colors duration-300 group-hover:text-orange-500">
                <ScrambledText
                  className="font-mono  font-stretch-extra-expanded tracking-wide  pt-4 pl-4"
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  Safe and on time delivery of your goods
                </ScrambledText>
              </span>
              <br />
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide  pt-4 pl-4"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                dolor sit amet
              </ScrambledText>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6 transition-colors hover:text-gray-900">
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide  pt-4 pl-4"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                Sit amet adipisicing eiusmod tempor elementum ut labore et dolore
                magna aliqua ad minim veniam, quis nostrud exercitation.
              </ScrambledText>
            </p>

            <p className="text-gray-500 leading-relaxed mb-10 transition-colors hover:text-gray-800">
              <ScrambledText
                className="font-mono  font-stretch-extra-expanded tracking-wide  pt-4 pl-4"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >

                Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut
                labore et dolore magna aliqua ad minim veniam, quis nostrud
                exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod tempor
                elementum ut labore et dolore.
              </ScrambledText>
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden bg-orange-400 text-white font-medium px-7 py-3 rounded-md shadow-md hover:bg-orange-500 transition-all"
            >
              <span className="relative z-10">GET A QUOTE</span>
              <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity" />
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-100 rounded-xl blur-2xl opacity-30" />

            <PixelTransition
              firstContent={
                <img
                  src="./image-left-5.jpg"
                  alt="Business meeting"
                  className="relative w-full rounded-xl shadow-xl object-cover transition-transform duration-700 hover:scale-105"
                />
              } />
          </motion.div>

        </div>
      </section>
      <hr className='w-full h-1/12 border-t-4 border-t-gray-200' />

      <Footer />
    </>
  )
}

export default Page

import React, { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-7ak7cbvfen";
import imgFrame3 from "./acc7fb9b3103855916ccdd0a0c2811b134dc3be4.png";
import imgFrame5 from "./25cf88079ff885af26ffe975aa7a0af973bc1ddf.png";
import imgFrame19 from "./b4c012a5800226e173f5cb4e1dcd4aa797aeb95c.png";
import imgFrame20 from "./b2ed196d299d6ca36af29e07f46bf053e9b1389e.png";
import imgFrame21 from "./05f7409dbefb45978bac1ee869b55bca7c3f7ef5.png";
import imgFrame22 from "./95921576a19eaa8ad4fdf6ca4d19b04295134127.png";
import imgFrame23 from "./0fb01b73aa61f3afc962e025c268a30c2479478a.png";
import imgFrame6 from "./bf85ce4d61f035983577e06b947263bf9680d310.png";
import imgFrame7 from "./6901bcf7f0867784d263d0cda8b666d137fbeaba.png";
import imgFrame8 from "./80d70411b91062ea6bd0759de58f1e807eaa4251.png";
import imgFrame33 from "./9d3e7c3693f6007709afcf8cf4b622db12a3ab44.png";
import imgAreas from "./8fd18d26ce2cf7c41459f9f71d7faa1b26bd5e0f.png";

const BOOKING_LINK = "https://cal.com/mahe-bandara-dvwcve";

// --- Custom Hook for Scroll Reveal ---
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// --- Service Card Wrapper (Stacked Logic for both Desktop & Mobile) ---
function ServiceCardWrapper({ children, index }) {
  const containerRef = useRef(null);
  const [transformStyles, setTransformStyles] = useState({ scale: 1, opacity: 1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const stickyTop = window.innerWidth < 768 ? 60 : 80; // Mobile වලදී මීට වඩා අඩු ඉඩක් උඩින් තියෙනවා

      if (rect.top <= stickyTop) {
        const scrolledPastTop = Math.abs(rect.top - stickyTop);
        const scrollRange = 400;
        const newScale = Math.max(0.9, 1 - (scrolledPastTop / (scrollRange * 10)));
        const newOpacity = Math.max(0.8, 1 - (scrolledPastTop / (scrollRange * 5)));
        setTransformStyles({ scale: newScale, opacity: newOpacity });
      } else {
        setTransformStyles({ scale: 1, opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="sticky w-full mb-12 lg:mb-[25vh]"
      style={{
        top: `${window.innerWidth < 768 ? 60 + index * 20 : 80 + index * 32}px`,
        zIndex: index + 1,
        transition: "transform 0.1s linear, opacity 0.1s linear"
      }}
    >
      <div 
        className="bg-[#fdfdfd] flex flex-col lg:flex-row overflow-hidden rounded-[20px] lg:rounded-[24px] shadow-xl border border-black/5"
        style={{
          transform: `scale(${transformStyles.scale})`,
          opacity: transformStyles.opacity,
          transformOrigin: "top center"
        }}
      >
        {children}
      </div>
    </div>
  );
}

// --- Header/Nav ---
function Frame1() {
  return (
    <nav className="bg-[#1e1e1e] w-[92%] lg:w-full max-w-[1280px] mx-auto flex items-center justify-between p-2 lg:p-3 relative rounded-[50px] shadow-lg">
      <div className="relative rounded-full shrink-0 size-10 lg:size-[50px]">
        <img alt="logo" className="absolute inset-0 object-cover rounded-full size-full" src={imgFrame3} />
      </div>
      <div className="hidden md:flex font-normal gap-[25px] items-center leading-[1.5] text-white text-[16px] lg:text-[18px]">
        <p className="cursor-pointer hover:text-gray-300">Home</p>
        <p className="cursor-pointer hover:text-gray-300">Services</p>
        <p className="cursor-pointer hover:text-gray-300">Reviews</p>
        <p className="cursor-pointer hover:text-gray-300">Service Areas</p>
      </div>
      <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#f4f4f4] hover:bg-white px-5 lg:px-8 py-2 lg:py-3 rounded-[50px] text-[#1e1e1e] text-sm lg:text-[16px] font-semibold">
        Book Now
      </a>
    </nav>
  );
}

// --- Hero Section ---
function Hero() {
  return (
    <section className="bg-white relative w-full pt-4 lg:pt-[32px]">
      <div className="flex flex-col items-center w-full">
        <Frame1 />
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[24px] items-center py-12 lg:py-[80px] px-6 w-full max-w-[1280px]">
          <div className="flex flex-col gap-[24px] items-center lg:items-start text-center lg:text-left w-full lg:w-[628px]">
            <div className="bg-[#e1dedd] px-4 py-2 rounded-[50px]">
              <p className="text-[#9e9491] text-[10px] lg:text-[14px] tracking-[1.2px] uppercase font-bold">Professional cleaning service in Southern Utah</p>
            </div>
            <h1 className="font-bold leading-[1.1] text-[#1e1e1e] text-4xl lg:text-[72px] tracking-tight">
              Luxury Housekeeping & Airbnb Turnovers
            </h1>
            <p className="text-[#5b5b5b] text-lg lg:text-[24px]">
              5 star rated cleaning for luxury homes and vacation rentals in Southern Utah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href={`${BOOKING_LINK}/cleaning`} className="bg-[#1e1e1e] text-white px-8 py-4 rounded-full text-center">Book a Cleaning</a>
              <button className="bg-[#f4f4f4] border border-[#1e1e1e] px-8 py-4 rounded-full">Get a Free Quote</button>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 aspect-square max-w-[500px] lg:max-w-[620px]">
            <div className="absolute inset-0 bg-[#9e9491] translate-x-3 translate-y-3 rounded-2xl" />
            <img alt="Hero" className="relative w-full h-full object-cover rounded-2xl border border-black/5 shadow-lg" src={imgFrame5} />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Services ---
function CheckListItem({ text }) {
  return (
    <div className="flex gap-3 items-center w-full">
      <svg className="size-5 shrink-0" fill="none" viewBox="0 0 32 32">
        <path d="M11.5 16.5L14.25 19.25L20.5 13" stroke="#9E9491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="12" stroke="#9E9491" strokeWidth="2" />
      </svg>
      <p className="text-[#5b5b5b] text-sm lg:text-[16px] font-medium">{text}</p>
    </div>
  );
}

function Services() {
  const data = [
    { title: "Luxury Housekeeping", desc: "Routine housekeeping for luxury homes.", img: imgFrame19, link: "luxury-housekeeping", checks: ["Weekly cleaning", "Biweekly cleaning", "Monthly cleaning"] },
    { title: "Airbnb Turnovers", desc: "Reliable vacation rental cleaning.", img: imgFrame20, link: "airbnb-turnovers", checks: ["Same day turnovers", "Linen replacement", "Restocking"] },
    { title: "Move In / Out Cleans", desc: "Detailed transition cleaning.", img: imgFrame21, link: "move-in-move-out-cleans", checks: ["Deep reset cleans", "Appliance wipe downs", "Floor cleaning"] }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1280px] mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">Professional Cleaning Services</h2>
        <p className="text-[#5b5b5b]">Tailored solutions for every cleaning need</p>
      </div>
      <div className="max-w-[1000px] mx-auto">
        {data.map((s, i) => (
          <ServiceCardWrapper key={i} index={i}>
            <div className="w-full lg:w-1/2 h-64 lg:h-auto">
              <img src={s.img} className="w-full h-full object-cover" alt={s.title} />
            </div>
            <div className="p-6 lg:p-12 flex flex-col gap-6 lg:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-bold">{s.title}</h3>
              <p className="text-sm lg:text-base text-[#5b5b5b]">{s.desc}</p>
              <div className="flex flex-col gap-3">
                {s.checks.map((c, j) => <CheckListItem key={j} text={c} />)}
              </div>
              <a href={`${BOOKING_LINK}/${s.link}`} className="bg-[#1e1e1e] text-white py-3 rounded-full text-center font-semibold mt-4">Book a Cleaning</a>
            </div>
          </ServiceCardWrapper>
        ))}
      </div>
    </section>
  );
}

// --- Airbnb Section ---
function Airbnb() {
  return (
    <section className="bg-[#f5f4f4] py-16 px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
          <img src={imgFrame6} className="w-full sm:w-1/2 h-[300px] lg:h-[400px] object-cover rounded-2xl" alt="Airbnb 1" />
          <div className="flex flex-col gap-4 w-full sm:w-1/2">
            <img src={imgFrame7} className="h-40 lg:h-[192px] object-cover rounded-2xl" alt="Airbnb 2" />
            <img src={imgFrame8} className="flex-1 h-40 lg:h-auto object-cover rounded-2xl" alt="Airbnb 3" />
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Airbnb Hosts: We Handle the Turnovers</h2>
          <p className="text-[#5b5b5b] mb-8 lg:text-lg">Managing a vacation rental takes time. Cleaning should not add more stress.</p>
          <a href={BOOKING_LINK} className="bg-[#1e1e1e] text-white px-8 py-4 rounded-full font-bold inline-block">Book a Cleaning</a>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white/50 py-16 px-8 text-center lg:text-left">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div>
          <img src={imgFrame3} className="size-12 rounded-full mb-6 mx-auto lg:mx-0 border border-white/10" alt="Logo" />
          <p className="text-sm leading-relaxed">Luxury housekeeping and Airbnb turnover services in Southern Utah.</p>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3 text-sm">
            <p className="hover:text-white cursor-pointer">Home</p>
            <p className="hover:text-white cursor-pointer">Services</p>
            <p className="hover:text-white cursor-pointer">Reviews</p>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Working Hours</h4>
          <p className="text-sm">Mon - Fri: 8AM - 6PM</p>
          <p className="text-sm">Sat: 8AM - 3PM</p>
          <p className="text-sm text-red-400">Sun: Closed</p>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
          <p className="text-sm">📍 Cedar City, UT, US</p>
          <p className="text-sm">✉️ southernutahhousekeeping@gmail.com</p>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto border-t border-white/10 mt-16 pt-8 text-center text-[10px]">
        <p>© 2026 Southern Utah Housekeeping. Website Designed by maheux.me</p>
      </div>
    </footer>
  );
}

// --- Main Layout ---
export default function SouthernUtahHousekeeping() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
      <Hero />
      <Services />
      <Airbnb />
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12">See The Difference</h2>
        <div className="max-w-[1280px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <img src={imgFrame33} className="w-full" alt="Before After" />
        </div>
      </section>
      <Footer />
    </main>
  );
}

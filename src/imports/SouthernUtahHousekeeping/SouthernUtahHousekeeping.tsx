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

// --- Shared Section Wrapper (To ensure uniform width and padding) ---
function SectionLayout({ children, className = "", id = "" }) {
  return (
    <section id={id} className={`w-full flex justify-center ${className}`}>
      <div className="w-full max-w-[1280px] px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}

// --- Service Card Wrapper with Stacking & Scaling Logic ---
function ServiceCardWrapper({ children, index }) {
  const containerRef = useRef(null);
  const [transformStyles, setTransformStyles] = useState({ scale: 1, opacity: 1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const stickyTop = isMobile ? 20 : 80;

      if (rect.top <= stickyTop) {
        const scrolledPastTop = Math.abs(rect.top - stickyTop);
        const scrollRange = 400;
        const scaleLimit = isMobile ? 0.96 : 0.9; 
        const newScale = Math.max(scaleLimit, 1 - (scrolledPastTop / (scrollRange * 10)));
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
      className="sticky w-full mb-40 lg:mb-[25vh]" 
      style={{
        top: `${window.innerWidth < 768 ? 20 + index * 15 : 80 + index * 32}px`,
        zIndex: index + 1,
        transition: "transform 0.1s linear, opacity 0.1s linear"
      }}
    >
      <div 
        className="bg-[#fdfdfd] flex flex-col lg:flex-row overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5"
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

// --- Icons & UI Elements ---
function CheckListItem({ text }) {
  return (
    <div className="flex gap-[12px] items-center w-full">
      <div className="relative shrink-0 size-[20px] lg:size-[24px]">
        <svg className="block size-full" fill="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="12" stroke="#9E9491" strokeWidth="2" />
          <path d="M11.5 16.5L14.25 19.25L20.5 13" stroke="#9E9491" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
      <p className="font-medium text-[#5b5b5b] text-[14px] lg:text-[16px]">{text}</p>
    </div>
  );
}

// --- Page Sections ---
function Hero() {
  return (
    <SectionLayout className="bg-white pt-4 lg:pt-[32px]">
      <nav className="bg-[#1e1e1e] w-full flex items-center justify-between p-2 lg:p-3 rounded-full shadow-lg mb-10">
        <img src={imgFrame3} className="size-10 lg:size-[50px] rounded-full" alt="logo" />
        <div className="hidden md:flex gap-8 text-white text-sm lg:text-base font-medium">
          <p className="cursor-pointer hover:text-gray-300 transition-colors">Home</p>
          <p className="cursor-pointer hover:text-gray-300 transition-colors">Services</p>
          <p className="cursor-pointer hover:text-gray-300 transition-colors">Reviews</p>
          <p className="cursor-pointer hover:text-gray-300 transition-colors">Service Areas</p>
        </div>
        <a href={BOOKING_LINK} className="bg-white text-black px-6 py-2 rounded-full text-xs lg:text-sm font-bold uppercase">Book Now</a>
      </nav>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px] items-center py-10 lg:py-[80px]">
        <div className="flex flex-col gap-[24px] items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          <div className="bg-[#e1dedd] px-4 py-2 rounded-[50px]">
            <p className="text-[#9e9491] text-[10px] lg:text-[14px] tracking-[1.2px] uppercase font-bold">Professional cleaning service in Southern Utah</p>
          </div>
          <h1 className="font-bold leading-[1.1] text-[#1e1e1e] text-4xl lg:text-[72px] tracking-tight">Luxury Housekeeping & Airbnb Turnovers</h1>
          <p className="text-[#5b5b5b] text-lg lg:text-[24px] max-w-[500px]">5 star rated cleaning for luxury homes and vacation rentals in Southern Utah</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={`${BOOKING_LINK}/cleaning`} className="bg-[#1e1e1e] text-white px-8 py-4 rounded-full font-bold shadow-lg text-center">Book a Cleaning</a>
            <button className="bg-[#f4f4f4] border border-[#1e1e1e] px-8 py-4 rounded-full font-bold">Get a Free Quote</button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 aspect-square max-w-[500px] lg:max-w-none">
          <div className="absolute inset-0 bg-[#9e9491] translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 rounded-2xl" />
          <img src={imgFrame5} className="relative w-full h-full object-cover rounded-2xl border border-black/5 shadow-xl" alt="hero" />
        </div>
      </div>
    </SectionLayout>
  );
}

function Services() {
  const servicesData = [
    { title: "Luxury Housekeeping", desc: "Routine housekeeping services for luxury and high performance homes.", image: imgFrame19, checks: ["Weekly cleaning", "Biweekly cleaning", "Monthly cleaning", "Kitchen and bathroom sanitizing", "Detailed home refreshes"] },
    { title: "Airbnb Turnovers", desc: "Reliable Airbnb and vacation rental cleaning throughout Southern Utah.", image: imgFrame20, checks: ["Same day turnovers", "Linen replacement", "Restocking essentials", "Guest ready presentation", "Reliable scheduling"] },
    { title: "Move In / Move Out Cleans", desc: "Detailed cleaning services for homes, apartments, and rental properties during transitions.", image: imgFrame21, checks: ["Deep reset cleans", "Appliance wipe downs", "Bathroom sanitizing", "Floor cleaning", "Full property refresh"] },
    { title: "Commercial Cleaning", desc: "Professional maintenance cleaning for offices and commercial spaces.", image: imgFrame22, checks: ["Flexible scheduling", "Routine maintenance", "Sanitized workspaces", "Professional presentation"] },
    { title: "Deep Cleaning", desc: "Seasonal and detailed deep cleaning services designed to refresh your home.", image: imgFrame23, checks: ["Baseboards", "Ceiling fans", "Appliance cleaning", "Detailed kitchens", "Bathroom deep scrubbing"] }
  ];

  return (
    <SectionLayout className="bg-white py-12 lg:py-[100px]">
      <div className="text-center mb-16 lg:mb-24">
        <h2 className="font-semibold text-3xl lg:text-5xl tracking-tight text-[#1e1e1e] mb-4">Professional Cleaning Services</h2>
        <p className="text-lg text-[#5b5b5b]">Tailored solutions for every cleaning need</p>
      </div>
      <div className="w-full">
        {servicesData.map((s, i) => (
          <ServiceCardWrapper key={i} index={i}>
            <div className="w-full lg:w-1/2 h-[240px] lg:h-auto overflow-hidden">
              <img src={s.image} className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" alt={s.title} />
            </div>
            <div className="p-8 lg:p-16 flex flex-col gap-6 lg:w-1/2 justify-center">
              <h3 className="text-2xl lg:text-4xl font-bold tracking-tight">{s.title}</h3>
              <p className="text-sm lg:text-lg text-[#5b5b5b] leading-relaxed">{s.desc}</p>
              <div className="grid grid-cols-1 gap-3">
                {s.checks.map((c, j) => <CheckListItem key={j} text={c} />)}
              </div>
              <a href={BOOKING_LINK} className="bg-[#1e1e1e] text-white py-3 lg:py-4 rounded-full text-center font-bold mt-4 shadow-md lg:w-fit lg:px-12 hover:bg-black transition-colors">Book a Cleaning</a>
            </div>
          </ServiceCardWrapper>
        ))}
      </div>
    </SectionLayout>
  );
}

function Airbnb() {
  return (
    <SectionLayout className="bg-white py-16 lg:py-[120px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[64px] items-center">
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
          <img src={imgFrame6} className="w-full sm:w-1/2 h-[300px] lg:h-[600px] object-cover rounded-[32px]" alt="Airbnb 1" />
          <div className="flex flex-col gap-4 w-full sm:w-1/2">
            <img src={imgFrame7} className="h-48 lg:h-[285px] object-cover rounded-[32px]" alt="Airbnb 2" />
            <img src={imgFrame8} className="flex-1 h-48 lg:h-[285px] object-cover rounded-[32px]" alt="Airbnb 3" />
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1e1e1e] leading-tight">Airbnb Hosts: We Handle the Turnovers</h2>
          <div className="text-[#5b5b5b] flex flex-col gap-4 text-base lg:text-xl leading-relaxed">
            <p>Managing a vacation rental takes time. Cleaning should not add more stress.</p>
            <p>Southern Utah Housekeeping provides reliable Airbnb turnover cleaning services that help keep your property guest ready and professionally maintained.</p>
            <p className="font-bold text-[#1e1e1e] mt-2">Our Airbnb cleaning services include:</p>
            <div className="flex flex-col gap-3 lg:gap-4">
              {["Same day turnover cleans", "Fresh linen replacement", "Restocking essentials", "Reliable scheduling", "Guest ready presentation", "Professional attention to detail"].map((item, i) => (
                <CheckListItem key={i} text={item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href={BOOKING_LINK} className="bg-[#1e1e1e] text-white px-12 py-4 rounded-full font-bold shadow-lg text-center hover:bg-black transition-colors">Book a Cleaning</a>
            <button className="bg-white border border-[#1e1e1e] px-12 py-4 rounded-full font-bold text-center hover:bg-gray-50 transition-colors">Get a Free Quote</button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

function Areas() {
  const locations = ["St. George", "Ivins", "Washington", "Cedar City", "Santa Clara", "Middleton", "Surrounding Southern Utah Areas"];
  return (
    <section className="relative py-24 lg:py-40 px-6 overflow-hidden flex flex-col items-center">
      <img src={imgAreas} className="absolute inset-0 w-full h-full object-cover" alt="Areas" />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 text-center flex flex-col items-center gap-8 max-w-[1000px] w-full">
        <h2 className="text-4xl lg:text-7xl font-bold text-white tracking-tight">Proudly Serving Southern Utah</h2>
        <p className="text-white/95 text-lg lg:text-2xl font-medium">Southern Utah Housekeeping proudly provides cleaning services throughout</p>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-4 w-full">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white/95 backdrop-blur-sm border border-white/20 px-8 py-3 lg:px-10 lg:py-4 rounded-full flex items-center gap-3 shadow-2xl transition-all hover:scale-105">
              <svg className="size-5 lg:size-6 text-[#1e1e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[#1e1e1e] font-bold text-sm lg:text-lg">{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1e1e1e] py-16 lg:py-24 text-white/50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        <div className="flex flex-col gap-6">
          <img src={imgFrame3} className="size-12 lg:size-16 rounded-full border-2 border-white/10 shadow-xl" alt="Logo" />
          <p className="text-sm lg:text-base leading-relaxed">Luxury housekeeping and Airbnb turnover services in Southern Utah.</p>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold uppercase text-[11px] tracking-widest">Quick Links</h4>
          <div className="flex flex-col gap-4 text-sm lg:text-base">
            <p className="hover:text-white cursor-pointer transition-colors">Home</p>
            <p className="hover:text-white cursor-pointer transition-colors">Services</p>
            <p className="hover:text-white cursor-pointer transition-colors">Reviews</p>
            <p className="hover:text-white cursor-pointer transition-colors">Service Areas</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold uppercase text-[11px] tracking-widest">Working Hours</h4>
          <div className="flex flex-col gap-3 text-sm lg:text-base">
            <p className="flex justify-between"><span>Mon - Fri</span><span className="text-white/80">8:00 AM - 6:00 PM</span></p>
            <p className="flex justify-between"><span>Saturday</span><span className="text-white/80">8:00 AM - 3:00 PM</span></p>
            <p className="flex justify-between text-red-400"><span>Sunday</span><span>Closed</span></p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-bold uppercase text-[11px] tracking-widest">Contact Us</h4>
          <div className="flex flex-col gap-4 text-sm lg:text-base">
            <p>📍 Cedar City, UT, US</p>
            <p>✉️ southernutahhousekeeping@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto border-t border-white/10 mt-16 pt-8 px-6 lg:px-12 flex flex-col md:row justify-between items-center text-[11px] gap-4">
        <p>© 2026 Southern Utah Housekeeping. All Rights Reserved.</p>
        <p>Website Designed by maheux.me</p>
      </div>
    </footer>
  );
}

export default function SouthernUtahHousekeeping() {
  return (
    <main className="bg-white min-h-screen font-['Inter',sans-serif] selection:bg-black selection:text-white">
      <Hero />
      <Services />
      <Airbnb />
      <SectionLayout className="bg-white py-16 lg:py-[100px] text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-tight">See The Difference</h2>
        <div className="w-full rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
          <img src={imgFrame33} className="w-full transition-transform hover:scale-[1.02] duration-1000" alt="Difference" />
        </div>
      </SectionLayout>
      <Areas />
      <Footer />
    </main>
  );
}

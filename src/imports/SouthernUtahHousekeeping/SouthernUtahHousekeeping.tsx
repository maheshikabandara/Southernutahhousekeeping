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

// --- Service Card Wrapper (Sticky & Scale Effect) ---
function ServiceCardWrapper({ children, index }) {
  const containerRef = useRef(null);
  const [styles, setStyles] = useState({ scale: 1, opacity: 1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top <= 60) {
        const diff = Math.abs(rect.top - 60);
        const newScale = Math.max(0.92, 1 - diff / 5000);
        const newOpacity = Math.max(0.7, 1 - diff / 1000);
        setStyles({ scale: newScale, opacity: newOpacity });
      } else {
        setStyles({ scale: 1, opacity: 1 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="sticky w-full mb-12 lg:mb-[20vh]"
      style={{
        top: `${60 + index * 20}px`,
        zIndex: index + 1,
        transition: "transform 0.1s linear"
      }}
    >
      <div 
        className="bg-white flex flex-col lg:flex-row overflow-hidden rounded-[24px] shadow-xl border border-black/5"
        style={{
          transform: `scale(${styles.scale})`,
          opacity: styles.opacity,
          transformOrigin: "top center"
        }}
      >
        {children}
      </div>
    </div>
  );
}

// --- Shared Components ---
function CheckListItem({ text }) {
  return (
    <div className="flex gap-3 items-center w-full">
      <svg className="shrink-0 size-5" fill="none" viewBox="0 0 32 32">
        <path d="M11.5 16.5L14.25 19.25L20.5 13" stroke="#9E9491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="12" stroke="#9E9491" strokeWidth="2" />
      </svg>
      <p className="text-[15px] text-[#5b5b5b] font-medium leading-tight">{text}</p>
    </div>
  );
}

// --- Sections ---
function Hero() {
  return (
    <section className="bg-white flex flex-col items-center pt-6 px-6 overflow-hidden">
      <nav className="bg-[#1e1e1e] w-full max-w-[1280px] flex items-center justify-between p-2 rounded-full mb-10 shadow-lg">
        <img src={imgFrame3} className="size-10 rounded-full" alt="logo" />
        <a href={BOOKING_LINK} className="bg-white text-[#1e1e1e] px-5 py-2 rounded-full text-sm font-semibold">Book Now</a>
      </nav>

      <div className="flex flex-col items-center text-center max-w-[600px] mb-10">
        <div className="bg-[#e1dedd] px-4 py-1 rounded-full mb-6">
          <p className="text-[10px] text-[#9e9491] tracking-widest uppercase font-bold">Professional cleaning service in Southern Utah</p>
        </div>
        <h1 className="text-4xl font-bold text-[#1e1e1e] leading-[1.1] mb-6">Luxury Housekeeping & Airbnb Turnovers</h1>
        <p className="text-lg text-[#5b5b5b] mb-8">5 star rated cleaning for luxury homes and vacation rentals in Southern Utah</p>
        <div className="flex flex-col w-full gap-3">
          <a href={BOOKING_LINK} className="bg-[#1e1e1e] text-white py-4 rounded-full font-bold shadow-lg">Book a Cleaning</a>
          <button className="bg-[#f4f4f4] border border-[#1e1e1e] py-4 rounded-full font-bold">Get a Free Quote</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 w-full max-w-[500px] py-10 border-t border-gray-100">
        <div className="flex flex-col items-center text-center gap-2">
          <span className="text-2xl">☆</span>
          <h3 className="font-bold text-lg">5 Star Rated</h3>
          <p className="text-sm text-[#5b5b5b]">Trusted for reliable, detail focused cleaning services across Southern Utah.</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="text-2xl">A</span>
          <h3 className="font-bold text-lg">Same Day Airbnb Turnovers</h3>
          <p className="text-sm text-[#5b5b5b]">Fast, dependable cleans that keep rentals guest ready.</p>
        </div>
      </div>

      <div className="relative w-full max-w-[500px] aspect-square mb-12">
        <div className="absolute inset-0 bg-[#9e9491] translate-x-3 translate-y-3 rounded-2xl" />
        <img src={imgFrame5} className="relative w-full h-full object-cover rounded-2xl border border-black/5" alt="hero" />
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { 
      title: "Luxury Housekeeping", 
      desc: "Routine housekeeping services for luxury and high performance homes.", 
      img: imgFrame19, 
      checks: ["Weekly cleaning", "Biweekly cleaning", "Monthly cleaning", "Kitchen and bathroom sanitizing", "Detailed home refreshes"] 
    },
    { 
      title: "Airbnb Turnovers", 
      desc: "Reliable Airbnb and vacation rental cleaning throughout Southern Utah.", 
      img: imgFrame20, 
      checks: ["Same day turnovers", "Linen replacement", "Restocking essentials", "Guest ready presentation", "Reliable scheduling"] 
    },
    { 
      title: "Move In / Move Out Cleans", 
      desc: "Detailed cleaning services for homes, apartments, and rental properties during transitions.", 
      img: imgFrame21, 
      checks: ["Deep reset cleans", "Appliance wipe downs", "Bathroom sanitizing", "Floor cleaning", "Full property refresh"] 
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Professional Cleaning Services</h2>
        <p className="text-[#5b5b5b]">Tailored solutions for every cleaning need</p>
      </div>
      <div className="max-w-[500px] mx-auto">
        {services.map((s, i) => (
          <ServiceCardWrapper key={i} index={i}>
            <img src={s.img} className="w-full h-64 object-cover" alt={s.title} />
            <div className="p-8 flex flex-col gap-6">
              <h3 className="text-2xl font-bold leading-tight">{s.title}</h3>
              <p className="text-sm text-[#5b5b5b]">{s.desc}</p>
              <div className="flex flex-col gap-3">
                {s.checks.map((c, j) => <CheckListItem key={j} text={c} />)}
              </div>
              <a href={BOOKING_LINK} className="bg-[#1e1e1e] text-white py-3 rounded-full text-center font-bold mt-4 shadow-md">Book a Cleaning</a>
            </div>
          </ServiceCardWrapper>
        ))}
      </div>
    </section>
  );
}

function AirbnbHost() {
  return (
    <section className="bg-[#f5f4f4] py-16 px-6">
      <div className="max-w-[500px] mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <img src={imgFrame6} className="w-full h-80 object-cover rounded-2xl" alt="airbnb1" />
          <div className="grid grid-cols-2 gap-4">
            <img src={imgFrame7} className="w-full h-40 object-cover rounded-2xl" alt="airbnb2" />
            <img src={imgFrame8} className="w-full h-40 object-cover rounded-2xl" alt="airbnb3" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-6">Airbnb Hosts: We Handle the Turnovers</h2>
        <div className="text-[#5b5b5b] text-base leading-relaxed mb-8 flex flex-col gap-4">
          <p>Managing a vacation rental takes time. Cleaning should not add more stress.</p>
          <p>Southern Utah Housekeeping provides reliable Airbnb turnover cleaning services.</p>
          <div className="flex flex-col gap-3 mt-4">
            {["Same day turnover cleans", "Fresh linen replacement", "Restocking essentials", "Reliable scheduling", "Guest ready presentation"].map((item, i) => (
              <div key={i} className="flex gap-3 items-center">
                <span className="size-2 bg-[#9e9491] rounded-full" />
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <a href={BOOKING_LINK} className="bg-[#1e1e1e] text-white py-4 rounded-full font-bold block text-center shadow-lg">Book a Cleaning</a>
      </div>
    </section>
  );
}

function Areas() {
  const cities = ["St. George", "Washington", "Santa Clara", "Ivins", "Cedar City", "Middleton"];
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <img src={imgAreas} className="absolute inset-0 w-full h-full object-cover" alt="areas" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center text-white max-w-[500px] mx-auto">
        <h2 className="text-4xl font-bold mb-6">Proudly Serving Southern Utah</h2>
        <p className="text-gray-300 mb-10">Southern Utah Housekeeping proudly provides cleaning services throughout:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city, i) => (
            <span key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-sm font-medium">{city}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1e1e1e] py-16 px-8 text-white/50 text-center">
      <img src={imgFrame3} className="size-12 rounded-full mx-auto mb-8 border border-white/10" alt="logo" />
      <p className="text-sm mb-12 max-w-xs mx-auto leading-relaxed">Luxury housekeeping and Airbnb turnover services in Southern Utah.</p>
      <div className="flex flex-col gap-10 mb-16">
        <div>
          <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6">Quick Links</h4>
          <div className="flex flex-col gap-4 text-sm">
            <p>Home</p><p>Services</p><p>Reviews</p>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6">Working Hours</h4>
          <div className="flex flex-col gap-2 text-xs">
            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 8:00 AM - 3:00 PM</p>
            <p className="text-red-400">Sunday: Closed</p>
          </div>
        </div>
      </div>
      <p className="text-[10px] border-t border-white/10 pt-8">© 2026 Southern Utah Housekeeping. Designed by maheux.me</p>
    </footer>
  );
}

export default function SouthernUtahHousekeeping() {
  return (
    <main className="bg-white font-sans antialiased">
      <Hero />
      <Services />
      <AirbnbHost />
      <Areas />
      <Footer />
    </main>
  );
}

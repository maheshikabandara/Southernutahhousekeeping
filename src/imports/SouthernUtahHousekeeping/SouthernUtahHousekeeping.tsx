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

// --- Custom Hook for Scroll Animations ---
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

// --- Service Card Wrapper with Stacking & Scaling Logic ---
function ServiceCardWrapper({ children, index }) {
  const containerRef = useRef(null);
  const [transformStyles, setTransformStyles] = useState({ scale: 1, opacity: 1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // වීඩියෝ එකේ වගේ card එක sticky උඩටම ආවම scale down වෙන්න ඕන.
      // Card එක top එකට ළඟා වෙලා තවදුරටත් scroll වෙද්දී scale එක අඩු කරනවා.
      if (rect.top <= 80) { // 80px is our sticky top
        const scrolledPastTop = Math.abs(rect.top - 80);
        const scrollRange = 400; // කොච්චර scroll වෙද්දීද scale එක වෙන්න ඕන කියන එක
        
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
      className="sticky w-full mb-[15vh] lg:mb-[25vh]" // Space to allow background card to be seen
      style={{
        top: `${80 + index * 32}px`, // Stacking offset
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

// --- Navigation Components ---
function Frame2() {
  return (
    <div className="relative rounded-full shrink-0 size-[50px]">
      <img alt="" className="absolute inset-0 object-cover pointer-events-none rounded-full size-full" src={imgFrame3} />
    </div>
  );
}

function Frame() {
  return (
    <div className="hidden md:flex font-normal gap-[25px] items-center leading-[1.5] relative shrink-0 text-[18px] text-white tracking-[0.09px]">
      <p className="relative shrink-0 cursor-pointer hover:text-gray-300 transition-colors">Home</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-300 transition-colors">Services</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-300 transition-colors">Reviews</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-300 transition-colors">Service Areas</p>
    </div>
  );
}

function Frame1() {
  return (
    <nav className="bg-[#1e1e1e] w-full max-w-[1280px] mx-auto flex items-center justify-between p-3 relative rounded-[50px] shadow-lg">
      <Frame2 />
      <Frame />
      <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#f4f4f4] cursor-pointer hover:bg-gray-200 transition-colors flex gap-[10px] items-center justify-center px-[32px] py-[12px] relative rounded-[50px] shrink-0">
        <p className="font-normal leading-[1.5] relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[0.08px]">Book Now</p>
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-white relative w-full pt-4 lg:pt-[32px]">
      <div className="flex flex-col items-center overflow-hidden w-full">
        <Frame1 />
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[24px] items-center py-12 lg:py-[80px] px-6 w-full max-w-[1280px]">
          <div className="flex flex-col gap-[24px] items-start relative w-full lg:w-[628px]">
            <div className="bg-[#e1dedd] flex items-center justify-center px-4 py-2 relative rounded-[50px]">
              <p className="font-normal leading-[16px] relative text-[#9e9491] text-[12px] md:text-[14px] tracking-[1.2px] uppercase">Professional cleaning service in Southern Utah</p>
            </div>
            <h1 className="font-bold leading-[1.1] relative text-[#1e1e1e] text-4xl md:text-5xl lg:text-[72px] tracking-tight text-balance">
              Luxury Housekeeping & Airbnb Turnovers
            </h1>
            <p className="font-normal leading-[1.3] relative text-[#5b5b5b] text-lg md:text-[24px] text-balance">
              5 star rated cleaning for luxury homes and vacation rentals in Southern Utah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-[24px] items-start w-full sm:w-auto">
              <a href={`${BOOKING_LINK}/cleaning`} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] hover:bg-black transition-colors px-[32px] py-[12px] rounded-[50px] text-[#fdfdfd] text-center w-full sm:w-auto">Book a Cleaning</a>
              <button className="bg-[#f4f4f4] border border-[#1e1e1e] hover:bg-gray-200 transition-colors px-[32px] py-[12px] rounded-[50px] text-[#1e1e1e] w-full sm:w-auto">Get a Free Quote</button>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 aspect-square max-w-[620px]">
            <div className="absolute inset-0 bg-[#9e9491] translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 rounded-[20px]" />
            <div className="relative w-full h-full rounded-[20px] overflow-hidden border border-black/5">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFrame5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Services Components ---
function CheckListItem({ text }) {
  return (
    <div className="flex gap-[12px] items-center relative w-full">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" viewBox="0 0 32 32">
          <path d="M11.5 16.5L14.25 19.25L20.5 13" stroke="#9E9491" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p157b3400} stroke="#9E9491" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(4,4)" />
        </svg>
      </div>
      <p className="font-medium leading-[1.5] text-[#5b5b5b] text-[16px] tracking-[0.08px]">{text}</p>
    </div>
  );
}

function ServiceCard({ image, title, desc, checks, linkSuffix }) {
  return (
    <>
      <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[480px]">
        <img alt="" className="absolute inset-0 size-full object-cover" src={image} />
      </div>
      <div className="flex flex-col gap-6 lg:gap-[24px] items-start relative w-full lg:w-1/2 p-6 lg:p-12 bg-[#fdfdfd]">
        <div className="flex flex-col gap-4 items-start w-full">
          <h3 className="font-semibold leading-[1.3] text-[#1e1e1e] text-2xl lg:text-[32px] tracking-tight">{title}</h3>
          <p className="font-medium leading-[1.5] text-[#5b5b5b] text-[16px]">{desc}</p>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full">
          {checks.map((check, i) => <CheckListItem key={i} text={check} />)}
        </div>
        <a href={`${BOOKING_LINK}/${linkSuffix}`} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] hover:bg-black transition-colors px-[32px] py-[10px] mt-4 rounded-[50px] text-[#fdfdfd] text-[14px] font-medium shadow-md">Book a Cleaning</a>
      </div>
    </>
  );
}

function Services() {
  const servicesData = [
    {
      title: "Luxury Housekeeping",
      desc: "Routine housekeeping services for luxury and high performance homes.",
      image: imgFrame19,
      linkSuffix: "luxury-housekeeping",
      checks: ["Weekly cleaning", "Biweekly cleaning", "Monthly cleaning", "Kitchen and bathroom sanitizing", "Detailed home refreshes"]
    },
    {
      title: "Airbnb Turnovers",
      desc: "Reliable Airbnb and vacation rental cleaning throughout Southern Utah.",
      image: imgFrame20,
      linkSuffix: "airbnb-turnovers",
      checks: ["Same day turnovers", "Linen replacement", "Restocking essentials", "Guest ready presentation", "Reliable scheduling"]
    },
    {
      title: "Move In / Move Out Cleans",
      desc: "Detailed cleaning services for homes, apartments, and rental properties.",
      image: imgFrame21,
      linkSuffix: "move-in-move-out-cleans",
      checks: ["Deep reset cleans", "Appliance wipe downs", "Bathroom sanitizing", "Floor cleaning", "Full property refresh"]
    },
    {
      title: "Commercial Cleaning",
      desc: "Professional maintenance cleaning for offices and commercial spaces.",
      image: imgFrame22,
      linkSuffix: "commercial-cleaning",
      checks: ["Flexible scheduling", "Routine maintenance", "Sanitized workspaces", "Professional presentation"]
    },
    {
      title: "Deep Cleaning",
      desc: "Seasonal and detailed deep cleaning services designed to refresh your home.",
      image: imgFrame23,
      linkSuffix: "deep-cleaning",
      checks: ["Baseboards", "Ceiling fans", "Appliance cleaning", "Detailed kitchens", "Bathroom deep scrubbing"]
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-[100px] px-6">
      <div className="flex flex-col gap-12 lg:gap-[60px] items-center max-w-[1280px] mx-auto">
        <div className="text-center max-w-[800px]">
          <h2 className="font-semibold text-3xl md:text-5xl tracking-tight text-[#1e1e1e] mb-4">Professional Cleaning Services</h2>
          <p className="text-lg text-[#5b5b5b]">Tailored solutions for every cleaning need</p>
        </div>
        
        <div className="w-full relative">
          {servicesData.map((service, index) => (
            <ServiceCardWrapper key={index} index={index}>
              <ServiceCard {...service} />
            </ServiceCardWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Other Sections ---
function Airbnb() {
  return (
    <section className="bg-[#f5f4f4] py-12 lg:py-[100px] px-6">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px] items-center max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
          <img alt="" className="rounded-[20px] w-full sm:w-1/2 object-cover h-[400px]" src={imgFrame6} />
          <div className="flex flex-col gap-4 w-full sm:w-1/2">
            <img alt="" className="rounded-[20px] h-[192px] object-cover" src={imgFrame7} />
            <img alt="" className="rounded-[20px] flex-1 object-cover min-h-[192px]" src={imgFrame8} />
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-start lg:w-1/2">
          <h2 className="font-semibold text-3xl md:text-5xl tracking-tight text-[#1e1e1e]">Airbnb Hosts: We Handle the Turnovers</h2>
          <div className="flex flex-col gap-[16px] text-[#5b5b5b] text-[16px] md:text-[18px]">
            <p>Managing a vacation rental takes time. Cleaning should not add more stress.</p>
            <div className="flex flex-col gap-3">
              {["Same day turnover cleans", "Fresh linen replacement", "Restocking essentials", "Reliable scheduling"].map((text, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="size-5 bg-[#9e9491] rounded-full flex items-center justify-center">
                    <div className="size-2 bg-white rounded-full" />
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <a href={`${BOOKING_LINK}/airbnb-turnovers`} className="bg-[#1e1e1e] text-white px-8 py-3 rounded-full hover:bg-black transition-all">Book a Cleaning</a>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="bg-white py-12 lg:py-[100px] px-6">
      <div className="max-w-[1280px] mx-auto text-center mb-12">
        <h2 className="font-semibold text-3xl md:text-5xl tracking-tight mb-4">See The Difference</h2>
        <p className="text-[#5b5b5b]">From vacation rentals to luxury homes, we transform spaces.</p>
      </div>
      <div className="max-w-[1280px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
        <img alt="" className="w-full h-auto" src={imgFrame33} />
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-[#f5f4f4] py-12 lg:py-[100px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center font-semibold text-3xl md:text-5xl mb-12">What Clients Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { loc: "St. George", type: "Airbnb Host", text: "The turnovers are always on time, the property looks incredible, and our guests constantly mention how clean everything feels." },
            { loc: "Ivins", type: "Homeowner", text: "Professional, reliable, and extremely detailed. Our home always feels fresh and peaceful after every cleaning." },
            { loc: "Cedar City", type: "Homeowner", text: "We booked a deep clean before moving into our new home and were genuinely impressed. Every room looked spotless." }
          ].map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-[24px] shadow-sm border border-black/5">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}
              </div>
              <p className="italic text-[#4a5565] mb-6">"{rev.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1e1e1e]">{rev.type}</p>
                <p className="text-sm text-gray-400">{rev.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      <img alt="" className="absolute inset-0 size-full object-cover z-0" src={imgAreas} />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 max-w-[1280px] mx-auto text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Proudly Serving Southern Utah</h2>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          {["St. George", "Ivins", "Washington", "Cedar City", "Santa Clara"].map((city) => (
            <span key={city} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full">{city}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white/50 py-16 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <img src={imgFrame3} className="w-12 h-12 rounded-full mb-6 border-2 border-white/20" alt="Logo" />
          <p className="text-sm">Luxury housekeeping and Airbnb turnover services in Southern Utah.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Reviews</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
          <p className="text-sm mb-2">📍 Cedar City, UT, US</p>
          <p className="text-sm">✉️ southernutahhousekeeping@gmail.com</p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl">
          <h4 className="text-white text-xs font-bold mb-4 uppercase">Hours</h4>
          <div className="text-xs flex flex-col gap-2">
            <div className="flex justify-between"><span>Mon - Fri</span><span>8AM - 6PM</span></div>
            <div className="flex justify-between"><span>Sat</span><span>8AM - 3PM</span></div>
            <div className="flex justify-between text-red-400"><span>Sun</span><span>Closed</span></div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:row justify-between items-center text-[10px]">
        <p>© 2026 Southern Utah Housekeeping. Designed by maheux.me</p>
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
      <BeforeAfter />
      <Reviews />
      <Areas />
      <Footer />
    </main>
  );
}

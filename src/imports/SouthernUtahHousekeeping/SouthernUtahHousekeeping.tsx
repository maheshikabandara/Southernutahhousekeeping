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

const BOOKING_LINK = "https://cal.com/mahe-bandara-dvwcve/cleaning";

function Frame2() {
  return (
    <div className="relative rounded-full shrink-0 size-[50px]">
      <img alt="" className="absolute inset-0 object-cover pointer-events-none rounded-full size-full" src={imgFrame3} />
    </div>
  );
}

function Frame() {
  return (
    <div className="hidden md:flex font-['Noto_Sans:Regular',sans-serif] font-normal gap-[25px] items-center leading-[1.5] relative shrink-0 text-[18px] text-white tracking-[0.09px]">
      <p className="relative shrink-0 cursor-pointer hover:text-gray-300 transition-colors">Home</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-300 transition-colors">Services</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-300 transition-colors">Reviews</p>
      <p className="relative shrink-0 cursor-pointer hover:text-gray-300 transition-colors">Service Areas</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#1e1e1e] w-full max-w-[1280px] mx-auto flex items-center justify-between p-3 relative rounded-[50px]">
      <Frame2 />
      <Frame />
      <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#f4f4f4] cursor-pointer hover:bg-gray-200 transition-colors flex gap-[10px] items-center justify-center px-[32px] py-[12px] relative rounded-[50px] shrink-0" data-name="Button">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[0.08px]">
          Book Now
        </p>
      </a>
    </div>
  );
}

function Frame38() {
  return (
    <div className="flex flex-col items-center justify-center pt-4 lg:pt-[32px] relative w-full px-4 lg:px-0">
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#e1dedd] flex items-center justify-center px-4 py-2 relative rounded-[50px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative text-[#9e9491] text-[12px] md:text-[14px] text-center tracking-[1.2px] uppercase">Professional cleaning service in Southern Utah</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 lg:gap-[24px] items-start relative w-full sm:w-auto">
      <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] cursor-pointer hover:bg-black transition-colors w-full sm:w-auto drop-shadow-md flex gap-[10px] items-center justify-center px-[32px] py-[12px] relative rounded-[50px]" data-name="Button">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative text-[#fdfdfd] text-[16px] tracking-[0.08px]">
          Book a Cleaning
        </p>
      </a>
      <div className="bg-[#f4f4f4] border border-[#1e1e1e] cursor-pointer hover:bg-gray-200 transition-colors w-full sm:w-auto flex gap-[10px] items-center justify-center px-[32px] py-[12px] relative rounded-[50px]" data-name="Button">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative text-[#1e1e1e] text-[16px] tracking-[0.08px]">
          Get a Free Quote
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex flex-col gap-[24px] items-start relative w-full lg:w-[628px]">
      <Frame6 />
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.1] relative text-[#1e1e1e] text-4xl md:text-5xl lg:text-[72px] tracking-tight text-balance">
        Luxury Housekeeping & Airbnb Turnovers
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.3] relative text-[#5b5b5b] text-lg md:text-[24px] text-balance">
        5 star rated cleaning for luxury homes and vacation rentals in Southern Utah
      </p>
      <Frame8 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative w-full aspect-square max-w-[620px] mx-auto mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-[#9e9491] translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 rounded-[20px]" />
      <div className="relative w-full h-full rounded-[20px] overflow-hidden">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgFrame5} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex flex-col items-start relative w-full lg:w-1/2">
      <Group />
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-[24px] items-center relative w-full max-w-[1280px]">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex flex-col gap-[12px] items-center lg:items-start text-center lg:text-left leading-[1.5] relative w-full">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold relative text-[#fdfdfd] text-[20px] tracking-tight w-full">
        5 Star Rated
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal relative text-[#ddd] text-[16px] md:text-[18px] w-full">
        Trusted for reliable, detail focused cleaning services across Southern Utah.
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start relative w-full md:w-1/3">
      <div className="relative shrink-0 size-[32px]" data-name="Star">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 32 32">
           <path d={svgPaths.p312700a0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(3,3)" />
        </svg>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex flex-col gap-[12px] items-center lg:items-start text-center lg:text-left leading-[1.5] relative w-full">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold relative text-[#fdfdfd] text-[20px] tracking-tight w-full">
        Same Day Airbnb Turnovers
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal relative text-[#ddd] text-[16px] md:text-[18px] w-full">
        Fast, dependable cleans that keep rentals guest ready.
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start relative w-full md:w-1/3">
      <div className="relative shrink-0 size-[32px]" data-name="Bed">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 32 32">
            <path d={svgPaths.p30de6e40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(10,10)" />
            <path d="M1 21V1" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(3,6)" />
            <path d="M1 1H29V6" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(3,21)" />
            <path d="M12 1H1" stroke="#FAFAFA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(18,10)" />
        </svg>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex flex-col gap-[12px] items-center lg:items-start text-center lg:text-left leading-[1.5] relative w-full">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold relative text-[#fdfdfd] text-[20px] tracking-tight w-full">
        Luxury Home Specialists
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal relative text-[#ddd] text-[16px] md:text-[18px] w-full">
        Professional care for luxury homes and upscale spaces.
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start relative w-full md:w-1/3">
      <div className="relative shrink-0 size-[32px]" data-name="House">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p29aaab00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(4,4)" />
        </svg>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#9e9491] flex flex-col md:flex-row gap-8 lg:gap-[40px] items-center md:items-start p-8 lg:p-[48px] relative rounded-[20px] w-full max-w-[1280px]">
      <Frame11 />
      <div className="hidden md:block h-[129.5px] border-l border-white/50 relative shrink-0" />
      <Frame12 />
      <div className="hidden md:block h-[129.5px] border-l border-white/50 relative shrink-0" />
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white flex flex-col gap-16 lg:gap-[80px] items-center pb-12 lg:pb-[80px] pt-12 lg:pt-[100px] relative w-full px-6 lg:px-0">
      <Frame7 />
      <Frame15 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white relative w-full" data-name="Hero">
      <div className="flex flex-col items-center overflow-hidden w-full">
        <Frame38 />
        <Frame16 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center relative w-full max-w-[1062px] text-center px-6">
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] text-[#1e1e1e] text-3xl md:text-4xl lg:text-[48px] tracking-tight w-full text-balance">
        Professional Cleaning Services
      </p>
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-lg lg:text-[18px] w-full">
        Tailored solutions for every cleaning need
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[480px]">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgFrame19} />
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
      <svg className="block size-full" fill="none" viewBox="0 0 32 32">
        <path d="M11.5 16.5L14.25 19.25L20.5 13" stroke="#9E9491" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p157b3400} stroke="#9E9491" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(4,4)" />
      </svg>
    </div>
  );
}

function CheckListItem({ text }) {
  return (
    <div className="flex gap-[12px] items-center relative w-full">
      <CheckIcon />
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px] tracking-[0.08px]">
        {text}
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex flex-col gap-6 lg:gap-[24px] items-start relative w-full lg:w-1/2 p-6 lg:p-12 bg-[#fdfdfd]">
      <div className="flex flex-col gap-4 items-start w-full">
        <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#1e1e1e] text-2xl lg:text-[32px] tracking-tight">
          Luxury Housekeeping
        </p>
        <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px]">
          Routine housekeeping services for luxury and high performance homes.
        </p>
      </div>
      <div className="flex flex-col gap-[12px] items-start w-full">
        <CheckListItem text="Weekly cleaning" />
        <CheckListItem text="Biweekly cleaning" />
        <CheckListItem text="Monthly cleaning" />
        <CheckListItem text="Kitchen and bathroom sanitizing" />
        <CheckListItem text="Detailed home refreshes" />
      </div>
      <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] cursor-pointer hover:bg-black transition-colors drop-shadow-md flex items-center justify-center px-[32px] py-[10px] mt-4 rounded-[50px]">
        <p className="font-['Noto_Sans:Medium',sans-serif] font-medium text-[#fdfdfd] text-[14px]">
          Book a Cleaning
        </p>
      </a>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#fdfdfd] flex flex-col lg:flex-row overflow-hidden rounded-[20px] drop-shadow-xl w-full relative h-full">
      <Frame20 />
      <Frame24 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#fdfdfd] flex flex-col lg:flex-row overflow-hidden rounded-[20px] drop-shadow-xl w-full relative h-full">
      <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[480px]">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgFrame20} />
      </div>
      <div className="flex flex-col gap-6 lg:gap-[24px] items-start relative w-full lg:w-1/2 p-6 lg:p-12 bg-[#fdfdfd]">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#1e1e1e] text-2xl lg:text-[32px] tracking-tight">
            Airbnb Turnovers
          </p>
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px]">
            Reliable Airbnb and vacation rental cleaning throughout Southern Utah.
          </p>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <CheckListItem text="Same day turnovers" />
          <CheckListItem text="Linen replacement" />
          <CheckListItem text="Restocking essentials" />
          <CheckListItem text="Guest ready presentation" />
          <CheckListItem text="Reliable scheduling" />
        </div>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] cursor-pointer hover:bg-black transition-colors drop-shadow-md flex items-center justify-center px-[32px] py-[10px] mt-4 rounded-[50px]">
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium text-[#fdfdfd] text-[14px]">
            Book a Cleaning
          </p>
        </a>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#fdfdfd] flex flex-col lg:flex-row overflow-hidden rounded-[20px] drop-shadow-xl w-full relative h-full">
      <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[480px]">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgFrame21} />
      </div>
      <div className="flex flex-col gap-6 lg:gap-[24px] items-start relative w-full lg:w-1/2 p-6 lg:p-12 bg-[#fdfdfd]">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#1e1e1e] text-2xl lg:text-[32px] tracking-tight">
            Move In / Move Out Cleans
          </p>
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px]">
            Detailed cleaning services for homes, apartments, and rental properties during transitions.
          </p>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <CheckListItem text="Deep reset cleans" />
          <CheckListItem text="Appliance wipe downs" />
          <CheckListItem text="Bathroom sanitizing" />
          <CheckListItem text="Floor cleaning" />
          <CheckListItem text="Full property refresh" />
        </div>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] cursor-pointer hover:bg-black transition-colors drop-shadow-md flex items-center justify-center px-[32px] py-[10px] mt-4 rounded-[50px]">
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium text-[#fdfdfd] text-[14px]">
            Book a Cleaning
          </p>
        </a>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#fdfdfd] flex flex-col lg:flex-row overflow-hidden rounded-[20px] drop-shadow-xl w-full relative h-full">
      <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[480px]">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgFrame22} />
      </div>
      <div className="flex flex-col gap-6 lg:gap-[24px] items-start relative w-full lg:w-1/2 p-6 lg:p-12 bg-[#fdfdfd]">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#1e1e1e] text-2xl lg:text-[32px] tracking-tight">
            Commercial Cleaning
          </p>
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px]">
            Professional maintenance cleaning for offices and commercial spaces.
          </p>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <CheckListItem text="Flexible scheduling" />
          <CheckListItem text="Routine maintenance" />
          <CheckListItem text="Sanitized workspaces" />
          <CheckListItem text="Professional presentation" />
        </div>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] cursor-pointer hover:bg-black transition-colors drop-shadow-md flex items-center justify-center px-[32px] py-[10px] mt-4 rounded-[50px]">
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium text-[#fdfdfd] text-[14px]">
            Book a Cleaning
          </p>
        </a>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#fdfdfd] flex flex-col lg:flex-row overflow-hidden rounded-[20px] drop-shadow-xl w-full relative h-full">
      <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[480px]">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgFrame23} />
      </div>
      <div className="flex flex-col gap-6 lg:gap-[24px] items-start relative w-full lg:w-1/2 p-6 lg:p-12 bg-[#fdfdfd]">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] text-[#1e1e1e] text-2xl lg:text-[32px] tracking-tight">
            Deep Cleaning
          </p>
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px]">
            Seasonal and detailed deep cleaning services designed to refresh your home.
          </p>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full">
          <CheckListItem text="Baseboards" />
          <CheckListItem text="Ceiling fans" />
          <CheckListItem text="Appliance cleaning" />
          <CheckListItem text="Detailed kitchens" />
          <CheckListItem text="Bathroom deep scrubbing" />
        </div>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] cursor-pointer hover:bg-black transition-colors drop-shadow-md flex items-center justify-center px-[32px] py-[10px] mt-4 rounded-[50px]">
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium text-[#fdfdfd] text-[14px]">
            Book a Cleaning
          </p>
        </a>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="flex flex-col gap-[24px] lg:gap-12 items-start relative w-full max-w-[1280px]">
      <div className="sticky top-[20px] lg:top-[80px] w-full z-10"><Frame19 /></div>
      <div className="sticky top-[40px] lg:top-[100px] w-full z-20"><Frame31 /></div>
      <div className="sticky top-[60px] lg:top-[120px] w-full z-30"><Frame42 /></div>
      <div className="sticky top-[80px] lg:top-[140px] w-full z-40"><Frame52 /></div>
      <div className="sticky top-[100px] lg:top-[160px] w-full z-50"><Frame61 /></div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="flex flex-col gap-12 lg:gap-[48px] items-center relative w-full">
      <Frame18 />
      <Frame26 />
    </div>
  );
}

function Services() {
  return (
    <div className="bg-white relative w-full overflow-hidden" data-name="Services">
      <div className="flex flex-col items-center p-6 lg:p-[80px] w-full">
        <Frame25 />
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px] items-center relative w-full max-w-[1280px] mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
        <div className="relative rounded-[20px] w-full sm:w-1/2 min-h-[250px] lg:min-h-[400px]">
          <img alt="" className="absolute inset-0 size-full object-cover rounded-[20px]" src={imgFrame6} />
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
           <div className="relative rounded-[20px] w-full h-[200px] lg:h-[250px]">
             <img alt="" className="absolute inset-0 size-full object-cover rounded-[20px]" src={imgFrame7} />
           </div>
           <div className="relative rounded-[20px] w-full flex-1 min-h-[150px]">
             <img alt="" className="absolute inset-0 size-full object-cover rounded-[20px]" src={imgFrame8} />
           </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] items-start relative w-full lg:w-1/2">
        <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] text-[#1e1e1e] text-3xl md:text-4xl lg:text-[48px] tracking-tight text-balance">
          Airbnb Hosts: We Handle the Turnovers
        </p>
        <div className="flex flex-col gap-[16px] text-[#5b5b5b] text-[16px] md:text-[18px]">
          <p>Managing a vacation rental takes time. Cleaning should not add more stress.</p>
          <p>Southern Utah Housekeeping provides reliable Airbnb turnover cleaning services that help keep your property guest ready and professionally maintained.</p>
          <p>Our Airbnb cleaning services include:</p>
        </div>
        <div className="flex flex-col gap-[12px] w-full">
           <CheckListItem text="Same day turnover cleans" />
           <CheckListItem text="Fresh linen replacement" />
           <CheckListItem text="Restocking essentials" />
           <CheckListItem text="Reliable scheduling" />
           <CheckListItem text="Guest ready presentation" />
           <CheckListItem text="Professional attention to detail" />
        </div>
        <p className="font-['Noto_Sans:Medium',sans-serif] font-medium text-[#5b5b5b] text-[16px] md:text-[18px] mt-2">
          Trusted by Airbnb and vacation rental hosts across Southern Utah.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] cursor-pointer hover:bg-black transition-colors drop-shadow-md flex items-center justify-center px-[32px] py-[12px] rounded-[50px] w-full sm:w-auto">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#fdfdfd] text-[16px]">Book a Cleaning</p>
          </a>
          <div className="bg-[#f4f4f4] border border-[#1e1e1e] cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center px-[32px] py-[12px] rounded-[50px] w-full sm:w-auto">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#1e1e1e] text-[16px]">Get a Free Quote</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Airbnb() {
  return (
    <div className="bg-[#f5f4f4] relative w-full overflow-hidden" data-name="Airbnb">
      <div className="px-6 py-12 lg:px-[80px] lg:py-[100px] w-full">
        <Frame71 />
      </div>
    </div>
  );
}

function BeforeAfter() {
  return (
    <div className="bg-white relative w-full overflow-hidden" data-name="Before After">
      <div className="flex flex-col gap-12 lg:gap-[48px] items-center px-6 py-12 lg:px-[80px] lg:py-[100px] w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[24px] items-center text-center w-full max-w-[1000px]">
          <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] text-[#1e1e1e] text-3xl md:text-4xl lg:text-[48px] tracking-tight">
            See The Difference
          </p>
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px] md:text-[18px]">
            From vacation rentals to luxury homes, we help transform spaces into spotless, refreshed environments.
          </p>
        </div>
        <div className="relative w-full aspect-video min-h-[300px] lg:h-[623px] max-w-[1280px] rounded-2xl overflow-hidden drop-shadow-md">
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgFrame33} />
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ type, location, text }) {
  return (
    <div className="bg-white flex flex-col gap-5 items-start p-6 lg:p-[29px] rounded-[24px] drop-shadow-lg border border-black/5 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
      <div className="bg-[#e1dedd] rounded-[14px] size-[40px] flex items-center justify-center">
        <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
          <path d={svgPaths.p28150300} stroke="#9E9491" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d={svgPaths.p8bc2f80} stroke="#9E9491" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </svg>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="size-[16px]" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p17f48400} fill="#FDC700" stroke="#FDC700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          </svg>
        ))}
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[#4a5565] text-[14px] flex-1">
        "{text}"
      </p>
      <div className="border-t border-[#f3f4f6] pt-4 w-full flex flex-col mt-2">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#423e3d] text-[14px]">{type}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#99a1af] text-[12px]">{location}</p>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="bg-[#f5f4f4] relative w-full overflow-hidden" data-name="Reviews">
      <div className="flex flex-col gap-12 lg:gap-[48px] items-center px-6 py-12 lg:px-[80px] lg:py-[100px] w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[24px] items-center text-center w-full max-w-[800px]">
          <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] text-[#1e1e1e] text-3xl md:text-4xl lg:text-[48px] tracking-tight">
            What Clients Are Saying
          </p>
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px] md:text-[18px]">
            Trusted by homeowners, Airbnb hosts, and businesses across Southern Utah for reliable, detail focused cleaning services.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 w-full max-w-[1280px]">
           <ReviewCard 
              type="Airbnb Host" 
              location="St. George" 
              text="Southern Utah Housekeeping completely changed the way we manage our Airbnb. The turnovers are always on time, the property looks incredible, and our guests constantly mention how clean everything feels." 
           />
           <ReviewCard 
              type="Homeowner" 
              location="Ivins" 
              text="Professional, reliable, and extremely detailed. Our home always feels fresh and peaceful after every cleaning. Highly recommend for anyone looking for quality housekeeping services." 
           />
           <ReviewCard 
              type="Homeowner" 
              location="Southern Utah Client" 
              text="We booked a deep clean before moving into our new home and were genuinely impressed. Every room looked spotless, including areas we normally overlook." 
           />
        </div>
      </div>
    </div>
  );
}

function Reviews1() {
  return (
    <div className="bg-white relative w-full overflow-hidden" data-name="Bookings Section">
      <div className="flex flex-col gap-12 lg:gap-[48px] items-center px-6 py-12 lg:px-[80px] lg:py-[100px] w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[24px] items-center text-center w-full max-w-[800px]">
          <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] text-[#1e1e1e] text-3xl md:text-4xl lg:text-[48px] tracking-tight">
            Book Your Cleaning Service
          </p>
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[1.5] text-[#5b5b5b] text-[16px] md:text-[18px]">
            Ready for a cleaner, calmer, and guest ready space?
          </p>
        </div>
        <div className="bg-[#f6f6f6] w-full max-w-[1215px] h-[300px] sm:h-[372px] rounded-[24px] flex items-center justify-center border border-black/5">
           <p className="text-gray-400">Booking Form / Widget Placeholder</p>
        </div>
      </div>
    </div>
  );
}

function LocationPill({ name }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm border border-white flex gap-2 items-center px-6 py-3 rounded-full cursor-pointer hover:bg-white transition-colors drop-shadow-sm">
      <div className="relative size-[20px]">
        <svg className="block size-full" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p29a54100} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(10,10)" />
          <path d={svgPaths.p360410f0} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(9,3)" />
        </svg>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#1e1e1e] text-[14px] md:text-[16px]">
        {name}
      </p>
    </div>
  );
}

function Areas() {
  return (
    <div className="relative w-full overflow-hidden" data-name="Areas">
      <div className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute size-full object-cover" src={imgAreas} />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="flex flex-col items-center px-6 py-16 lg:px-[80px] lg:py-[100px] relative w-full max-w-[1440px] mx-auto text-center lg:text-left">
        <div className="flex flex-col gap-8 lg:gap-[24px] items-center lg:items-start w-full max-w-[1000px]">
          <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] text-[#fdfdfd] text-3xl md:text-4xl lg:text-[48px] tracking-tight">
            Proudly Serving Southern Utah
          </p>
          <p className="font-['Noto_Sans:Medium',sans-serif] font-medium text-[#f2f2f2] text-[16px] md:text-[18px]">
            Southern Utah Housekeeping proudly provides cleaning services throughout:
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full mt-4">
            <LocationPill name="St. George" />
            <LocationPill name="Ivins" />
            <LocationPill name="Washington" />
            <LocationPill name="Cedar City" />
            <LocationPill name="Santa Clara" />
            <LocationPill name="Middleton" />
            <LocationPill name="Surrounding Areas" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1e1e1e] w-full flex flex-col items-center">
      <div className="flex flex-col gap-[45px] w-full max-w-[1440px] px-6 py-12 lg:px-[100px] lg:pt-[75px] pb-10">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="relative rounded-full size-[50px] bg-white">
              <img alt="" className="absolute inset-0 object-cover rounded-full size-full" src={imgFrame3} />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-relaxed text-[14px] text-white/50 w-full max-w-[250px]">
              Luxury housekeeping and Airbnb turnover services in Southern Utah.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-2">
               <div className="size-[20px] rounded-full bg-white/10 hover:bg-white/20 cursor-pointer flex items-center justify-center">
                  <span className="text-white text-xs">FB</span>
               </div>
               <div className="size-[20px] rounded-full bg-white/10 hover:bg-white/20 cursor-pointer flex items-center justify-center">
                  <span className="text-white text-xs">IG</span>
               </div>
               <div className="size-[20px] rounded-full bg-white/10 hover:bg-white/20 cursor-pointer flex items-center justify-center">
                  <span className="text-white text-xs">EM</span>
               </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-5 items-start">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-white/40 uppercase tracking-widest">Quick Links</p>
            <div className="flex flex-col gap-3 font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white/50">
              <p className="cursor-pointer hover:text-white transition-colors">Home</p>
              <p className="cursor-pointer hover:text-white transition-colors">Services</p>
              <p className="cursor-pointer hover:text-white transition-colors">Reviews</p>
              <p className="cursor-pointer hover:text-white transition-colors">Bookings</p>
              <p className="cursor-pointer hover:text-white transition-colors">Service areas</p>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-5 items-start">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-white/40 uppercase tracking-widest">Services</p>
            <div className="flex flex-col gap-3 font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white/50">
              <p className="cursor-pointer hover:text-white transition-colors">Housekeeping</p>
              <p className="cursor-pointer hover:text-white transition-colors">Airbnb Cleaning</p>
              <p className="cursor-pointer hover:text-white transition-colors">Deep Cleaning</p>
              <p className="cursor-pointer hover:text-white transition-colors">Move In / Move Out</p>
              <p className="cursor-pointer hover:text-white transition-colors">Commercial Cleaning</p>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-5 items-start">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-white/40 uppercase tracking-widest">Contact Info</p>
            <div className="flex flex-col gap-4 text-[14px] text-white/50">
               <p>📍 Cedar City, UT, US</p>
               <p>📞 +1 000 000 0000</p>
               <p>✉️ southernutahhousekeeping@gmail.com</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-2 w-full max-w-[260px]">
               <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-white/40 mb-3">Working Hours</p>
               <div className="flex flex-col gap-2 text-[12px] text-white/60">
                  <div className="flex justify-between"><span>Mon – Fri</span><span>8:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>8:00 AM – 3:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-[#52b788]">Closed</span></div>
               </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-[12px] text-white/30 text-center lg:text-left w-full">
          <p>© Copyright 2026, Southern Utah Housekeeping. All Rights Reserved.</p>
          <div className="flex gap-6">
            <p className="cursor-pointer hover:text-white transition-colors">Privacy Policy</p>
            <p className="cursor-pointer hover:text-white transition-colors">Terms of Service</p>
            <p className="cursor-pointer hover:text-white transition-colors">Sitemap</p>
          </div>
          <p>Website Designed by maheux.me</p>
        </div>
      </div>
    </div>
  );
}

export default function SouthernUtahHousekeeping() {
  return (
    <div className="bg-white flex flex-col items-center relative w-full overflow-hidden" data-name="Southern Utah Housekeeping">
      <Hero />
      <Services />
      <Airbnb />
      <BeforeAfter />
      <Reviews />
      <Reviews1 />
      <Areas />
      <Footer />
    </div>
  );
}

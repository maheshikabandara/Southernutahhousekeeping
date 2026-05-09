import svgPaths from "./svg-r4cf5va3ew";
import imgFrame3 from "./acc7fb9b3103855916ccdd0a0c2811b134dc3be4.png";
import imgFrame5 from "./25cf88079ff885af26ffe975aa7a0af973bc1ddf.png";

function Frame2() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[50px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame3} />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Noto_Sans:Regular',sans-serif] font-normal gap-[25px] items-center leading-[1.5] relative shrink-0 text-[18px] text-white tracking-[0.09px] whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Home
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Services
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Reviews
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Service Areas
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex items-center justify-between p-[12px] relative rounded-[50px] shrink-0 w-[1280px]">
      <Frame2 />
      <Frame />
      <div className="bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[12px] relative rounded-[50px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Book Now
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[32px] relative shrink-0 w-[1448px]">
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#e1dedd] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[50px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#9e9491] text-[14px] text-center tracking-[1.2px] uppercase whitespace-nowrap">Professional cleaning service in Southern Utah</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <div className="bg-[#1e1e1e] content-stretch drop-shadow-[0px_0px_5px_rgba(14,74,74,0.1)] flex gap-[10px] items-center justify-center px-[32px] py-[12px] relative rounded-[50px] shrink-0" data-name="Button">
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#fdfdfd] text-[16px] tracking-[0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Book a Cleaning
        </p>
      </div>
      <div className="bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center px-[32px] py-[12px] relative rounded-[50px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Get a Free Quote
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[628px]">
      <Frame6 />
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold leading-[1.1] min-w-full relative shrink-0 text-[#1e1e1e] text-[72px] tracking-[-1.44px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{`Luxury Housekeeping & Airbnb Turnovers`}</p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[1.3] min-w-full relative shrink-0 text-[#5b5b5b] text-[24px] tracking-[-0.36px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{`5 star rated cleaning for luxury homes and vacation rentals in Southern Utah `}</p>
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return <div className="bg-[#9e9491] col-1 h-[619.121px] ml-[8.36px] mt-[7.63px] relative rounded-[20.409px] row-1 w-[619.643px]" />;
}

function Frame9() {
  return (
    <div className="col-1 h-[619.121px] ml-0 mt-0 relative rounded-[20.409px] row-1 w-[619.643px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20.409px] size-full" src={imgFrame5} />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[628px]">
      <Group />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] relative shrink-0 text-center w-full">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#fdfdfd] text-[20px] tracking-[-0.1px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        5 Star Rated
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#ddd] text-[18px] tracking-[0.09px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Trusted for reliable, detail focused cleaning services across Southern Utah.
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[315px]">
      <div className="relative shrink-0 size-[32px]" data-name="Star">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[9.37%_9.4%_12.52%_9.38%]" data-name="Vector">
          <div className="absolute inset-[-4%_-3.85%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.991 26.995">
              <path d={svgPaths.p312700a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] relative shrink-0 text-center w-full">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#fdfdfd] text-[20px] tracking-[-0.1px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Same Day Airbnb Turnovers
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#ddd] text-[18px] tracking-[0.09px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Fast, dependable cleans that keep rentals guest ready.
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[315px]">
      <div className="relative shrink-0 size-[32px]" data-name="Bed">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[31.25%_3.13%_34.38%_43.75%]" data-name="Vector">
          <div className="absolute inset-[-9.09%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 13">
              <path d={svgPaths.p30de6e40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[18.75%_90.63%_18.75%_9.38%]" data-name="Vector">
          <div className="absolute inset-[-5%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 22">
              <path d="M1 21V1" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[65.63%_3.13%_18.75%_9.38%]" data-name="Vector">
          <div className="absolute inset-[-20%_-3.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 7">
              <path d="M1 1H29V6" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[31.25%_56.25%_68.75%_9.38%]" data-name="Vector">
          <div className="absolute inset-[-1px_-9.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 2">
              <path d="M12 1H1" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] relative shrink-0 text-center w-full">
      <p className="font-['Noto_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#fdfdfd] text-[20px] tracking-[-0.1px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Luxury Home Specialists
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#ddd] text-[18px] tracking-[0.09px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Professional care for luxury homes and upscale spaces.
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[315px]">
      <div className="relative shrink-0 size-[32px]" data-name="House">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[12.5%_15.63%_15.63%_15.62%]" data-name="Vector">
          <div className="absolute inset-[-4.35%_-4.55%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25.0008">
              <path d={svgPaths.p29aaab00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#9e9491] content-stretch flex gap-[40px] items-center p-[32px] relative rounded-[20px] shrink-0">
      <Frame11 />
      <div className="h-[129.5px] relative shrink-0 w-0">
        <div className="absolute inset-[-0.39%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 130.5">
            <path d="M0.5 0.5V130" id="Vector 1" opacity="0.5" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame12 />
      <div className="h-[129.5px] relative shrink-0 w-0">
        <div className="absolute inset-[-0.39%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 130.5">
            <path d="M0.5 0.5V130" id="Vector 1" opacity="0.5" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center pb-[80px] pt-[100px] relative shrink-0 w-[1448px]">
      <Frame7 />
      <Frame15 />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[80px] relative size-full" data-name="Hero">
      <Frame18 />
      <Frame16 />
    </div>
  );
}
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../Context/NavContext";
import { Link } from "react-router";

const FullScreenNav = () => {
  const [navOpen, setnavopen] = useContext(NavbarContext);
  const fullScreenRef = useRef(null);
  console.log(navOpen);

  const fullNavLinkRef = useRef(null);
 
  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
        display: "block",
      });
      tl.to(".closer",{
     x:0,
     
   })
    tl.to(".stairing", {
      duration: 0.3,
      height: "100%",
      stagger: {
        amount: -0.1,
      },
    });
    
    tl.to(".Link", {
      duration: 0.3,
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.09,
      },
    });
    tl.to(".navLink", {
      opacity: 1,
    });
  }

   function gsapcloseAnimation() {
     const tl = gsap.timeline();
    tl.to(".Link", {
      duration: 0.3,
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.02,
      },
    });
      tl.to(".closer",{
        duration:0.3,
      x:1000,
      transformOrigin:"right",
    })
     tl.to(".stairing", {
      duration: 0.3,
      height: 0,
      stagger: {
        amount: -0.1,
      },
    });
    tl.to(".fullscreennav", {
      display: "none",
    })
    tl.to(".navLink", {
      opacity: 1,
    });
  }
  
  useGSAP(() => {
    if (navOpen) {
      
      gsapAnimation();
    } else {
     
      gsapcloseAnimation();
    }
  }, [navOpen]);
  return (
    <div
      ref={fullScreenRef}
      className="fullscreennav hidden  text-white w-full overflow-hidden h-screen absolute top-0 z-2 "
    >
      <div className="h-screen w-full fixed ">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>

        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="navLink flex w-full justify-between items-start">
          <div className="px-2 py-3 w-33">
            <svg
              className=" w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setnavopen(!navOpen)}
            className="h-32 w-32 relative cursor-pointer closer"
          >
            <div className="h-44 w-0.5 bg-[#D3FD50] absolute -rotate-45 origin-top"></div>
            <div className="h-44 w-0.5 bg-[#D3FD50] absolute rotate-45 origin-top right-0"></div>
          </div>
        </div>
        <div className=" py-4">
          <Link onClick={() => setnavopen(!navOpen)} to="/projects">
          <div  className="relative origin-top Link border-y-1 border-[#9b9999]">
            <h1 className="font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
              Projets
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex justify-around items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex justify-around items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          </Link>
          <Link onClick={() => setnavopen(!navOpen)} to="/agence">
          <div className="relative origin-top Link border-y-1 border-[#9b9999]">
            <h1 className="font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
              Agence
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex justify-around items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex justify-around items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          </Link>
          <Link onClick={() => setnavopen(!navOpen)} to="/contact">
          <div className="relative origin-top Link border-y-1 border-[#9b9999]">
            <h1 className="font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
              Contact
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex justify-around items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex justify-around items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div></Link>
          <Link to={"/blog"} onClick={() => setnavopen(!navOpen)}>
          <div className="relative origin-top Link border-y-1 border-[#9b9999]">
            <h1 className="font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
              Blogue{" "}
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex justify-around items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex justify-around items-center">
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h1 className="whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-5 text-center uppercase">
                  Pour tout voir
                </h1>
                <img
                  className="h-20 w-50 rounded-full shrink-0"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;

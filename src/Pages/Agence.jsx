import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

function Agence() {
  gsap.registerPlugin(ScrollTrigger);
  const imgDivRef = useRef(null)
  const imgRef = useRef(null)
  const imgArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
  ] 
  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 25.4%",
        end: "top -150%",
        pin: true,
        pinSpacing:true, 
        pinType: "transform",
        pinReparent: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          const imgIndex = Math.floor(elem.progress * (imgArray.length-1))
          imgRef.current.src = imgArray[imgIndex];
        
        }  
      }
     
    })
  })
  return (
   <div>
    <div className="section1 py-1">
      <div ref={imgDivRef} className="h-[20vw] w-[15vw] top-40 absolute left-[30vw] bg-amber-300 rounded-3xl overflow-hidden">
        <img ref={imgRef} className="h-full w-full object-cover" src=""  alt="" />
      </div>
    <div className="relative">
      <div className=" mt-85">
        <h1 className="text-[20vw] uppercase leading-[18vw] font-[font2] text-center">
          Soixan7e
          <br />
          Douze
        </h1>
      </div>
      <div className="pl-[40%] mt-8">
        <p className="text-5xl font-[font1]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
   </div> 
   <div className="section2 h-screen">

   </div>
   </div>
    
  );
}

export default Agence;

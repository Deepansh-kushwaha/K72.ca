import Video from "./Video"
function HomeTop() {
  return ( 
    <div className="font-[font1] text-center pt-2">
      <div className="text-[9.4vw] uppercase leading-[9vw] flex items-center justify-center">L&#39;étincelle</div>
      <div className="text-[9.4vw] uppercase leading-[9vw] flex items-start justify-center">qui<div className="h-[8vw] w-[15vw]  rounded-full overflow-hidden">
        <Video />
        </div>génère</div>
      <div className="text-[9.4vw] uppercase leading-[9vw] flex items-center justify-center">la créativité</div>
    </div>
  );
}

export default HomeTop;

import Video from "../Components/Home/Video"
import HomeTop from "../Components/Home/HomeTop"  
import HomeBottom from "../Components/Home/HomeBottom"
function Home() {
  return (
    <div>
    <div className="h-screen w-screen bg-red-900 fixed">
      <Video />
    </div>
    <div className="h-screen w-full relative flex flex-col justify-between" >
      <HomeTop />
      <HomeBottom />
    </div>
    </div>
  )
}
export default Home

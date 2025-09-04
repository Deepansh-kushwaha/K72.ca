import { Link } from "react-router"
const HomeBottom = () => {
  return (
    <div className="font-[font2] flex justify-center uppercase  gap-5  mb-2">
      <Link className="border-3 px-7 pt-5 hover:text-[#D3FD50] leading-14 rounded-full text-[6.5vw]" to="/projects">Projets</Link>
      <Link className="border-3 px-7 pt-5 hover:text-[#D3FD50] leading-14 rounded-full text-[6.5vw]" to="/agence" >Agence</Link>
    </div>
  )
}

export default HomeBottom

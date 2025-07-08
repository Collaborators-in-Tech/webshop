import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const HeroSection = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/products")
  }

  return (
    <div
      className="
    relative 
    h-[600px] 
    w-full 
    overflow-hidden"
    >
      <img
        src="/images/hero-picture.png"
        alt="Hero image"
        className="
        w-full 
        h-full 
        object-cover 
        object-[60%_top] md:object-center"
      />

      <div
        className="
      absolute 
      inset-0 
      bg-gradient-to-b from-black/80 
      to-transparent 
      z-10"
      />

      <div
        className="
      absolute 
      inset-0 
      z-20 
      flex 
      flex-col 
      items-center
      text-center
      md:items-start 
      md:justify-start
      md:text-left
      mt-[140px] 
      px-15 
      text-white

      "
      >
        <h1
          className="
        text-[40px] 
        sm:text-[48px] 
        lg:text-[64px] 
        font-medium 
        leading-tight"
        >
          Plants for every home
        </h1>
        <p className="text-[16px] sm:text-[20px] mt-4 max-w-[600px]">
          Carefully selected plants for every corner of your home. Easy to care
          for. Beautiful to live with. Delivered to your door.
        </p>
        <Button
          text="Shop plants"
          func={handleNavigate}
          className="
          mt-8 
          w-[160px] 
          h-[40px] 
          bg-[#24614C] 
          text-white 
          rounded-[50px] 
          shadow-md 
          hover:bg-[#224337]"
        />
      </div>
    </div>
  )
}

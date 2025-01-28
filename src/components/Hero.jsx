import PhoneImage from "../assets/Phone.svg"
import Navbar from "./Navbar"
import Dot from "../assets/White_and_green_dot.svg"

export default function HeroSection() {
      return (
            <>
                  <header className="relative flex flex-col gap-4 max-w-screen hero-style justify-evenly">
                        <Navbar />
                              <div className="absolute w-5 h-5 justify-center rounded-full bg-white -mt-[48rem] right-[20rem]">
                                    <img src={Dot } className="relative m-auto scale-110 size-8" />
                              </div>
                             <div className="absolute xl:flex w-5 h-5 justify-center rounded-full hidden bg-white right-[34.5rem] -mt-20">
                                    <img src={Dot } className="relative m-auto scale-110 size-8" />
                              </div>
                              <div className="absolute xl:flex w-5 h-5 justify-center rounded-full bg-white left-[17.875rem] hidden -mt-56">
                                    <img src={Dot } className="relative m-auto scale-110 size-8" />
                              </div>
                        <div className="z-10 flex flex-col items-center gap-8 mt-2 text-center lg:mb-10">
                              <h1 className="text-3xl sm:text-4xl w-11/12 lg:w-3/4 xl:w-3/5 md:text-[4.5rem] font-semibold text-white tracking-wide md:leading-[6.25rem] shadow-text">International Payments for Students.</h1>
                              <div className="w-5/6 lg:w-3/5 xl:w-1/2 mx-auto text-sm md:text-2xl font-semibold tracking-normal leading-[2rem] text-white">
                                    <p>The fastest, simplest way to pay tuition, fees, and more — anytime, anywhere, to schools, businesses, and government agencies worldwide!</p>
                              </div>
                        </div>
                        <div className="flex items-end justify-center mx-auto lg:gap-4">
                              <img src={PhoneImage} alt="" className="lg:scale-100 h-[42.5rem] hidden md:flex scale-[85%]" /> 
                              <img src={PhoneImage} alt="" className="scale-[90%] lg:scale-100"/> 
                              <img src={PhoneImage} alt="" className="lg:scale-100 h-[42.5rem] hidden lg:flex scale-[85%]" /> 
                        </div>
                  </header>
            </>
      )
}
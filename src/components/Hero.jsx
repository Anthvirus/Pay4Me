import PhoneImage from "../assets/Phone.svg"
import Navbar from "./Navbar"
import Dot from "../assets/White_and_green_dot.svg"

export default function HeroSection() {
      return (
            <>
                  <header className="relative flex flex-col gap-4 h-[90vh] md:h-screen max-w-screen hero-style justify-evenly">
                        <Navbar />
                        <hr className="static ml-[48.5rem] rotate-90 w-[117.5rem] hidden xl:flex" />
                        <div className="absolute hidden xl:flex w-5 h-5 justify-center rounded-full bg-white right-[18.85rem] -mt-[40rem]">
                              <img src={Dot } className="relative m-auto scale-110 size-8" />
                        </div>
                        <hr className="static ml-[32.5rem] rotate-90 opacity-70 w-[110rem] hidden xl:flex" />
                        <div className="absolute xl:flex w-5 h-5 justify-center rounded-full hidden bg-white right-[38.75rem] mt-36">
                              <img src={Dot } className="relative m-auto scale-110 size-8" />
                        </div>
                        <hr className="static -ml-[38rem] rotate-90 w-[118rem] md:w-[113rem] hidden xl:flex" />
                        <div className="absolute xl:flex w-5 h-5 justify-center rounded-full bg-white left-[17.875rem] hidden -mt-20">
                              <img src={Dot } className="relative m-auto scale-110 size-8" />
                        </div>
                        <div className="z-10 flex flex-col gap-8 mx-auto mt-2 mb-10 text-center md:w-11/12 lg:w-3/4 xl:w-3/5">
                              <h1 className="text-2xl sm:text-4xl md:text-[4.5rem] font-semibold text-white tracking-wide md:leading-[6.25rem] shadow-text">International Payments for Students.</h1>
                              <div className=" w-4/5 mx-auto text-sm md:text-2xl font-semibold tracking-normal leading-[2rem] text-white">
                                    <p>The fastest, simplest way to pay tuition, fees, and more — anytime, anywhere, to schools, businesses, and government agencies worldwide!</p>
                              </div>
                        </div>
                        <div className="flex items-end justify-center mx-auto lg:gap-4">
                              <img src={PhoneImage} alt="" className="lg:scale-100 h-[42.5rem] hidden md:flex scale-[85%]" /> 
                              <img src={PhoneImage} alt="" className="scale-[87.5%] lg:scale-100"/> 
                              <img src={PhoneImage} alt="" className="lg:scale-100 h-[42.5rem] hidden lg:flex scale-[85%]" /> 
                        </div>
                  </header>
            </>
      )
}
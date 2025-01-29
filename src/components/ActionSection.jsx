import PlayStoreIcon from "../assets/Play_Store.svg";
import AppStoreIcon from "../assets/App_Store.svg";
import PhoneImage from "../assets/Phone.svg";
import NewsLetter from "./NewsLetter";

export default function CTASection() {
          return (
                    <>
                              <section className="relative flex flex-col items-center w-full px-2 -mt-20 lg:gap-24">
                                        <div className="flex flex-col items-center justify-center px-4 lg:w-5/6 md:flex-row lg:gap-28">
                                                  <div className="flex flex-col gap-12 p-4 text-center md:text-left sm:w-5/6 md:w-3/5">
                                                            <h1 className="text-4xl font-bold lg:text-6xl lg:w-1/2">Download App</h1>
                                                            <p className="w-11/12 text-sm md:text-xl lg:w-3/4">Experience a seamless way to handle your payments. From tuition fees to visa applications, we make every transaction quick, easy, and stress-free—so you can focus on what matters most.</p>
                                                            <div className="flex mx-auto md:-ml-5">
                                                                      <img src={AppStoreIcon} className="w-48 h-auto -mx-2 cursor-pointer sm:w-56 md:w-64 md:-mx-0 sm:scale-100 hover:scale-95" alt=""/>
                                                                      <img src={PlayStoreIcon} className="w-48 h-auto -mx-2 cursor-pointer sm:w-56 md:w-64 md:-mx-0 sm:scale-100 hover:scale-95" alt=""/>
                                                            </div>
                                                  </div>
                                                  <img src ={PhoneImage} className="scale-[70%] lg:scale-100 h-auto rounded-[4.5rem]" alt=""/>
                                        </div>
                                        <NewsLetter/>
                              </section>
                    </>
          )
}
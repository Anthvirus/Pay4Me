import PlayStoreIcon from "../assets/Play_Store.svg";
import AppStoreIcon from "../assets/App_Store.svg";
import PhoneImage from "../assets/Phone.svg";

const aboutUs = [
      {
            name: "Fast",
            header: "Lightning-fast tuition and school fee payments made simple!",
            description: "Say goodbye to delays and complicated processes. With our platform, you can pay tuition and school fees quickly and effortlessly, giving you more time to focus on what matters most."
      },
      {
            name: "Easy",
            header: "Easily Pay for SEVIS, WES, Visa Applications, and More",
            description: "Streamline your payment process with ease. Whether it`s SEVIS fees, WES evaluations, visa applications, or other essential payments, we`ve got you covered. Enjoy secure, hassle-free transactions tailored to meet your global needs"
      },
      {
            name: "Simple",
            header: "Simplified Payments, Amplified Convenience",
            description: "Experience a seamless way to handle your payments. From tuition fees to visa applications, we make every transaction quick, easy, and stress-free—so you can focus on what matters most."
      }
]

export default function AboutSection() {
      return (
            <>
                  <section className="relative flex flex-col items-center justify-center w-full gap-8 mt-80 sm:mt-64 md:mt-80">
                        <div className="flex lg:mb-12 lg:mt-28">
                              <img src={AppStoreIcon}  className="w-56 h-auto -mx-2 cursor-pointer md:w-64 md:-mx-0 sm:scale-100 hover:scale-95"/>
                              <img src={PlayStoreIcon} className="w-56 h-auto -mx-2 cursor-pointer md:w-64 sm:scale-100 md:-mx-0 hover:scale-95"/>
                        </div>
                        <div>
                              <h1 className="text-6xl font-bold md:text-7xl">About Us</h1>
                        </div>
                        <div className="flex flex-col items-center mx-8 mt-8">
                              {aboutUs.map((AboutItem) => (
                                    <div key={AboutItem.name} className="flex items-center md:w-4/ lg:w-11/12 5 xl:w-5/6 gap-40 even:flex-row-reverse justify-evenly h-max md:h-[40rem] lg:h-[45rem] xl:min-h-[50rem] my-4">
                                          <div className="bg-[var(--Green)] w-max md:w-3/5 h-[12rem] md:h-[22.5rem]  mt-auto rounded-xl hidden md:flex justify-center">
                                                <img src={PhoneImage} className=" mx-auto h-auto scale-110 md:w-[17.5rem] xl:w-[25rem] md:-mt-[12.5rem] lg:-mt-[15rem] xl:-mt-[25rem] absolute"/>
                                          </div>
                                          <div className="flex flex-col items-start justify-between gap-6 px-4 md:w-3/5">
                                                <h3 className="text-2xl md:text-4xl font-semibold tracking-wide lg:leading-[3.75rem] px-2">{AboutItem.header}</h3>
                                                <p className="text-lg tracking-wider md:text-xl lg:text-lg lg:w-3/4">{AboutItem.description}</p>
                                                <div className="">
                                                      <button className="bg-[var(--Green)] border-[var(--Green)] hover:bg-white hover:text-[var(--Green)] text-white flex py-4 px-6 font-semibold border rounded-md">Learn More</button>
                                                </div>     
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </section>
            </>
      )
}
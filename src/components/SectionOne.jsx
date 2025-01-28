import PlayStoreIcon from "../assets/Play_Store.svg";
import AppStoreIcon from "../assets/App_Store.svg";
import PhoneImage from "../assets/Phone.svg";
import Paystack from "../assets/Paystack.svg";
import Stripe from "../assets/Stripe.svg";
import MPower from "../assets/Mpower.svg";
import Techstars from "../assets/Techstars.svg";
import Prodigy from "../assets/Prodigy.svg";
import Across from "../assets/Across.svg";


      const Partners = [
            {
                  name: 'Paystack',
                  image: Paystack
            },
            {
                  name: 'Stripe',
                  image: Stripe
            },
            {
                  name: 'Prodigy',
                  image: Prodigy
            },
            {
                  name: 'Mpower',
                  image: MPower
            },
            {
                  name: 'Across',
                  image: Across
            },
            {
                  name: 'Techstars',
                  image: Techstars
            },
]
      
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

export default function SectionOne() {
      return (
            <>
                  <section className="relative flex flex-col items-center justify-center w-full gap-8 Part-one">
                        <div className="flex lg:mt-20 lg:mb-6">
                              <img src={AppStoreIcon}  className="w-48 h-auto -mx-2 cursor-pointer sm:w-56 md:w-64 md:-mx-0 sm:scale-100 hover:scale-95"/>
                              <img src={PlayStoreIcon} className="w-48 h-auto -mx-2 cursor-pointer sm:w-56 md:w-64 sm:scale-100 md:-mx-0 hover:scale-95"/>
                        </div>
                        <div>
                              <h1 className="text-5xl font-extrabold md:text-7xl shadow-text">About Us</h1>
                        </div>
                        <div className="flex flex-col items-center mx-8 mt-8 lg:gap-24">
                              {aboutUs.map((AboutItem) => (
                                    <div key={AboutItem.name} className="flex items-center md:w-4/ lg:w-11/12 5 xl:w-5/6 gap-40 even:flex-row-reverse justify-evenly h-max md:h-[40rem] lg:h-[45rem] xl:min-h-[50rem] my-4 bg-[#F8FFF9] md:bg-transparent p-1 rounded-lg border-[.01175rem] md:border-none">
                                          <div className="bg-[var(--Green)] w-max md:w-3/5 h-[12rem] md:h-[22.5rem]  mt-auto rounded-xl hidden md:flex justify-center">
                                                <img src={PhoneImage} className=" mx-auto h-auto scale-110 md:w-[17.5rem] xl:w-[25rem] md:-mt-[12.5rem] lg:-mt-[15rem] xl:-mt-[25rem] absolute"/>
                                          </div>
                                          <div className="flex flex-col items-start justify-between gap-6 px-4 md:w-3/5">
                                                <h3 className="text-2xl md:text-4xl font-semibold tracking-wide lg:leading-[3.75rem] px-2">{AboutItem.header}</h3>
                                                <p className="text-sm tracking-wider md:text-xl lg:w-3/4">{AboutItem.description}</p>
                                                <div className="-ml-4 sm:ml-0">
                                                      <button className="bg-[var(--Green)] border-[var(--Green)] hover:bg-white hover:text-[var(--Green)] text-white flex py-4 px-6 font-semibold border rounded-md scale-75 lg:scale-100">Learn More</button>
                                                </div>     
                                          </div>
                                    </div>
                              ))}
                        </div>
                        <div className="flex flex-col items-center mt-36">
                        <h1 className="text-4xl font-extrabold md:text-7xl shadow-text">Trusted Partners</h1>
                        <div className="flex flex-wrap justify-center gap-6 mx-auto my-12">
                              {Partners.map((partners)=>(
                              <img className="h-auto w-28 md:w-56" alt="" src={partners.image} key={partners.name}/>
                              ))}
                        </div>
                        </div>
                  </section>
            </>
      )
}
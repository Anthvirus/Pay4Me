import { useState } from "react";
import AishaImage from "../assets/Aisha.svg";
import AdewoleImage from "../assets/Adewole.svg";
import GraceImage from "../assets/Grace.svg";
import KofiImage from "../assets/Kofi.svg";
import AddIcon from "../assets/Add_Icon.svg";
import RemoveIcon from "../assets/Remove_Icon.svg"; 

export default function SectionTwo() {
            const [openFAQ, setOpenFAQ] = useState(null); // Track the currently open FAQ
          
            const toggleFaq = (index) => {
                  setOpenFAQ(openFAQ === index ? null : index); // Toggle the clicked item
            };
            
            const Testmonies = [
                  {
                        name: "Aisha",
                        occupation: "University Student",
                        image: AishaImage,
                        description: `"Paying my tuition fees used to be such a hassle, but now it's so quick and simple! I can focus on my studies without worrying about late payments."`
                  },
                  {
                        name: "Mr. Adewole",
                        occupation: "Parent",
                        image: AdewoleImage,
                        description: `"This platform has made managing my child's school fees so much easier. I can make payments instantly and track everything in one place!"`
                  },
                  {
                        name: "Kofi",
                        occupation: "Prospective International Student",
                        image: KofiImage,
                        description: `"I was worried about paying for my SEVIS and visa fees from abroad, but this service made it seamless and stress-free. Highly recommended for international students!"`
                  },
                  {
                        name: "Grace",
                        occupation: "Small Business Owner",
                        image: GraceImage,
                        description: `"We’ve integrated this platform for government fee payments, and it’s been a game-changer. Secure, reliable, and incredibly efficient!"`
                  }
            
            ]
            const FAQs = [
                  {
                        name: "first",
                        text: "What types of payments can I make with this platform?"
                  },
                  {
                        name: "second",
                        text: "Is this platform secure for online payments?"
                  },
                  {
                        name: "third",
                        text: "Is this platform secure for online payments?",
                        answer: "Yes, we prioritize your security with robust encryption and payment verification processes to ensure your transactions are safe and reliable."
                  },
                  {
                        name: "fourth",
                        text: " How long does it take for my payment to be processed?"
                  },
                  {
                        name: "fifth",
                        text: "Can I track my payment status?"
                  },
                  {
                        name: "last",
                        text: "Do you support international transactions?"
                  },
            ]
            return (
                  <>
                        <section className="flex flex-col items-center justify-center gap-20 -mt-48 md:-mt-48 Part-two">
                              <div className="flex flex-col items-center">
                                    <h1 className="text-5xl font-semibold md:text-7xl shadow-text">Testmonials</h1>
                                    <p className="w-11/12 my-8 text-center md:text-xl lg:w-1/4">What Our Users Are Saying About Seamless Payments</p>
                                    <div className="grid w-11/12 grid-cols-1 gap-4 md:grid-cols-2 lg:w-3/4">
                                          {Testmonies.map((Testmony) => (
                                                <div key={Testmony.name} className="bg-slate-50 min-w-[20rem] tracking-wider border-2 hover:border-none p-8 md:px-12 md:py-16 rounded-xl gap-4 flex flex-col hover:bg-[#F8FFF9] shadow-xl">
                                                      <p className="text-sm md:text-xl">{Testmony.description}</p>
                                                      <div className="flex items-center gap-4">
                                                            <img src={Testmony.image} alt="" className="" />
                                                            <div>
                                                                  <h1 className="text-xl font-bold">{Testmony.name}</h1>
                                                                  <p className="text-[0.5rem] md:text-sm">{Testmony.occupation}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))
                                          }
                                    </div>
                              </div>
                              <div className="flex flex-col items-center w-11/12 gap-12 mt-24 md:w-2/3 lg:w-1/2">
                                    <h1 className="text-4xl font-semibold md:text-7xl shadow-text">FAQ&rsquo;s</h1>
                                    <div className="flex flex-col w-full gap-12 px-2">
                                          {FAQs.map((FAQ, index) => (
                                                <div key={FAQ.name} className="flex flex-col w-full bg-white shadow-xl rounded-xl hover:bg-[#F8FFF9]">
                                                      {/* Question Header */}
                                                      <div className="flex items-start gap-4 py-4 pl-6 pr-12 cursor-pointer" onClick={() => toggleFaq(index)}>
                                                            <img src={openFAQ === index ? RemoveIcon : AddIcon} className="p-1 size-6" alt="Toggle FAQ" />
                                                            <p className="text-sm md:text-xl">{FAQ.text}</p>
                                                      </div>
                                                      {/* FAQ Answer (conditionally rendered) */}
                                                      {openFAQ === index && (
                                                            <div className="pb-4 pl-10 pr-6 text-xs text-gray-600 md:text-lg">
                                                                  {FAQ.answer}
                                                            </div>)}
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </section>
                  </>
            )
      }
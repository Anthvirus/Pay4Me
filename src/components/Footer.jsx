import Logo from "../assets/Pay4Me_Icon.svg"
import PlayStoreIcon from "../assets/Play_Store.svg";
import AppStoreIcon from "../assets/App_Store.svg";
import Copyright from "./Copyright";
export default function Footer() {
          return (
                    <>
                              <footer className="flex flex-col gap-24 -mt-48 lg:items-center xl:gap-48 max-w-screen">
                                        <div className="flex flex-col w-11/12 gap-10 px-12 justify-evenly xl:w-4/5 lg:flex-row">
                                                  <div className="flex flex-col gap-6">
                                                            <div className="flex items-center gap-1 w-max">
                                                                      <img src={Logo}  className=""/>
                                                                      <h1 className="text-3xl font-semibold md:text-4xl">Pay4Me App</h1>
                                                            </div>
                                                            <div className="flex md:-ml-6">
                                                                      <img src={AppStoreIcon} className="w-40 h-auto -mx-2 cursor-pointer sm:w-56 md:w-64 sm:scale-100 md:-mx-0 hover:scale-95"/>
                                                                      <img src={PlayStoreIcon}  className="w-40 h-auto -mx-2 cursor-pointer sm:w-56 md:w-64 sm:scale-100 md:-mx-0 hover:scale-95"/>
                                                            </div>
                                                            <div>
                                                                      <form action="get" className="flex gap-1 sm:gap-6">
                                                                                <input type="text" name="email" placeholder="Email Address"  className="w-48 p-2 border-2 rounded-lg max-w-56"/>
                                                                                <button className="p-2 text-white bg-black border-2 border-black rounded-lg hover:bg-white hover:text-black">Register</button>
                                                                      </form>
                                                            </div>
                                                  </div>
                                                  <div className="flex flex-col gap-16 md:flex-row">
                                                  <div className="flex flex-col gap-4">
                                                            <h1 className="text-4xl font-semibold">Categories</h1>
                                                            <dl className="flex flex-col gap-4 list-none text-md lg:text-xl">
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">About Us</li>
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">Careers</li>
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">Blog</li>
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">Customers</li>
                                                            </dl>
                                                  </div>
                                                  <div className="flex flex-col gap-4">
                                                            <h1 className="text-4xl font-semibold">Resources</h1>
                                                            <dl className="flex flex-col gap-4 list-none text-md lg:text-xl">
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">IOS Reviews</li>
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">Android Reviews</li>
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">Live Testmonials</li>
                                                            </dl>
                                                  </div>
                                                  <div className="flex flex-col gap-4">
                                                  <h1 className="text-4xl font-semibold">Legal</h1>
                                                            <dl className="flex flex-col gap-4 list-none text-md lg:text-xl">
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">Terms of services</li>
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">Order cancellation policy</li>
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">Privacy policy</li>
                                                                      <li className="hover:text-[var(--Green)] cursor-pointer">KYC</li>
                                                            </dl>
                                                  </div>
                                                  </div>
                                        </div>
                                        <div className="w-4/5 mx-auto text-sm lg:text-xl">
                                                  <p>Pay4Me is a fintech company dedicated to helping international students and immigrants pay tuition and fees effortlessly in minutes. We work with trusted licensed partners and banks to ensure secure and reliable transactions. All trademarks, logos, and brand names belong to their respective owners and are used here for identification purposes only.</p>
                                        </div>
                                        <Copyright/>
                              </footer>
                    </>
          )
}
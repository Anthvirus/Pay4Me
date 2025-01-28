import Logo from "../assets/Logo_icon.svg"

export default function Navbar() {
      return (
            <>
                  <nav className="z-10 flex items-center justify-around px-2 py-8 min-h-40 max-w-screen">
                        <div className="hidden md:flex">
                              <dl className=" gap-8 text-[1rem] font-semibold text-white w-72 flex">
                                    <a className="cursor-pointer hover:opacity-80">Blog</a>
                                    <a className="cursor-pointer hover:opacity-80">About Us</a>
                                    <a className="cursor-pointer hover:opacity-80">Support</a>
                              </dl>
                        </div>
                        <div>
                              <img src={Logo} alt="Pay4Me Logo" className="w-48 md:w-48 xl:w-80 sm:w-40 xl:-ml-24"/>
                        </div>
                        <div>
                              <button className="py-4 px-5 bg-white text-sm lg:text-[1rem]  rounded-md shadow-sm shadow-gray-500 text-[#0A5D2A] font-semibold h-auto hover:scale-[75%] lg:hover:scale-95 lg:scale-100 scale-[80%]">Download App</button>
                        </div>
                  </nav>
            </>
      )
}

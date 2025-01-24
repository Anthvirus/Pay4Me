import Logo from "../assets/Logo_Icon.svg"

export default function Navbar() {
      return (
            <>
                  <nav className="flex items-center justify-around lg:justify-around max-w-screen mt-[3.5rem] z-10">
                        <div>
                              <dl className="hidden gap-8 text-[1rem] font-semibold text-white md:flex w-60">
                                    <a className="cursor-pointer hover:opacity-80">Blog</a>
                                    <a className="cursor-pointer hover:opacity-80">About Us</a>
                                    <a className="cursor-pointer hover:opacity-80">Support</a>
                              </dl>
                        </div>
                        <div>
                              <img src={Logo} alt="Pay4Me Logo" className="-ml-20 lg:w-72"/>
                        </div>
                        <div>
                              <button className="p-2 bg-white text-[1rem] rounded-md shadow-sm shadow-gray-500 text-[#0A5D2A] font-semibold h-[3.25rem] w-[9rem] hover:scale-95">Download App</button>
                        </div>
                  </nav>
            </>
      )
}
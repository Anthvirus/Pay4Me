import Logo from "../assets/Logo_icon.svg"

export default function Navbar() {
      return (
            <>
                  <nav className="z-10 flex items-center py-8 justify-evenly max-w-screen">
                        <div>
                              <dl className="hidden gap-8 text-[1rem] font-semibold text-white md:flex w-64">
                                    <a className="cursor-pointer hover:opacity-80">Blog</a>
                                    <a className="cursor-pointer hover:opacity-80">About Us</a>
                                    <a className="cursor-pointer hover:opacity-80">Support</a>
                              </dl>
                        </div>
                        <div>
                              <img src={Logo} alt="Pay4Me Logo" className="w-48 lg:w-64"/>
                        </div>
                        <div>
                              <button className="p-3 bg-white text-[1rem] rounded-md shadow-sm shadow-gray-500 text-[#0A5D2A] font-semibold h-auto w-36 hover:scale-95">Download App</button>
                        </div>
                  </nav>
            </>
      )
}
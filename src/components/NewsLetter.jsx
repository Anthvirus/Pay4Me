export default function NewsLetter() {
          return (
                    <>
                              <div className="flex flex-col w-11/12 gap-4 px-3 py-6 text-white lg:my-24 lg:items-center lg:justify-around md:py-20 md:px-12 lg:w-4/5 newsletter rounded-xl lg:flex-row">
                                        <div className="flex flex-col gap-10 p-2 lg:w-2/3">
                                                  <h1 className="text-4xl font-semibold md:text-6xl">Subscribe to get updates</h1>
                                                  <p className="text-sm md:text-xl lg:text-xl md:w-5/6 lg:w-3/5">Experience a seamless way to handle your payments. From tuition fees to visa applications, we make every transaction quick, easy, and stress-free — so you can focus on what matters most.</p>
                                        </div>
                                        <button className="flex max-w-36 md:max-w-48  items-center h-16 p-6 md:p-10  font-semibold border border-white hover:bg-white hover:text-[var(--Green)] md:text-lg text-md rounded-xl">Get Started</button>
                              </div>
                    </>
          )
}
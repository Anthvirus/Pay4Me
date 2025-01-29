export default function Copyright() {
          var year = new Date().getFullYear()
          return (
                    <>
                              <section className="flex w-full h-20 text-sm text-white bg-black xl:-mt-40 md:text-xl justify-center flex-col items-center">
                                        <p> Copyright. &copy; {year} all right reserved Pay4Me</p>
                                        <p>UI by Dami.</p>
                              </section>
                    </>
          )
}

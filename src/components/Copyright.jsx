export default function Copyright() {
          var year = new Date().getFullYear()
          return (
                    <>
                              <section className="flex w-full h-20 text-sm text-white bg-black xl:-mt-40 md:text-xl">
                                        <p className="m-auto"> Copyright. &copy; {year} all right reserved Pay4Me</p>  
                              </section>
                    </>
          )
}
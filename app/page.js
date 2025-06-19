import Counter from "./components/counter";
import Image from "./components/image";
import ImageContent from "./components/imageContent";
import Information from "./components/information";
import Testimonial from "./components/testimonial";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div className="overflow-x-hidden bg-gray-800">
        <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
          <div className="shrink-0 from-white/40 absolute left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-gray-500 bg-gradient-to-br"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mt-5 text-3xl font-light leading-snug text-white sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                Manage <br className="sm:hidden" />
                Customer Relationships with
                <span className="relative inline-flex justify-center whitespace-nowrap font-bold">
                  Smart CRM Software
                </span>
              </h1>
              <p className="mx-auto mt-10 max-w-md text-base leading-7 text-gray-300">
                Streamline your sales, support, and marketing with our all-in-one CRM platform — built to help your business grow faster.
              </p>

              <form action="#" method="POST" className="mt-10">
                <div className="group bg-white/20 border-white/50 focus-within:ring-1 focus-within:ring-white/50 relative border p-1 backdrop-blur-md sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="placeholder-white/50 block w-full bg-transparent px-4 py-4 text-white outline-none"
                    required
                  />
                  <div className="border-white/50 flex sm:absolute sm:inset-y-0 sm:right-0 sm:h-full sm:border-l">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center bg-blue-600 px-6 py-3 text-lg font-bold text-white outline-none transition-all focus:bg-blue-500 hover:border sm:hover:translate-x-2 sm:hover:-translate-y-2"
                    >
                      Try it Free
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-16 mb-16 flex flex-col items-center justify-center divide-y divide-gray-500 border border-gray-600 bg-gray-700 shadow-lg sm:flex-row sm:divide-x sm:divide-y-0 md:mt-32">
            <div className="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-200">  
              <p>Lead & Sales Tracking</p>
            </div>
            <div className="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-200">
              
              <Link href="/allusers">See All Users</Link>
            </div>
            <div className="flex max-w-xs items-center space-x-2 px-4 py-4 text-sm font-medium text-gray-200">
              <p>Customer Engagement</p>
            </div>
          </div>
        </section>
      </div>
      <Counter/>
      <Image/>
      <ImageContent/>
      
      <Testimonial/>
      <Information/>
    </div>
  );
}

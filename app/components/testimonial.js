export default function Testimonial() {
  return (
    <div className="py-6 bg-gray-800 text-white sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-blue-400">
              What our clients say about using our CRM
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              Client Testimonials
            </h2>
          </div>

          <div className="order-3 mt-8 text-center md:mt-16">
            <button className="rounded-lg border-2 border-blue-600 bg-blue-600 px-6 py-2 font-medium text-white transition hover:translate-y-1 hover:bg-blue-700">
              More reviews on TrustPilot
            </button>
          </div>

          <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
              <div className="flex flex-1 flex-col justify-between border border-blue-500 bg-gray-900 p-6 lg:py-7 lg:px-5">
                <div className="flex-1">
                  <p className="text-2xl font-bold text-blue-400">
                    Absolutely recommended!
                  </p>
                  <blockquote className="mt-6 text-gray-300">
                    "This CRM transformed how we manage our client data and
                    pipelines. The automation saved hours every week!"
                  </blockquote>
                </div>
                <div className="mt-8 inline-flex items-center">
                  <div>
                    <p className="text-base font-bold text-white">
                      James Khawalski
                    </p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      CEO, Mavoline
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
              <div className="flex flex-1 flex-col justify-between border border-blue-500 bg-gray-900 p-6 lg:py-7 lg:px-5">
                <div className="flex-1">
                  <p className="text-2xl font-bold text-blue-400">
                    Incredible Service!
                  </p>
                  <blockquote className="mt-6 text-gray-300">
                    "From lead tracking to follow-ups, everything is
                    streamlined. Our sales team has never been more productive."
                  </blockquote>
                </div>
                <div className="mt-8 inline-flex items-center">
                  <div>
                    <p className="text-base font-bold text-white">
                      Jacob Jones
                    </p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      VP Sales, CreativeLoop
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
              <div className="flex flex-1 flex-col justify-between border border-blue-500 bg-gray-900 p-6 lg:py-7 lg:px-5">
                <div className="flex-1">
                  <p className="text-2xl font-bold text-blue-400">
                    Game changer for support
                  </p>
                  <blockquote className="mt-6 text-gray-300">
                    "Customer interactions are so much easier to track now. Our
                    support ratings have jumped 40%!"
                  </blockquote>
                </div>
                <div className="mt-8 inline-flex items-center">
                  <div>
                    <p className="text-base font-bold text-white">
                      Jenny Wilson
                    </p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      Head of Support, PixelPoint
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="md:col-span-3 lg:col-span-1 flex flex-col overflow-hidden shadow-xl shadow-blue-200">
              <div className="flex flex-1 flex-col justify-between border border-blue-500 bg-gray-900 p-6 lg:py-7 lg:px-5">
                <div className="flex-1">
                  <p className="text-2xl font-bold text-blue-400">
                    Saved countless hours
                  </p>
                  <blockquote className="mt-6 text-gray-300">
                    "Automated workflows and real-time analytics let us focus on
                    strategy instead of spreadsheets."
                  </blockquote>
                </div>
                <div className="mt-8 inline-flex items-center">
                  <div>
                    <p className="text-base font-bold text-white">
                      Amara Singh
                    </p>
                    <p className="mt-0.5 text-sm text-gray-400">
                      Marketing Lead, BrightTech
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

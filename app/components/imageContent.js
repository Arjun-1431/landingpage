export default function ImageContent() {
  return (
    <>
      <div className="bg-gray-800 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <p className="text-center font-bold text-green-400 md:text-left">
                Who we are
              </p>

              <h1 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl md:mb-6 md:text-left">
                Empowering CRM Success Since 1967
              </h1>

              <p className="mb-6 text-gray-300 sm:text-lg md:mb-8">
                With decades of experience, we've helped businesses streamline operations, manage customer relationships, and drive growth using powerful CRM strategies tailored to every industry.
              </p>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-700 shadow-lg md:h-auto">
                <img
                  src="./images/img1.jpg"
                  loading="lazy"
                  alt="CRM technology illustration"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-2 text-center text-xl font-semibold text-white sm:text-2xl md:mb-4 md:text-left">
                About Us
              </h2>

              <p className="mb-6 text-gray-300 sm:text-lg md:mb-8">
                We specialize in helping businesses build strong, data-driven customer relationships. From lead tracking to post-sale support, our CRM approach focuses on maximizing customer satisfaction and improving team efficiency. Whether you're a startup or an enterprise, we're here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

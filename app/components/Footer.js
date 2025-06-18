import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        {/* Brand Section */}
        <div className="max-w-sm">
          <div className="mb-6 flex h-12 items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              Bel<span className="text-blue-500">Air</span>.
            </span>
          </div>
          <p className="text-gray-400">
            Helping businesses grow with smarter, faster, and more powerful CRM
            solutions.
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h4 className="mt-4 mb-2 text-white font-semibold xl:mb-4">
            Head Office
          </h4>
          <p className="text-gray-400">
            35 Remida Heights, <br />
            45 Street,
            <br />
            South Carolina, USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="mt-4 mb-2 text-white font-semibold xl:mb-4">
            Quick Links
          </h4>
          <nav aria-label="Footer Navigation" className="text-gray-400">
            <ul className="space-y-3">
              <li>
                <Link className="hover:text-blue-500 hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 hover:underline"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 hover:underline"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="mt-4 mb-2 text-white font-semibold xl:mb-4">
            Stay in the loop
          </h4>
          <p className="mb-4 text-gray-400">
            Subscribe to receive the latest CRM updates, tips, and product news.
          </p>
          <div className="flex flex-col">
            <input
              type="email"
              className="mb-3 h-12 w-full rounded-xl bg-gray-700 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div>© 2025 BelAir. All Rights Reserved.</div>
          <div className="space-x-2">
            <a className="hover:underline hover:text-white" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="hover:underline hover:text-white" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

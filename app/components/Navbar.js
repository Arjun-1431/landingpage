"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="overflow-x-hidden bg-gray-800 relative flex max-w-screen-wl flex-col overflow-hidden px-4 py-4 text-gray-200 md:mx-auto md:flex-row md:items-center">
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <div className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="font-bold md:mr-12">
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="md:mr-12">
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li className="md:mr-12">
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
            <li className="md:mr-12">
              <Link
                href="/login"
                className={pathname === "/login" ? "active" : ""}
              >
                <button className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-blue-500 hover:text-white">
                  Login
                </button>
              </Link>
              <Link
                href="/signup"
                className={pathname === "/signup" ? "active" : ""}
              >
                <button className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-blue-500 hover:text-white">
                  Register
                </button>
              </Link>
            </li>           
          </ul>
        </div>
      </div>
    </>
  );
}

// "use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#About" },
  // { name: "Github", href: "https://github.com/anasyakubu", target: "_blank" },
  { name: "Projects", href: "/Projects" },
  { name: "Blog", href: "/Blog" },
  // { name: "Contact", href: "#" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const handleLogout = () => {
  //   // Clear token from localStorage or sessionStorage
  //   localStorage.removeItem("token");
  //   // Redirect to login page
  //   history.push("/login");
  // };

  return (
    <div className="bg-transparent">
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#f8f8f8]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://www.instagram.com/anass.developer/"
              className="p-3 bg-white rounded-full m-2 icon"
              target="_blank"
            >
              <FaInstagram className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/anas-yakubu-02a20725a/"
              className="p-3 bg-white rounded-full m-2 icon"
              target="_blank"
            >
              <FaLinkedin className="text-black" />
            </a>
            <a
              href="https://github.com/anasyakubu"
              className="p-3 bg-white rounded-full m-2 icon"
              target="_blank"
            >
              <FaGithub className="text-black" />
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1b1b1b] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-20 w-auto" src={Logo} alt="Logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white 0"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex lg:flex-1 lg:justify-end">
                  <a
                    href="https://www.instagram.com/anass.developer/"
                    className="p-3 bg-white rounded-full m-2 icon"
                    target="_blank"
                  >
                    <FaInstagram className="text-black" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anas-yakubu-02a20725a/"
                    className="p-3 bg-white rounded-full m-2 icon"
                    target="_blank"
                  >
                    <FaLinkedin className="text-black" />
                  </a>
                  <a
                    href="https://github.com/anasyakubu"
                    className="p-3 bg-white rounded-full m-2 icon"
                    target="_blank"
                  >
                    <FaGithub className="text-black" />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

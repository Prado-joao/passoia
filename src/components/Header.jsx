import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-all duration-300
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
              : "bg-transparent py-4"
          }
        `}
      >
        <div className="flex justify-between items-center px-5 max-w-7xl mx-auto">
          <a href="#">
            <img
              className="w-32 md:w-40 transition-all duration-300"
              src="https://i.ibb.co/ds2t94B5/618b65a590211c5501c4dcd53b5aeadf26f9afb6.png"
              alt="Logo"
            />
          </a>

          <div className="hidden md:flex items-center">
            <ul className="flex gap-2">
              {["looks", "lancamentos", "novidades"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="block px-6 py-3 text-lg font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-12 h-12 md:hidden" />
        </div>
      </nav>

      <button
        onClick={toggleMenu}
        className={`
          fixed top-4 right-5 z-60 p-3 
          bg-white/90 backdrop-blur-sm rounded-xl shadow-lg 
          hover:bg-white transition-all md:hidden
          ${isScrolled ? "top-3" : "top-5"}
        `}
        aria-label="Menu"
      >
        <div className="w-7 h-6 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-50 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-500 ease-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-8">
          <ul className="space-y-4">
            {["looks", "lancamentos", "novidades"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className="block py-4 px-6 text-xl font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-[8rem] md:h-[11rem]" />
    </>
  );
}

export default Header;

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-[#0a0a0c]/95 to-transparent backdrop-blur-sm">
      <NavLink
        to="/"
        className="font-['Inter'] text-lg font-normal tracking-[0.1em] text-[#f5f5f5] no-underline opacity-100 transition-opacity duration-300 hover:opacity-80"
      >
        Architecs
      </NavLink>

      <nav className="flex items-center gap-8">
        <ul className="flex gap-8 list-none m-0 p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-[rgba(255,255,255,0.5)] no-underline text-sm font-normal tracking-[0.02em] relative pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-[#f5f5f5] after:w-full"
                    : "hover:text-[#f5f5f5]"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#f5f5f5] after:transition-all after:duration-300`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `text-[rgba(255,255,255,0.5)] no-underline text-sm font-normal tracking-[0.02em] relative pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-[#f5f5f5] after:w-full"
                    : "hover:text-[#f5f5f5]"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#f5f5f5] after:transition-all after:duration-300`
              }
            >
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[rgba(255,255,255,0.5)] no-underline text-sm font-normal tracking-[0.02em] relative pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-[#f5f5f5] after:w-full"
                    : "hover:text-[#f5f5f5]"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#f5f5f5] after:transition-all after:duration-300`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        <button
          className="flex flex-col gap-1.5 bg-none border-none cursor-pointer p-2 ml-6 transition-transform duration-300 hover:scale-110"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-[#f5f5f5] block transition-all duration-300" />
          <span className="w-6 h-0.5 bg-[#f5f5f5] block transition-all duration-300" />
          <span className="w-6 h-0.5 bg-[#f5f5f5] block transition-all duration-300" />
        </button>
      </nav>
    </header>
  );
}

export default Header;

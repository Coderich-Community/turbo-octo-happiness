import logo from "./../assets/favicon/android-chrome-512x512.png";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4  border-gray">
      <div className="container mx-auto flex justify-evenly items-center">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} class="h-8" alt="AgriLink Logo" />
          <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            AgriLink
          </span>
        </a>
        <div className="flex space-x-4 flex-1">
          <a
            href="#home"
            className="text-gray-400 hover:text-white flex-1 text-center"
          >
            Home
          </a>
          <a
            href="#aboutus"
            className="text-gray-400 hover:text-white flex-1 text-center"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-400 hover:text-white flex-1 text-center"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white flex-1 text-center"
          >
            Contact Us
          </a>
          <a
            href="#reviews"
            className="text-gray-400 hover:text-white flex-1 text-center"
          >
            Blog
          </a>

          <a
            href="/signup"
            className="text-gray-400 hover:text-white flex-1 text-center"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 flex-1 text-center"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

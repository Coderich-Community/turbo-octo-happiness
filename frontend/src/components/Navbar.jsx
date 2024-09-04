export const Navbar = () =>{
    //
  return (
    <nav className="bg-gray-800 p-4  border-gray">
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="flex space-x-4 flex-1">
          <a href="#" className="text-gray-400 hover:text-white flex-1 text-center">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white flex-1 text-center">
            Our Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white flex-1 text-center">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white flex-1 text-center">
            Contact Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white flex-1 text-center">
            Blog
          </a>
          
          <a href="#" className="text-gray-400 hover:text-white flex-1 text-center">
            Sign in
          </a>
          <a
            href="#"
            className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 flex-1 text-center"
          >
            Sign up
          </a>
       
        </div>
        
          
         
      </div>
    </nav>
  );


};
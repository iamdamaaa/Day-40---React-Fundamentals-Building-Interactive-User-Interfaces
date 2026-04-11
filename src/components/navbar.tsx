  import { UserRound, UserPlus } from "lucide-react";
  import { useState } from "react";

const Navbar = () => {
    //pindahkan state isopen ke navbar karena dibutuhkan
    const [isOpen, setIsOpen] = useState<boolean>(false);

      return (
  <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-white/70 backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-red-500/30">
              A
            </div>
            <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Index Actress
            </span>
          </a>

          <div className="flex md:order-2 space-x-3">
            <div><UserRound className="w-6 h-6 text-gray-700"/></div>
            <div> <UserPlus className="w-6 h-6 text-gray-700"/>
</div>

          </div>

          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-2xl bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li><a href="#" className="block py-2 px-3 text-red-500 font-bold">Dashboard</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-red-500">Analytics</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-red-500">Campaigns</a></li>
                            <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-red-500">Billing</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-700 hover:text-red-500">Help</a></li>
            </ul>
          </div>
        </div>
      </nav>

  );
};


  export default Navbar;
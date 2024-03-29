import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_png.avif';
const Navbar = () => {
   const navigate = useNavigate();
   return (
      <nav className="py-6">
         <div className="container mx-auto flex items-center justify-between gap-x-6">
            <a
               onClick={() => navigate('/')}
               className="cursor-pointer"
            >
               <img className="h-[40px]" src={logo} alt="Lws" />
            </a>
            <a
               className="px-5 py-2 bg-[#172227] rounded-[44px] cursor-pointer"
               onClick={() => navigate('/add')}
            >
               Add Furniture
            </a>
         </div>
      </nav>
   );
};

export default Navbar;

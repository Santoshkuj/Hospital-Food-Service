import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, toggleLogin } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const {isAuthenticated} = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsHovered(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  const handleLoginClick = (loginType) => {
    dispatch(toggleLogin(loginType));
    navigate('/login')
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">
        <span>Hospital Food Delivery</span>
      </div>

      {/* Login Button with Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="bg-blue-800 p-2 rounded-lg hover:bg-blue-700" onClick={()=>{isAuthenticated && dispatch(logout())}}>
          {!isAuthenticated ? 'Login' : 'Logout'}
        </button>

        {/* Dropdown Menu */}
        {isHovered && !isAuthenticated && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg transition-opacity duration-300">
            <ul>
              <li>
                <button className="block px-4 py-2 hover:bg-gray-200"  onClick={() => handleLoginClick('Manager')}>
                  Login as Manager
                </button>
              </li>
              <li>
                <button className="block px-4 py-2 hover:bg-gray-200"
                 onClick={() => handleLoginClick('Pantry')}>
                  Login as Pantry
                </button>
              </li>
              <li>
                <button className="block px-4 py-2 hover:bg-gray-200"
                 onClick={() => handleLoginClick('Delivery')}>
                  Login as Delivery
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

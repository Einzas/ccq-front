import { jwtDecode } from 'jwt-decode';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginOut } from '../../../store/slices/userInfo.slice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia para el menú

  const user = localStorage.getItem('userInfo');
  const token = JSON.parse(user)?.token;
  const userNameData = jwtDecode(token)?.user_name?.split(' ');
  //if have 4 names get 0 and 2
  const userName =
    userNameData.length === 4
      ? `${userNameData[0]} ${userNameData[2]}`
      : `${userNameData[0]} ${userNameData[1]}`;

  if (!localStorage.getItem('user_name')) {
    localStorage.setItem('user_name', userNameData[0]);
  }

  const active = 'bg-white/80 text-black font-semibold rounded mr-5';

  const detectarRuta = (url) => {
    if (window.location.pathname === url) {
      return active;
    }
    return '';
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(loginOut());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Cierra el menú si se hace clic fuera de él
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <section>
      <div className="bg-[#408c6c] h-screen w-64 grid grid-rows-[auto_1fr_auto]">
        <div className="grid items-center font-semibold ml-5 h-16 p-5">
          <h1 className="text-white text-xl">Camara de</h1>
          <h1 className="text-white text-xl">Comercio Jipijapa</h1>
        </div>
        <nav className="mt-14 ml-5">
          <a
            href="dashboard"
            className={`flex items-center text-gray-100 py-2 pl-4 nav-item hover:bg-white/30 hover:mr-5 hover:text-black ${detectarRuta(
              '/dashboard'
            )} `}
          >
            <i className="bx bx-grid-alt text-xl"></i>
            <span className="mx-2">Dashboard</span>
          </a>
          <a
            href="socios"
            className={`flex items-center text-gray-100 py-2 pl-4 nav-item hover:bg-white/30 hover:mr-5 hover:text-black ${detectarRuta(
              '/socios'
            )}`}
          >
            <i className="bx bx-user text-xl"></i>
            <span className="mx-2">Gestión de Socios</span>
          </a>
          <a
            href="notificaciones"
            className={`flex items-center text-gray-100 py-2 pl-4 nav-item hover:bg-white/30 hover:mr-5 hover:text-black ${detectarRuta(
              '/notificaciones'
            )} `}
          >
            <i className="bx bx-bell text-xl"></i>
            <span className="mx-2">Notificaciones</span>
          </a>
          <a
            href="membresias"
            className={`flex items-center text-gray-100 py-2 pl-4 nav-item hover:bg-white/30 hover:mr-5 hover:text-black ${detectarRuta(
              '/membresias'
            )}`}
          >
            <i className="bx bx-credit-card text-xl"></i>
            <span className="mx-2">Membresias</span>
          </a>
          <a
            href="eventos"
            className={`flex items-center text-gray-100 py-2 pl-4 nav-item hover:bg-white/30 hover:mr-5 hover:text-black ${detectarRuta(
              '/eventos'
            )}`}
          >
            <i className="bx bx-calendar text-xl"></i>
            <span className="mx-2">Eventos</span>
          </a>
          <a
            href="informes"
            className={`flex items-center text-gray-100 py-2 pl-4 nav-item hover:bg-white/30 hover:mr-5 hover:text-black ${detectarRuta(
              '/informes'
            )}`}
          >
            <i className="bx bx-line-chart text-xl"></i>
            <span className="mx-2">Informes</span>
          </a>
        </nav>

        <div className="grid items-center font-semibold ml-5 mb-2">
          <hr />
          <nav>
            <a
              href="ayuda"
              className={`flex items-center text-gray-100 py-2 pl-4 nav-item hover:bg-white/30 hover:mr-5 hover:text-black ${detectarRuta(
                '/ayuda'
              )}`}
            >
              <i className="bx bx-support text-xl"></i>
              <span className="mx-2">Centro de Ayuda</span>
            </a>
            <a
              href="configuracion"
              className={`flex items-center text-gray-100 py-2 pl-4 nav-item hover:bg-white/30 hover:mr-5 hover:text-black ${detectarRuta(
                '/configuracion'
              )}`}
            >
              <i className="bx bx-cog text-xl"></i>
              <span className="mx-2">Configuración</span>
            </a>
            {/* perfil block */}
            <div
              ref={menuRef}
              className="relative pl-4 grid grid-cols-[auto_1fr_auto] items-center bg-black/30 py-4 mr-5"
            >
              <i className="bx bx-user text-xl text-white"></i>
              <span className="text-white mx-2">{userName}</span>
              <button onClick={toggleMenu} className="hover:cursor-pointer">
                <i className="bx bx-dots-vertical-rounded text-xl text-white"></i>
              </button>
              {isMenuOpen && (
                <div className="absolute left-0 bottom-16 mt-2 w-48 bg-white border border-[#408c6c] text-gray-800 rounded shadow-md z-10">
                  <a
                    href="perfil"
                    className="block px-4 py-2 hover:bg-green-300"
                  >
                    Perfil
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 w-full text-start hover:bg-green-300"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

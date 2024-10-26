import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/userInfo.slice';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  //detectar si el usuario esta logeado

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  const isAuth = useAuth();
  if (isAuth) {
    window.location.href = '/dashboard';
  }

  return (
    <>
      <section className="min-h-screen grid place-content-center items-center bg-gray-100">
        {/* Contenedor */}
        <article className="p-8 grid gap-5">
          <div className="text-center font-semibold flex flex-col -space-y-1">
            <h4 className="text-gray-700">Camara de</h4>
            <h4 className="text-green-700">
              Comercio <span className="text-red-600">Jipijapa</span>
            </h4>
            <h1 className="text-green-700 text-3xl pt-2 font-bold">
              ¡Bienvenido de Nuevo!
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-700">
                Nombre de usuario o correo electrónico
              </label>
              <input
                type="text"
                placeholder="Ingrese su nombre de usuario o correo electrónico"
                id="email"
                name="email"
                {...register('email')}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm text-green-700"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="Ingrese su contraseña"
                name="password"
                {...register('password')}
                className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div className="mb-6 flex justify-end items-center">
              <Link
                to="#"
                className="text-sm text-gray-600 hover:text-gray-400"
              >
                Recuperar contraseña
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-5   00 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Iniciar sesión
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default Login;

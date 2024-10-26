import Sidebar from '../components/shared/template/Sidebar';

const Socios = () => {
  return (
    <main className="w-full min-h-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <section className="p-5 mt-5">
        <h1 className="text-xl text-red-600 font-semibold">
          Listado de Socios
        </h1>
        <article className="flex flex-col md:flex-row gap-5 justify-between mt-3">
          <div className="relative w-full md:w-[65%] lg:w-[70%]">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <i className="bx bx-search "></i>
            </span>
            <input
              type="text"
              placeholder="Buscar socio"
              className="border border-gray-300 rounded-md p-2 pl-10 w-full focus:placeholder-transparent"
            />
          </div>
          <div className="mt-3 md:mt-0 md:flex md:items-center md:space-x-2">
            <button className="border border-[#408c6c] text-sm text-[#408c6c] px-3 py-2  rounded hover:scale-105">
              <i className="bx bx-filter"></i> Filtros
            </button>
            <button className="bg-[#408c6c] border border-[#408c6c] text-sm text-white py-2 px-3 rounded flex items-center gap-2 hover:scale-105">
              <i className="bx bx-plus"></i> Nuevo Socio
            </button>
          </div>
        </article>
        <article className="mt-5">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-gray-400  text-sm">
                <th className="p-2 border-b text-start font-thin">Socio</th>
                <th className="p-2 border-b text-start font-thin">Empresa</th>
                <th className="p-2 border-b text-start font-thin">
                  Tipo Empresa
                </th>
                <th className="p-2 border-b text-start font-thin">Membresía</th>
                <th className="p-2 border-b text-start font-thin">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-2 border-b">Nombre del Socio</td>
                <td className="p-2 border-b">Nombre de la Empresa</td>
                <td className="p-2 border-b">Tipo de Empresa</td>
                <td className="p-2 border-b">Tipo de Membresía</td>
                <td className="p-2 border-b">
                  <button className="text-blue-600 hover:underline">
                    Editar
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-2 border-b">Nombre del Socio</td>
                <td className="p-2 border-b">Nombre de la Empresa</td>
                <td className="p-2 border-b">Tipo de Empresa</td>
                <td className="p-2 border-b">Tipo de Membresía</td>
                <td className="p-2 border-b">
                  <button className="text-blue-600 hover:underline">
                    Editar
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-2 border-b">Nombre del Socio</td>
                <td className="p-2 border-b">Nombre de la Empresa</td>
                <td className="p-2 border-b">Tipo de Empresa</td>
                <td className="p-2 border-b">Tipo de Membresía</td>
                <td className="p-2 border-b">
                  <button className="text-blue-600 hover:underline">
                    Editar
                  </button>
                </td>
              </tr>
              {/* Agrega más filas según sea necesario */}
            </tbody>
          </table>
        </article>
      </section>
    </main>
  );
};

export default Socios;

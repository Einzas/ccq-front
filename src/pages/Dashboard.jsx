import Sidebar from '../components/shared/template/Sidebar';

const Dashboard = () => {
  const user_name = localStorage.getItem('user_name');
  if (!user_name) {
    window.location.href = '/dashboard';
  }
  return (
    <main className="w-full min-h-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <section className="p-5 mt-5">
        <h1 className="text-xl text-red-600 font-semibold">
          Bienvenido {user_name} 👋
        </h1>
      </section>
    </main>
  );
};

export default Dashboard;

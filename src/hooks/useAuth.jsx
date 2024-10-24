export const useAuth = () => {
  const user = localStorage.getItem("user"); // Aquí puedes verificar si el usuario está logeado.
  return user ? true : false;
};

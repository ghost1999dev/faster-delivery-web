import type React from "react";
interface LoginPageProps {
  onNavigateToRegister: () => void;
}
export const LoginPage: React.FC<LoginPageProps> = ({
  onNavigateToRegister,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <span>Faster Delivery</span>
        <nav className="flex items-center gap-2">
          <a href="">Inicio</a>
          <a href="">Informacion</a>
          <a href="">Comunidad</a>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Bienvenido
            </h2>
            <p className="mt-2 text-sm">Crear nueva cuenta</p>
          </div>
          <form action="">
            <input
              type="text"
              className="w-full px-4 py-3 border border-slate-400 rounded-lg"
              placeholder="Usuario o correo"
              required
            />
            <input
              type="text"
              className="w-full mt-2 mb-4 px-4 py-3 border border-slate-400 rounded-lg"
              placeholder="Contrasenia"
              required
            />
            <div className="mb-4 flex items-center justify-between">
              <label
                htmlFor=""
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300"
                />
                <span className="text-sm">Recuerdame</span>
              </label>
              <a
                href=""
                className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
              >
                Olvide la contrasenia
              </a>
            </div>
            <div>
              <button className="w-full py-3 px-4 bg-blue-800 rounded-lg text-white hover:bg-blue-800 hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50">
                Loguearse
              </button>
            </div>
            <div className="mt-4">
              <button 
                className="w-full py-3 px-4 bg-blue-600 rounded-lg text-white hover:bg-blue-800 hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50"
                onClick={onNavigateToRegister}
              >
                Crear nueva cuenta
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

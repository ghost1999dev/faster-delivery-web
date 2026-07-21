import type React from "react";

interface RegisterPageProps {
  onNavigateToLogin: () => void;
}

export const ReegisterPage: React.FC<RegisterPageProps> = ({
  onNavigateToLogin,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/35 relative overflow-hidden font-sans">
      <header className="relative w-full border-b border-slate-100 bg-white/80">
        <div className="max-w-7xl mx-auto  px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            Fernandodev
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="">Explorar</a>
              <a href="">Ofertas</a>
              <a href="">Historia</a>
              <a href="">Ayuda</a>
            </nav>
          </div>
          <div className="flex items-center">
            <button
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold"
              onClick={onNavigateToLogin}
            >
              Loguearse
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 mx-w-8xl w-full mx-auto px-6 py-10 gap-8 items-center justify-center">
        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-slate-100/50 border p-8 sm:p-10">
            <div className="mb-8">
              <h1 className="text-3xl font-black ">Crear una cuenta</h1>
              <p className="mt-2.5 text-sm font-medium">
                Crea tu cuenta y disfruta de tus promociones recientes
              </p>
            </div>

            <form action="">
              <label className="block text-xs font-semibold uppercase mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate-400"
                placeholder="Registra tu nombre"
              />
              <label className="block text-xs font-semibold uppercase mb-2">
                Direccion de correo
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate-400"
                placeholder="name@example.com"
              />
              <div>
                <label className="block text-xs font-semibold uppercase mb-2">
                  Contrasenia
                </label>
                <div className="relative">
                  <input
                    className="w-full mb-4 pl-4 pr-11 py-3 border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-slate-800 placeholder-slate-400 outline-none transition-all text-sm"
                    placeholder="Create a password"
                    required
                  />
                </div>
              </div>
               <button className="w-full py-3 px-4 bg-blue-800 rounded-lg text-white hover:bg-blue-800 hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50">
                Crear una cuenta
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

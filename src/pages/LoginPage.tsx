export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <span>Faster Delivery</span>
        <nav className="flex items-center gap-6">
          <a href="">Home</a>
          <a href="">Explore</a>
          <a href="">Community</a>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Bienvenido
            </h2>
            <p className="mt-2 text-sm ">Create new account</p>
          </div>
          <form action="" className="mt-8 space-y-4">
            <input
              type="text"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg"
              placeholder="Username or email"
              required
            />
            <input
              type="text"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg"
              placeholder="Password"
              required
            />
            <div className="flex items-center justify-between">
              <label
                htmlFor=""
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-blue-700"
                />
                <span>Remember me</span>
              </label>
              <a
                href="#forgot"
                className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
              >
                Forgot your password?
              </a>
            </div>
            <div>
                <button className="w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 rounded-lg text-white hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50">Log in</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

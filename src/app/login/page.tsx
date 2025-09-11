export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="flex flex-col gap-4 p-6 border rounded shadow-md w-80">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <input
          type="text"
          placeholder="Usuario"
          className="border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}


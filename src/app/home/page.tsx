export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Bienvenido a la página de inicio
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Aquí iría tu contenido principal después del login.
      </p>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => {
          alert("Cerrar sesión"); // aquí luego pondrás la lógica real
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

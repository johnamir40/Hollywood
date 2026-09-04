export default function SectionLogin() {
  return (
    <section className="flex-1 flex items-center justify-center bg-linear-to-br from-[#020617] via-[#0b2f6b] to-[#3b82f6] px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border flex flex-col gap-4 animate__animated animate__fadeIn  ">
        <h1 className="text-2xl font-bold text-center text-black">
          Please Login
        </h1>

        <input
          type="text"
          placeholder="User Name"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="btn border-none bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
          Sign In
        </button>
      </div>
    </section>
  );
}

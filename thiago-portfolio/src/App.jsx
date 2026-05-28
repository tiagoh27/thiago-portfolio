export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* TOPO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        
        <img
          src="https://i.imgur.com/1X4H7wM.jpeg"
          alt="Thiago"
          className="w-56 h-56 rounded-full object-cover border-4 border-green-500 shadow-[0_0_40px_#00ff88]"
        />

        <h1 className="text-6xl font-bold mt-8 text-green-400">
          Thiago.exe27
        </h1>

        <p className="text-zinc-400 mt-4 text-xl">
          Front-End Developer • UI Designer • Dark Systems
        </p>

        <p className="text-green-500 italic mt-6">
          “Nas sombras nasce o controle.”
        </p>

        <a
          href="https://instagram.com/thiago.exe27"
          target="_blank"
          className="mt-8 px-6 py-3 border border-green-500 rounded-xl hover:bg-green-500 hover:text-black transition"
        >
          Meu Instagram
        </a>
      </section>

      {/* PROJETOS */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-green-400 mb-10">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <img
              src="https://i.imgur.com/KyUftYx.jpeg"
              alt="Projeto"
              className="w-full"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-400">
                ShadowOS
              </h3>

              <p className="text-zinc-400 mt-3">
                Sistema visual cyberpunk focado em segurança,
                inteligência artificial e controle digital.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

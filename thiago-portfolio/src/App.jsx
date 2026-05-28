export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* TOPO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">

        <img
          src="https://i.imgur.com/22Dc9XL.png"
          alt="Thiago"
          className="w-56 h-56 rounded-full object-cover border-4 border-green-500 shadow-[0_0_40px_#00ff88]"
        />

        <h1 className="text-6xl font-bold mt-8 text-green-400">
          Thiago.exe27
        </h1>

        <p className="text-zinc-400 mt-4 text-xl">
          Front-End Developer • UI Designer • Dark Systems
        </p>

        <p className="text-green-400 italic mt-8 text-2xl">
          “Nas sombras nasce o controle.”
        </p>

        <a
          href="https://instagram.com/thiago.exe27"
          target="_blank"
          className="mt-10 border border-green-500 px-8 py-4 rounded-2xl hover:bg-green-500 hover:text-black transition-all"
        >
          Meu Instagram
        </a>

      </section>

      {/* PROJETOS */}
      <section className="px-6 py-20">

        <h2 className="text-5xl font-bold text-center text-green-400 mb-16">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-zinc-900 border border-green-500 rounded-3xl overflow-hidden shadow-[0_0_25px_#00ff88]">

            <img
              src="https://i.imgur.com/RwgfA7H.png"
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

          {/* CARD 2 */}
          <div className="bg-zinc-900 border border-green-500 rounded-3xl overflow-hidden shadow-[0_0_25px_#00ff88]">

            <img
              src="https://i.imgur.com/RwgfA7H.png"
              alt="Projeto"
              className="w-full"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-green-400">
                Dark Network
              </h3>

              <p className="text-zinc-400 mt-3">
                Interface inspirada em terminais hackers
                e monitoramento de sistemas globais.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

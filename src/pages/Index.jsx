import { useState } from "react";
import { useCor } from "../context/CorContext";

function Index() {
  const { corAtual, setCorAtual } = useCor();
  const [corSelecionada, setCorSelecionada] = useState("rosa");
  const ringClasses = {
    roxo: "ring-[#906276]",
    vermelho: "ring-[#B42B3C]",
    marrom: "ring-[#48312E]",
    rosa: "ring-[#DD5C86]",
  };
  const batons = {
    roxo: {
      imagem:
        "https://i.ibb.co/2YcwP1FJ/4cc2c563d46f1f453c234c2f2cfea137ce0cf535.png",
      nomeCor: "Violet Dream",
      descricao:
        "Roxo misterioso e sofisticado. Ideal para quem ama ousar com elegância.",

      cor: "#906276",
    },
    vermelho: {
      imagem:
        "https://i.ibb.co/C3sTj8Pr/b889211c864f95e62d98ad965144d13d971ccade.png",
      nomeCor: "Red Fire",
      descricao: "Vermelho clássico intenso. Poderoso, sensual e atemporal.",
      cor: "#B42B3C",
    },
    marrom: {
      imagem:
        "https://i.ibb.co/9msy3wdd/65c5f1514dc01ec121156047f8cc7ef6b6953422.png",
      nomeCor: "Chocolate Nude",
      descricao:
        "Marrom acinzentado quente. O nude perfeito dos anos 90, moderno e chique.",
      cor: "#48312E",
    },
    rosa: {
      imagem:
        "https://i.ibb.co/G3cT6Dt9/1036e85a836ad3feafe61f8a2ea7234ee967c517.png",
      nomeCor: "Rose Kiss",
      descricao:
        "Rosa suave e romântico, perfeito para o dia a dia com toque de delicadeza.",
      cor: "#DD5C86",
    },
  };
  const atual = batons[corSelecionada];
  const trocarCor = (chave) => {
    setCorSelecionada(chave);
    setCorAtual(batons[chave].cor);
  };
  return (
    <>
      <section id="intro">
        <img
          class="w-full"
          src="https://i.ibb.co/Q7F7qV24/f7b3fe0430699c2c8b464182f677b2d79fd95e21.jpg"
          alt=""
        />
      </section>
      <section id="looks" class="text-center mt-1">
        <h2 class="text-xl md:text-3xl font-bold mb-10 text-gray-800">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>
        <div class="max-w-5xl mx-auto md:max-w-7xl p-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co/1fRT8fL4/b634cb83ab02a94f26210ce4fe4f0aef73f10451.png"
              alt="Lábios"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <div class="absolute inset-0 m-3 flex items-end justify-start">
              <h3 class="text-white text-2xl md:text-4xl font-bold tracking-wider drop-shadow-2xl">
                Lábios
              </h3>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co/MxDmWsNJ/f5d836eff5d870d5cabe2eda352e54b076c9844d.jpg"
              alt="Lábios"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <div class="absolute inset-0 m-3 flex items-end justify-start">
              <h3 class="text-white text-2xl md:text-4xl font-bold tracking-wider drop-shadow-2xl">
                Olhos
              </h3>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co/CpzpC6Sp/0e4f9956e2e1b8a059eb88676ba73b6517cb80de.png"
              alt="Lábios"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <div class="absolute inset-0 m-3 flex items-end justify-start">
              <h3 class="text-white text-2xl md:text-4xl font-bold tracking-wider drop-shadow-2xl">
                Rosto
              </h3>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co/tTdN10FF/ff118e81d337da4d626a1a62a2f0f26681881548.png"
              alt="Lábios"
              class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity"></div>

            <div class="absolute inset-0 m-3 flex items-end justify-start">
              <h3 class="text-white text-2xl md:text-4xl font-bold tracking-wider drop-shadow-2xl">
                Tendência
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section id="lancamentos" className="py-16 text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-10 text-gray-800">
          APROVEITE OS LANÇAMENTOS
        </h2>

        <div className="max-w-4xl mx-auto md:flex md:gap-8 items-start">
          <div className="hidden md:flex md:flex-col gap-4">
            {[
              {
                chave: "rosa",
                preview:
                  "https://i.ibb.co/Rpdg1VzW/b969efde83eefd19eda0d31bc1bab98fd529f84a.png",
              },
              {
                chave: "vermelho",
                preview:
                  "https://i.ibb.co/rRBwKrRB/8106d59df4af7806b7f2076c8a0d42041feae248.png",
              },
              {
                chave: "roxo",
                preview:
                  "https://i.ibb.co/rfvN0Hdw/0dd2f75b65099f72591259236eeab9a854c25055.png",
              },
              {
                chave: "marrom",
                preview:
                  "https://i.ibb.co/Kc24Zw64/1014ce69b39da574cc5eb9c02d4ceb10e29ab29c.png",
              },
            ].map(({ chave, preview }) => (
              <img
                onClick={() => trocarCor(chave)}
                src={preview}
                alt={`Preview ${chave}`}
                className={`w-22 rounded-xl border-4 border-white shadow-xl cursor-pointer
          hover:scale-110 hover:-translate-y-2 transition duration-300
          ring-4 ${
            corSelecionada === chave
              ? `${ringClasses[chave]} shadow-2xl`
              : "ring-transparent"
          }`}
              />
            ))}
          </div>

          <img
            src={atual.imagem}
            alt={atual.nomeCor}
            className="w-80 md:w-96 mx-auto rounded-3xl shadow-2xl transition-all duration-700 ease-in-out"
          />

          <div className="mt-8 md:mt-0 md:flex-1 text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-1 my-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-7 h-7 fill-yellow-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              <span style={{ color: atual.cor }}>{atual.nomeCor}</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto md:mx-0 mb-10 italic">
              {atual.descricao}
            </p>

            <div className="flex justify-center gap-6">
              {["rosa", "vermelho", "roxo", "marrom"].map((chave) => (
                <button
                  key={chave}
                  onClick={() => trocarCor(chave)}
                  className={`
              w-14 h-14 rounded-full border-4 border-white shadow-xl
              transition-all duration-300 hover:scale-125 hover:-translate-y-4
              ring-3 ${
                corSelecionada === chave
                  ? `${ringClasses[chave]} shadow-2xl scale-110`
                  : "ring-transparent"
              }
            `}
                  style={{
                    backgroundColor: batons[chave].cor,
                  }}
                  aria-label={batons[chave].nomeCor}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="novidades" class="py-16 text-center">
        <h2 class="text-xl md:text-3xl font-bold mb-10 text-gray-800">
          NOVIDADADES PARA VOCÊ
        </h2>
        <img
          class="w-[24rem] m-auto md:w-full md:p-4"
          src="https://i.ibb.co/TBD9bkQ8/69c732a3b2946f5938eb1dfae44cebb4dd69d4b2.jpg"
          alt=""
        />
      </section>
    </>
  );
}

export default Index;

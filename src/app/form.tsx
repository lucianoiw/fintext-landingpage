"use client";

import React from "react";

interface FormProps {}

export const Form = ({}: FormProps) => {
  const [fornSubmited, setFormSubmited] = React.useState(0);

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("https://fintext.com.br/api", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setFormSubmited(2);
    } else {
      setFormSubmited(1);
    }
  };

  return (
    <>
      <section className="bg-gray-100 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-4/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Garanta seu acesso antecipado ao{" "}
              <span className="font-black">FinText</span>
            </h1>

            <p className="leading-relaxed mt-4">
              Seja um dos primeiros a experimentar a plataforma que vai
              transformar a maneira de planejar sua vida financeira. Inscreva-se
              para receber as novidades, participar dos testes iniciais e ajudar
              a construir o <span className="font-bold">FinText</span> junto com
              a gente.
            </p>
          </div>

          {fornSubmited === 2 ? (
            <div className="lg:w-2/6 md:w-1/2 rounded-lg text-center p-2 lg:p-8 flex flex-col items-center md:ml-auto w-full mt-10 md:mt-0 border border-gray-400 bg-gray-200">
              <p className="font-bold text-lg text-black">
                Seu cadastro foi realizado com sucesso!
              </p>
              <p>Você receberá um e-mail de confirmação.</p>

              <button
                className="bg-black hover:bg-gray-800 py-1 px-4 mt-3 rounded-lg text-white"
                onClick={() => setFormSubmited(0)}
              >
                Ok
              </button>
            </div>
          ) : (
            <form
              onSubmit={sendForm}
              className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg lg:p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <label
                    htmlFor="full-name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                {fornSubmited === 1 && (
                  <p className="text-red-500 text-xs font-bold text-center">
                    Ocorreu um erro ao enviar o formulário. Tente novamente.
                  </p>
                )}

                <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-md">
                  Cadastrar
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Seus dados estão protegidos conforme a LGPD.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

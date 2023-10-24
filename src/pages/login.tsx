
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#8b8b8b]">
      <div className="bg-[#0a1113] p-8 rounded shadow-lg w-96 h-200">
                    <div className="flex items-center justify-center">
                    <Image 
                    src="/images/logo.png"
                    alt="logo"
                    width={175}
                    height={175} />
                </div>
        <h2 className="text-2xl mb-3 text-center font-bold text-white">LOGIN</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded px-3 py-2 bg-[#d5d4d4]"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white font-bold">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded px-3 py-2 bg-[#d5d4d4]"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="bg-[#7c4b0c] text-white text-center h-10 w-full mx-auto block hover:bg-[#77490cda]"
          >
            ENTRAR
          </button>
          <div className="mt-3">
            <a
              href="#"
              className="border-solid md:border-dotted block text-center self-end p-2 text-white hover:underline  relative"
            >
              Esqueci minha senha
            </a>
          </div>
          <div className="text-center p-3 text-white">
            Não possui conta?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Registro
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Image from "next/image";

export default function Registro() {
    return (
        <div className="min-h-screen flex bg-[#8b8b8b] ">
            <div className="flex-grow flex justify-end">
                <div className="bg-[#0a1113] p-10 shadow-lg h-full w-7/12 ">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={200}
                            height={200}
                        />
                    </div>
                    <h2 className="text-3xl mb-3 text-center font-bold text-white">REGISTRE-SE</h2>
                    <div className="flex justify-center"> {/* Adicionamos uma div com a classe flex justify-center */}
                        <form>
                            <div className="text-white mb-4">
                                <label htmlFor="name" className="block font-bold">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-80 border rounded px-3 py-2 bg-[#c4e5ee] text-black"
                                    placeholder="Nome"
                                />
                            </div>
                            <div className="mb-4 text-white">
                                <label htmlFor="email" className="block font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-80 border rounded px-3 py-2 bg-[#c4e5ee] text-black"
                                    placeholder="seuemail@exemplo.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block font-bold text-white">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-80 border rounded px-3 py-2 bg-[#c4e5ee] mx-auto"
                                    placeholder="********"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block font-bold text-white ">
                                    Confirmar senha
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-80 border rounded px-3 py-2 bg-[#c4e5ee] text-black"
                                    placeholder="********"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="p-8">
                        <button
                            type="submit"
                            className="bg-[#5c4306] text-black text-center h-12 w-32 mx-auto block hover:bg-gray-800 font-semibold">
                            CADASTRAR
                        </button>
                        <div className="text-center p-3 text-white">
                            Já possui conta?{" "}
                            <a href="./login" className="text-blue-500 hover:underline">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

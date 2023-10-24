import React from "react";
import Image from "next/image";
export default function Recuperacao() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#8b8b8b]">
            <div className="border-solid bg-[#0a1113] p-8 rounded shadow-lg">
                <div className="flex items-center justify-center">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={175}
                        height={175}
                    />
                </div>
                <h2 className="text-2xl mb-3 text-center font-bold text-white">ESQUECEU A SENHA?</h2>
                <p className="mb-3 text-center text-white">Para recuperar sua senha insira o endereço de e-mail abaixo!
                </p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white font-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border rounded px-3 py-2 bg-[#d5d4d4]"
                            placeholder="Email registrado"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#7c4b0c] text-white text-center h-10 w-full mx-auto block hover:bg-[#77490cda]"
                    >
                        RECUPERAR
                    </button>
                </form>
            </div>
        </div>
            )
    }
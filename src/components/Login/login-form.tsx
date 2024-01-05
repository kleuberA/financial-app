"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <motion.div
            className="w-96 bg-[#2C2C2E] border border-[#3A3A3C] h-96 rounded-md p-4 flex flex-col gap-5 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            {/* <motion.div
                className="absolute bg-gradient-to-tr from-emerald-300 top-20 via-emerald-500 to-emerald-700 right-16 blur-3xl w-60 h-60 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, delay: 1.2 }}
            /> */}
            <h1 className="text-center text-white text-lg font-mono">Bem vindo há Plataforma!</h1>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-white text-sm">Email</Label>
                    <Input type="email" id="email" placeholder="johndoe@hotmail.com" />
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex flex-row justify-between">
                        <Label htmlFor="senha" className="text-white text-sm">Senha</Label>
                        <Link href="/recover-password" className="text-sm justify-end flex text-[#2C9C6A] hover:underline">Esqueceu a Senha?</Link>
                    </div>
                    <div className="relative">
                        <Input id="senha" type={showPassword ? 'text' : 'password'} placeholder="******" />
                        {
                            showPassword ?
                                <EyeSlash className="absolute top-2 right-4 cursor-pointer text-white/50" size={22} weight="thin" onClick={() => setShowPassword(!showPassword)} />
                                :
                                <Eye className="absolute top-2 right-4 cursor-pointer text-white/50" size={22} weight="thin" onClick={() => setShowPassword(!showPassword)} />
                        }
                    </div>
                    <span className="text-sm text-[#2C9C6A]">Não possui uma conta? <Link href="/auth/register" className="underline cursor-pointer">Cadastre-se aqui </Link></span>
                </div>
                <Button variant="primary">Login</Button>
            </div>
        </motion.div>
    )
}
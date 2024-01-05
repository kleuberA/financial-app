"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export default function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <motion.div
            className="w-[500px] bg-[#2C2C2E] border border-[#3A3A3C] h-[470px] rounded-md p-4 flex flex-col gap-5 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            <h1 className="text-center text-white text-lg font-mono">Bem vindo há Plataforma! Cadastre-se</h1>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-5 justify-between">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="name" className="text-white text-sm">Nome</Label>
                        <Input type="text" id="name" placeholder="John" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="sobrenome" className="text-white text-sm">Sobrenome</Label>
                        <Input type="text" id="sobrenome" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <Label htmlFor="email" className="text-white text-sm">Email</Label>
                    <Input type="email" id="email" placeholder="johndoe@hotmail.com" />
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex flex-row justify-between">
                        <Label htmlFor="senha" className="text-white text-sm">Senha</Label>
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
                </div>
                <div className="flex gap-2 flex-col">
                    <div className="flex flex-row justify-between">
                        <Label htmlFor="confirmPassword" className="text-white text-sm">Confirmar Senha</Label>
                    </div>
                    <div className="relative">
                        <Input id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder="******" />
                        {
                            showConfirmPassword ?
                                <EyeSlash className="absolute top-2 right-4 cursor-pointer text-white/50" size={22} weight="thin" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                :
                                <Eye className="absolute top-2 right-4 cursor-pointer text-white/50" size={22} weight="thin" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                        }
                    </div>
                </div>
                <Button variant="primary">Cadastrar</Button>
            </div>
        </motion.div>
    )
}